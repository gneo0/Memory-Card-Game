import { useEffect, useState, createContext, useContext } from 'react';
import { checkWinner, initialCards } from '../lib/helpers';

const GameContext = createContext(null);

export default function GameProvider({ children }) {
	const [cards, setCards] = useState(initialCards);
	const [choiceOne, setChoiceOne] = useState('');
	const [choiceTwo, setChoiceTwo] = useState('');
	const allCardsFlipped = checkWinner(cards);

	const handleFlipCard = (index, card) => {
		if (allCardsFlipped) return;

		const newCards = cards.map((card, i) => {
			return i === index ? { ...card, flipped: true } : card;
		});
		setCards(newCards);

		if (!choiceOne) setChoiceOne(card.fruit);
		else if (!choiceTwo) setChoiceTwo(card.fruit);
	};

	const handleResetChoices = () => {
		setChoiceOne('');
		setChoiceTwo('');
	};

	useEffect(() => {
		function check() {
			if (!choiceOne || !choiceTwo) return;

			let id;
			if (choiceOne === choiceTwo) {
				handleResetChoices();
			} else if (choiceOne !== choiceTwo) {
				id = setTimeout(() => {
					const newCards = cards.map((card) => {
						return card.fruit === choiceTwo || card.fruit === choiceOne
							? { ...card, flipped: false }
							: card;
					});

					setCards(newCards);
					handleResetChoices();
				}, 700);
			}

			return () => clearTimeout(id);
		}

		check();
	}, [choiceOne, choiceTwo, cards]);

	return (
		<GameContext.Provider value={{ cards, setCards, handleFlipCard }}>
			{children}
		</GameContext.Provider>
	);
}

export const useGame = () => {
	const context = useContext(GameContext);

	if (context === undefined)
		throw new Error("Game's context must be used inside the GameProvider");

	return context;
};

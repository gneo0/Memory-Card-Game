import { useGame } from '../context/GameContext';

const Card = ({ card, index }) => {
	const { handleFlipCard } = useGame();

	return (
		<li className={`card ${card.flipped ? 'flipped' : ''}`}>
			<div className="card-inner" onClick={() => handleFlipCard(index, card)}>
				<div className="card-front">?</div>
				<div className="card-back">
					<img src={`/${card.fruit}.png`} alt={card.fruit} />
				</div>
			</div>
		</li>
	);
};

export default Card;

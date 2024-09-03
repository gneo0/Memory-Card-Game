import { useGame } from '../context/GameContext';
import { initialCards } from '../lib/helpers';

const NewGameBtn = () => {
	const { setCards } = useGame();
	
	return <button onClick={() => setCards(initialCards)}>New Game</button>;
};

export default NewGameBtn;

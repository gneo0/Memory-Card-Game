import { useGame } from '../context/GameContext';
import Card from './Card';

const CardsContainer = () => {
	const { cards } = useGame();

	return cards.map((card, i) => <Card key={i} card={card} index={i} />);
};

export default CardsContainer;

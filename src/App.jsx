import GameHeader from './components/GameHeader';
import WinnerMsg from './components/WinnerMsg';
import GameArea from './components/GameArea';
import NewGameBtn from './components/NewGameBtn';
import { useGame } from './context/GameContext';
import { checkWinner } from './lib/helpers';

const App = () => {
	const { cards } = useGame();

	return (
		<section className="App">
			<GameHeader />

			{checkWinner(cards) && <WinnerMsg />}
			<GameArea />
			{checkWinner(cards) && <NewGameBtn />}
		</section>
	);
};

export default App;

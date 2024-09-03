export const initialCards = () => {
	const imgsArr = [
		{ fruit: 'banana', flipped: false },
		{ fruit: 'cherry', flipped: false },
		{ fruit: 'kiwi', flipped: false },
	];

	return [...imgsArr, ...imgsArr].sort(() => 0.5 - Math.random());
};

export const checkWinner = (cards) =>
	cards.every((card) => card.flipped === true);

import icon from './assets/images/knight-chess-icon.png';

const knightIcon = document.createElement('img');
knightIcon.src = icon;

const placeKnight = () => {
    const board = document.querySelector('#board');
    board.addEventListener('click', (e) => {
        console.log(e.target.className.includes('cell'));
        if (
            e.target.className.includes('cell') &&
            placeKnightBtn.classList.contains('clicked')
        ) {
            e.target.appendChild(knightIcon);
            placeKnightBtn.classList.remove('clicked');
        }
    });
};

const randomKnightPlacement = () => {
    const i = Math.floor(Math.random() * 8) + 1;
    const j = Math.floor(Math.random() * 8) + 1;
    const randomCell = document.getElementById(`[${i},${j}]`);
    if (randomCell.className.includes('cell')) {
        randomCell.appendChild(knightIcon);
    }
};

const boardHandler = () => {
    const placeKnightBtn = document.querySelector('#placeKnightBtn');
    const randomKnightPlacementBtn = document.querySelector(
        '#randomKnightPlacementBtn',
    );

    placeKnightBtn.addEventListener('click', () => {
        placeKnightBtn.classList.add('clicked');
        placeKnight();
    });

    randomKnightPlacementBtn.addEventListener('click', () =>
        randomKnightPlacement(),
    );
};

export default boardHandler;

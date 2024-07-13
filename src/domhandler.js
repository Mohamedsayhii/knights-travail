/* eslint-disable no-restricted-syntax */
import icon from './assets/images/knight-chess-icon.png';
import bfs from './bfs';

const knightIcon = document.createElement('img');
knightIcon.src = icon;

const resetBoard = () => {
    for (let i = 0; i < board.childElementCount; i++) {
        for (let j = 0; j < board.childNodes[i].childElementCount; j++) {
            const cell = board.childNodes[i].childNodes[j];
            if (cell.firstChild && cell.firstChild.nodeName === 'IMG') continue;
            cell.textContent = '';
        }
    }
};

const placeKnight = () => {
    const board = document.querySelector('#board');

    board.addEventListener('click', (e) => {
        resetBoard();
        if (
            e.target.className.includes('cell') &&
            placeKnightBtn.classList.contains('clicked')
        ) {
            e.target.appendChild(knightIcon);
            knightIcon.id = e.target.id;
            placeKnightBtn.classList.remove('clicked');
        }
    });
};

const randomKnightPlacement = () => {
    const i = Math.floor(Math.random() * 8) + 1;
    const j = Math.floor(Math.random() * 8) + 1;
    resetBoard();
    const randomCell = document.getElementById(`[${i},${j}]`);
    if (randomCell.className.includes('cell')) {
        randomCell.appendChild(knightIcon);
        knightIcon.id = randomCell.id;
    }
};

const knightTravail = () => {
    const board = document.querySelector('#board');

    const startingNode = [
        Number(document.querySelector('img').id[1]),
        Number(document.querySelector('img').id[3]),
    ];

    board.addEventListener('click', (e) => {
        if (e.target.className.includes('cell') && startingNode) {
            resetBoard();
            const path = bfs(startingNode, [
                Number(e.target.id[1]),
                Number(e.target.id[3]),
            ]);

            for (let i = 0; i < path.length; i++) {
                const id = path[i].toString();
                const cell = document.getElementById(`[${id}]`);
                if (i !== path.length - 1) {
                    const h2 = document.createElement('h2');
                    h2.textContent = i;
                    cell.appendChild(h2);
                }
                if (i === path.length - 1) {
                    cell.appendChild(knightIcon);
                    knightIcon.id = cell.id;
                }
            }
        }
    });
};

const boardHandler = () => {
    const placeKnightBtn = document.querySelector('#placeKnightBtn');
    const randomKnightPlacementBtn = document.querySelector(
        '#randomKnightPlacementBtn',
    );
    const knightTravailBtn = document.querySelector('#knightTravailBtn');

    placeKnightBtn.addEventListener('click', () => {
        placeKnightBtn.classList.add('clicked');
        placeKnight();
    });

    randomKnightPlacementBtn.addEventListener('click', () =>
        randomKnightPlacement(),
    );

    knightTravailBtn.addEventListener('click', () => {
        knightTravail();
    });
};

export default boardHandler;

const createButton = (textContent, id) => {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.id = id;
    button.classList.add('button');

    return button;
};

const buttons = () => {
    const btns = document.createElement('div');
    btns.classList.add('buttons');

    btns.appendChild(createButton('PLACE KNIGHT', 'placeKnightBtn'));
    btns.appendChild(
        createButton('RANDOM KNIGHT PLACEMENT', 'randomKnightPlacementBtn'),
    );
    btns.appendChild(createButton('KNIGHT TRAVAIL', 'knightTravailBtn'));

    return btns;
};

const chessBoard = () => {
    const board = document.createElement('div');
    board.id = 'board';

    for (let i = 1; i < 9; i++) {
        const row = document.createElement('div');
        for (let j = 1; j < 9; j++) {
            row.classList.add('row');
            const cell = document.createElement('div');
            if ((i + j) % 2 === 0) {
                cell.classList.add('cell', 'white-cell');
                cell.id = `[${i},${j}]`;
            } else {
                cell.classList.add('cell', 'black-cell');
                cell.id = `[${i},${j}]`;
            }
            row.appendChild(cell);
        }

        board.appendChild(row);
    }

    return board;
};

const content = () => {
    const mainContent = document.createElement('div');
    mainContent.classList.add('content');

    mainContent.appendChild(buttons());
    mainContent.appendChild(chessBoard());

    return mainContent;
};

export default content;

import './sass/style.scss';
import content from './content';
import boardHandler from './domhandler';

const userInterface = () => {
    const title = document.createElement('h1');
    title.textContent = 'KNIGHTS TRAVAIL';

    const body = document.querySelector('body');

    body.appendChild(title);
    body.appendChild(content());

    boardHandler();
};

export default userInterface;

import userInterface from './ui';

if (process.env.NODE_ENV !== 'prodcution') {
    console.log('Looks like we are in development mode!');
}

userInterface();

import { react, useState } from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState(["hello"]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log(` current guess: ${currentGuess}`);
    };

    const addNewGuess = () => {


    }

    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5) {
                console.log('You have used all of your guesses!')
                return;
            } if (history.includes(currentGuess)) {
                console.log("You already tried that word!")
                return;
            } if (currentGuess.length !== 5) {
                (console.log("Guess must be 5 letters long!"))
                return;
            }
            formatGuess();
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev => {
                return prev.slice(0, -1)
            }));
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;

                })
            }
        }
    };

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }


}

export default useWordle;
import React, { useEffect } from "react";
import useWordle from "../../hooks/useWorldle";
import Grid from "../board/grid";
import Keypad from "../keypad/keypad";

const Wordle = ({ solution }) => {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {
            console.log('Congrats!')
            window.removeEventListener('keyup', handleKeyup);
        }

        if (turn > 5) {
            console.log('Unlucky out of guesses!')
            window.removeEventListener('keyup', handleKeyup);

        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <div>solution {solution}</div>
            <div>current guess: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}

export default Wordle;
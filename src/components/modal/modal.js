import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
    return <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <h2 className="solution">{solution}</h2>
                <p>You found the solution in {turn} guesses.</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You ran out of guesses!</h1>
                <p className="solution">The answer was {solution}.</p>
            </div>
        )}
    </div>
}

export default Modal
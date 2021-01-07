import React from 'react';
import './WinMessage.css';

const winMessage = (props) => {
    return <div className="WinMessage">
        <p>Congrats you win!</p>
        <p>Final Score: {props.score} moves</p>
        <button onClick={props.click}>Play Again</button>
    </div>
}

export default winMessage;
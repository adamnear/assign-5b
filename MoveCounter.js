// MoveCounter.js
import React from 'react';

const MoveCounter = ({ xMoves, oMoves, currentMove }) => {
    return (
        <div className="move-counter">
            <p>X Moves: {xMoves}</p>
            <p>O Moves: {oMoves}</p>
            <p>Current Move: {currentMove}</p>
        </div>
    );
};

export default MoveCounter;

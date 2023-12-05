import React from 'react';

function MoveCounter({ currentMove, totalMoves }) {
    return (
        <div className="move-counter">
            <p>Move Count:</p>
            <p>Player X: {currentMove % 2 === 0 ? Math.floor(currentMove / 2) : Math.ceil(currentMove / 2)}</p>
            <p>Player O: {Math.floor(currentMove / 2)}</p>
            <p>Total Moves: {totalMoves}</p>
        </div>
    );
}

export default MoveCounter;

import React, { useContext, useEffect } from 'react';
import { GameContext } from '../App';
import bear from '../images/bear.svg';
import scissors from '../images/scissors.svg';

const GameMode = () => {
    const { transition, setTransition, grizzlyMode, setGrizzlyMode } = useContext(GameContext);

    const doThis = () => {
        setTimeout(() => {
            setGrizzlyMode(!grizzlyMode)
        }, 1200);
        setTransition(!transition)
    }

    return (
        <div className="mode">
            <span className="mode__grizzly">
                <img src={bear} alt="Bear" />
            </span>
            <button 
                className={`grizzly__mode${transition ? ' active': ''}`}
                aria-label="Button to change game mode"
                onClick={() => doThis()}
                type="button"
            >
                <span className="slider" />
            </button>
            <span className="mode__scissors">
                <img src={scissors} alt="Scissors" />
            </span>
        </div>
    )
}

export default GameMode
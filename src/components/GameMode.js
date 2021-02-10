import React, { useContext, useEffect } from 'react';
import { GameContext } from '../App';
import bear from '../images/bear.svg';
import scissors from '../images/scissors.svg';

const GameMode = () => {
    const { grizzlyMode, setGrizzlyMode } = useContext(GameContext);

    useEffect(() => {
        if (!sessionStorage.getItem('mode')) {
            setGrizzlyMode(true)
            sessionStorage.setItem('mode', 'grizzly')
        } 
    }, [])

    const switchMode = () => {
        if (!grizzlyMode) {
            sessionStorage.setItem('mode', 'grizzly')
            setGrizzlyMode(true)

        } else {
            sessionStorage.setItem('mode', 'scissors')
            setGrizzlyMode(false)
        }
    }

    return (
        <div className="mode">
            <span className="mode__grizzly">
                <img src={bear} alt="Bear" />
            </span>
            <button 
                className={`grizzly__mode${!grizzlyMode ? ' active' : ''}`}
                aria-label="Button to change game mode"
                onClick={() => switchMode()}
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
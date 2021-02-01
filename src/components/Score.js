import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from '../App';

const Score = () => {
    const { rpsScore, setRpsScore, gcnScore, setGcnScore, grizzlyMode, transition } = useContext(GameContext);

    return (
        <div className="score">
            <div className="score__textbox">
                <div className="textbox__container">{grizzlyMode ? 'Grizzly Bear' : 'Rock'}
                    <span className={transition ? 'active' : ''} />
                </div>
                <div className="textbox__container">{grizzlyMode ? 'Cowboy' : 'Paper'}
                    <span className={transition ? 'active' : ''} />
                </div>
                <div className="textbox__container">{grizzlyMode ? 'Ninja' : 'Scissors'}
                    <span className={transition ? 'active' : ''} />
                </div>
            </div>
            <div className="score__number">Score <br />
                {grizzlyMode ? gcnScore : rpsScore}
            </div>
        </div>
    )
}

export default Score
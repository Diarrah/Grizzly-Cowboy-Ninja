import React, { useContext } from 'react';
import { GameContext } from '../App';
import { Reset } from '../components';

const Score = () => {
    const { rpsScore, gcnScore, grizzlyMode } = useContext(GameContext);

    return (
        <div className="score">
            <div className="score__textbox">
                <div className={`textbox__inner${!grizzlyMode ? ' active' : ''}`}>
                    <div className="textbox__inner--grizzly">
                        <span>Grizzly Bear</span><br />
                        <span>Cowboy</span><br />
                        <span>Ninja</span>
                    </div>
                    <div className="textbox__inner--scissors">
                        <span>Rock</span><br />
                        <span>Paper</span><br />
                        <span>Scissors</span>
                    </div>
                </div>
            </div>
            <div className="score__number">Score 
                <span>{grizzlyMode ? gcnScore : rpsScore}</span>
                <Reset />
            </div>
        </div>
    )
}

export default Score
import React, { useContext } from 'react';
import { GameContext } from '../App';

const RetryBtn = () => {
    const { setPlaying, setComputerWeapon, weaponsRef } = useContext(GameContext);

    const backToBattleField = () => {
        setPlaying(false);

        (function(){
            let randomNumber = Math.ceil(Math.random() * 3) - 1,
                options = ['red', 'blue', 'yellow'];
                
            setComputerWeapon(options[randomNumber])
        })()

        weaponsRef.current.forEach(option => {
            option.classList.remove('playing')
            option.classList.remove('hidden')
            option.children[0].innerText = ``
        })
    }

    return (
        <button className="retry__btn" onClick={backToBattleField}>
            Try Again
        </button>
    )
}

export default RetryBtn
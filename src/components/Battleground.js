import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../App';
import { RetryBtn } from './';
import { triangle } from '../images/battleground';
import { red1, blue1, yellow1 } from '../images/GCN';
import { red2, blue2, yellow2 } from '../images/RPS';

const Battleground = () => {
    const { 
        grizzlyMode, 
        rpsScore, setRpsScore, 
        gcnScore, setGcnScore, 
        playing, setPlaying, 
        computerWeapon, setComputerWeapon,
        weaponsRef } = useContext(GameContext);

    const [playerWeapon, setPlayerWeapon] = useState(),
          [whoWon, setWhoWon] = useState();      

    useEffect(() => {
        let weapons = Array.from(document.querySelectorAll('.battleground__weapon')),
            options = ['red', 'blue', 'yellow'];

        weaponsRef.current = weapons;

        (function(){
            let randomNumber = Math.ceil(Math.random() * 3) - 1
            setComputerWeapon(options[randomNumber])
        })()

        weapons.forEach(weapon => weapon.addEventListener('click', (e) => {
            beginTheBattle(e);
            setPlaying(true)
        }))
    }, [])

    
    useEffect(() => {
        playing && determineWinner()
    }, [playing])


    const beginTheBattle = (e) => {
        weaponsRef.current.forEach(option => {
            if (option === e.target) {
                option.classList.add('playing') 
                setPlayerWeapon(e.target.dataset.color)
            } else {
                option.classList.add('hidden')
            }

            if (option.classList.contains('playing')) option.children[0].innerText = `You Picked`        
        })
    }
    
    const determineWinner = () => {
        if (computerWeapon === playerWeapon) setWhoWon(0)

        else if (
            computerWeapon === 'red' && playerWeapon === 'yellow'
            || computerWeapon === 'blue' && playerWeapon === 'red'
            || computerWeapon === 'yellow' && playerWeapon === 'blue'
        ) {
            setWhoWon(-1)
            setTimeout(() => {
                if (grizzlyMode) {
                    setGcnScore(gcnScore - 1)
                    sessionStorage.setItem('gcn', Number(gcnScore - 1))
                } else {
                    setRpsScore(rpsScore -1)
                    sessionStorage.setItem('rps', Number(rpsScore - 1))
                }
            }, 2500);
                        
        } else {
            setWhoWon(1)
            setTimeout(() => {
                if (grizzlyMode) {
                    setGcnScore(gcnScore + 1)
                    sessionStorage.setItem('gcn', Number(gcnScore + 1))
                } else {
                    setRpsScore(rpsScore + 1)
                    sessionStorage.setItem('rps', Number(rpsScore + 1))
                }
            }, 2500);
        }
    }

    const correctName = (weapon) => {
        if (grizzlyMode) {
            if (weapon === 'yellow') return 'cowboy'
            else if (weapon === 'red') return 'ninja'
            else return 'grizzly'
        } else {
            if (weapon === 'yellow') return 'scissors'
            else if (weapon === 'red') return 'rock'
            else return 'paper'
        }
    }


    return (
        <div className={`battleground${playing ? ' move-up' : ''}`}>
            <img className={`triangle ${playing ? 'hidden' : ''}`} src={triangle} alt="Triangle" />
            
            <div className="battleground__weapon weapon--red" data-color="red">
                <span />
                <img src={grizzlyMode ? red1 : red2} alt={`${grizzlyMode ? 'Ninja' : 'Rock'} selection`} /> 
            </div>
            <div className="battleground__weapon weapon--blue" data-color="blue">
                <span />
                <img src={grizzlyMode ? blue1 : blue2} alt={`${grizzlyMode ? 'Bear' : 'Paper'} selection`} />
            </div>
            <div className="battleground__weapon weapon--yellow" data-color="yellow">
                <span />
                <img src={grizzlyMode ? yellow1 : yellow2} alt={`${grizzlyMode ? 'Cowboy' : 'Scissors'} selection`} />
            </div>  
            {playing && (
                <>
                <div className={`battleground__opponent ${computerWeapon}`}>
                    <svg className={`circle ${computerWeapon}`} width="130" height="130" viewBox="0 0 130 130"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65 7.5C96.7564 7.5 122.5 33.2436 122.5 65C122.5 96.7564 96.7564 122.5 65 122.5C33.2436 122.5 7.5 96.7564 7.5 65C7.5 33.2436 33.2436 7.5 65 7.5Z" stroke="#E1E4ED" strokeWidth="12"/>
                    </svg>
                    <img src={require(`../images/${grizzlyMode ? 'GCN' : 'RPS'}/icon-${computerWeapon}.svg`).default} 
                    alt={`${correctName(computerWeapon)} selection`} /> 
                </div> 

                <div className="battleground__result">
                    <h3>{whoWon === 0
                        ? `It's a tie!`
                        : whoWon === 1
                            ? `You win`
                            : `You lose`
                    }</h3>
                    {whoWon !== 0 && (
                        <span>
                            {whoWon === 1
                                ? `${correctName(playerWeapon)} beats ${correctName(computerWeapon)}`
                                : `${correctName(computerWeapon)} beats ${correctName(playerWeapon)}`
                            }
                        </span>
                    )}
                    <RetryBtn />
                    {whoWon === 1 && (
                        <div className={`confetti${whoWon === 1 ? ' active' : ''}`}>
                            <lottie-player src="https://assets4.lottiefiles.com/temp/lf20_9xt8zC.json"  
                            background="transparent" speed=".75" autoplay loop />
                        </div>                         
                    )}             
                </div>  
                </>
            )} 
        </div>
    )
}

export default Battleground
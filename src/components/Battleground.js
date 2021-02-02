import React, { useEffect, useContext, useState, useRef } from 'react';
import { GameContext } from '../App';
import { triangle } from '../images/battleground';
import { rock, paper, scissors } from '../images/RPS';
import { bear, cowboy, gcnRules, ninja } from '../images/GCN';

const Battleground = () => {
    const { grizzlyMode } = useContext(GameContext);
    const [playing, setIsPlaying] = useState(false);
    const [playerWeapon, setPlayerWeapon] = useState();
    const [computerWeapon, setComputerWeapon] = useState();
    const [whoWon, setWhoWon] = useState();
    const weaponsRef = useRef([]);
    //let computerWeapon;
    //let playerWeapon;

    useEffect(() => {
        const haha = () => {
            let weapons = Array.from(document.querySelectorAll('.battleground__weapon')),
                rpsOptions = ['rock', 'paper', 'scissors'],
                gcnOptions = ['grizzly', 'cowboy', 'ninja'],
                randomNumber;

            (function(){
                randomNumber = Math.ceil(Math.random() * 3) - 1

                if (grizzlyMode) setComputerWeapon(gcnOptions[randomNumber])
                else if (!grizzlyMode) setComputerWeapon(rpsOptions[randomNumber]);
            })()

            weapons.forEach(weapon => weapon.addEventListener('click', (e) => {
                yesTheGameIsPlaying(e);
                setIsPlaying(true)
            }))

            weaponsRef.current = weapons;
        }

        haha() 
    }, [])

    useEffect(() => {
        grizzlyMode ? determineWinnerGCN() : determineWinnerRPS()
    }, [playing])


    const yesTheGameIsPlaying = (e) => {
        weaponsRef.current.forEach(thing => {
            if (thing !== e.target) {
                thing.style.display = 'none'

            } else {
                thing.classList.add('playing') 
                setPlayerWeapon(e.target.dataset.selection);
            }

            if (thing.classList.contains('playing')) thing.children[0].innerText = `You Picked`        
        })
    }

    const determineWinnerGCN = () => {
        if (computerWeapon === playerWeapon) setWhoWon(0)

        else if (
            computerWeapon === 'ninja' && playerWeapon === 'cowboy'
            || computerWeapon === 'grizzly' && playerWeapon === 'ninja'
            || computerWeapon === 'cowboy' && playerWeapon === 'grizzly'
        ) {
            setWhoWon(-1)

        } else setWhoWon(1)
    }

    const determineWinnerRPS = () => {
        if (computerWeapon === playerWeapon) setWhoWon(0)

        else if (
            computerWeapon === 'paper' && playerWeapon === 'rock'
            || computerWeapon === 'rock' && playerWeapon === 'scissors'
            || computerWeapon === 'scissors' && playerWeapon === 'paper'
        ) {
            setWhoWon(-1)

        } else setWhoWon(1)
    }

    console.log(`computer: ${computerWeapon}`)
    console.log(`User: ${playerWeapon}`)
    console.log(whoWon)

    return (
        <div className="battleground">
            <img className={`triangle ${playing ? 'hi' : ''}`} src={triangle} alt="Triangle" />
            
            <div 
            className={`battleground__weapon ${grizzlyMode ? 'weapon--ninja' : 'weapon--rock'}`} 
             data-selection={grizzlyMode ? 'ninja' : 'rock'}
            >
                <span />
                <img src={grizzlyMode ? ninja : rock} alt={`${grizzlyMode ? 'Ninja' : 'Rock'} selection`} /> 
            </div>
            <div 
            className={`battleground__weapon ${grizzlyMode ? 'weapon--bear' : 'weapon--paper'}`} 
             data-selection={grizzlyMode ? 'grizzly' : 'paper'}
            >
                <span />
                <img src={grizzlyMode ? bear : paper} alt={`${grizzlyMode ? 'Bear' : 'Paper'} selection`} />
            </div>
            <div 
            className={`battleground__weapon ${grizzlyMode ? 'weapon--cowboy' : 'weapon--scissors'}`} 
             data-selection={grizzlyMode ? 'cowboy' : 'scissors'}
            >
                <span />
                <img src={grizzlyMode ? cowboy : scissors} alt={`${grizzlyMode ? 'Cowboy' : 'Scissors'} selection`} />
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
                                ? `${playerWeapon} beats ${computerWeapon}`
                                : `${computerWeapon} beats ${playerWeapon}`
                            }
                        </span>
                    )}
            </div>   
        </div>
    )
}

export default Battleground
import React, { createContext, useState, useEffect, useRef } from 'react';
import { GameMode, Score, Battleground, Rules, Reset } from './components';
import './App.scss';

export const GameContext = createContext();

const App = () => {
    const [playing, setPlaying] = useState(false),
          [rpsScore, setRpsScore] = useState(sessionStorage.getItem('rps')),
          [gcnScore, setGcnScore] = useState(sessionStorage.getItem('gcn')),
          [computerWeapon, setComputerWeapon] = useState(),
          [grizzlyMode, setGrizzlyMode] = useState(sessionStorage.getItem('mode') === 'grizzly' ? true : false),
          weaponsRef = useRef([]);      

    useEffect(() => {
        if (!sessionStorage.getItem('rps')) {
            sessionStorage.setItem('rps', Number(0))
            setRpsScore(0)
        } else {
            setRpsScore(Number(sessionStorage.getItem('rps')))
            sessionStorage.setItem('rps', rpsScore)
        }

        if (!sessionStorage.getItem('gcn')) {
            sessionStorage.setItem('gcn', Number(0))
            setGcnScore(0)
        } else {
            setGcnScore(Number(sessionStorage.getItem('gcn')))
            sessionStorage.setItem('gcn', gcnScore)
        }
    }, [])

    return (
        <GameContext.Provider value={{ 
            playing, setPlaying,
            rpsScore, setRpsScore, 
            gcnScore, setGcnScore, 
            computerWeapon, setComputerWeapon,
            grizzlyMode, setGrizzlyMode,
            weaponsRef
        }}>
            <div className="App">
                <GameMode />
                <Score />
                <Battleground />
                <Rules />
                <Reset />
            </div>
        </GameContext.Provider>
    );
}

export default App;
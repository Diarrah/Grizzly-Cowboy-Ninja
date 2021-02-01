import React, { createContext, useState, useEffect } from 'react';
import { GameMode, Score, Battleground, Rules } from './components';
import './App.scss';

export const GameContext = createContext();

const App = () => {
    const [rpsScore, setRpsScore] = useState(sessionStorage.getItem('rps')),
          [gcnScore, setGcnScore] = useState(sessionStorage.getItem('gcn')),
          [grizzlyMode, setGrizzlyMode] = useState(true),
          [transition, setTransition] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem('rps')) {
            sessionStorage.setItem('rps', Number(0))
            setRpsScore(0)
        } else {
            setRpsScore(Number(sessionStorage.getItem('rps')))
            sessionStorage.setItem('rps', rpsScore)
        }

        if (!sessionStorage.getItem('gcn')) {
            sessionStorage.setItem('gcn', 0)
            setGcnScore(0)
        } else {
            setGcnScore(Number(sessionStorage.getItem('gcn')))
            sessionStorage.setItem('gcn', gcnScore)
        }
    }, [])
    
    return (
        <GameContext.Provider value={{ 
            rpsScore, setRpsScore, 
            gcnScore, setGcnScore, 
            grizzlyMode, setGrizzlyMode,
            transition, setTransition 
        }}>
            <div className="App">
                <GameMode />
                <Score />
                <Battleground />
                <Rules />
            </div>
        </GameContext.Provider>
    );
}

export default App;
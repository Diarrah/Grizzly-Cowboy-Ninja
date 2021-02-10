import React, { useContext } from 'react';
import { GameContext } from '../App';

const ResetBtn = () => {
    const { grizzlyMode, setGcnScore, setRpsScore } = useContext(GameContext);

    const resetScore = () => {
        if (grizzlyMode) {
            setGcnScore(0)
            sessionStorage.setItem('gcn', Number(0))
        } else {
            setRpsScore(0)
            sessionStorage.setItem('rps', Number(0))
        }
    }

    return (
        <button className="reset" onClick={resetScore}>
            <span>Reset</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip1)">
                    <path d="M8.53505 1.46374C6.58517 -0.486123 3.41229 -0.486123 1.46241 1.46374C-0.487471 3.41362 -0.487471 6.5863 1.46241 8.53618C2.43735 9.51112 3.71813 9.9987 4.99872 9.9987C6.27931 9.9987 7.56009 9.51112 8.53503 8.53618C9.47968 7.59165 10 6.33581 10 4.99995C10 3.66413 9.47968 2.40825 8.53505 1.46374ZM8.2404 8.24153C6.4529 10.0289 3.54458 10.0291 1.75708 8.24153C-0.0302052 6.45411 -0.0302052 3.54579 1.75708 1.75843C2.65083 0.864658 3.82478 0.417803 4.99874 0.417803C6.17269 0.417803 7.34665 0.864658 8.2404 1.75843C9.10626 2.62427 9.58325 3.77544 9.58325 4.99995C9.58325 6.22448 9.10626 7.37563 8.2404 8.24153Z" fill="black"/>
                    <path d="M5.29342 4.99992L7.35639 2.93701L7.06172 2.64236L4.99875 4.70524L2.93588 2.64236L2.64124 2.93701L4.70411 4.99988L2.78856 6.91533L3.08323 7.21002L4.99875 5.29455L7.06417 7.35996L7.35883 7.06529L5.29342 4.99992Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip1"> <rect width="10" height="10" fill="white"/> </clipPath>
                </defs>
            </svg>
        </button>
    )
}

export default ResetBtn
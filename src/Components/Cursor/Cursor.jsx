import React, { useEffect, useRef, useState } from 'react';
import './Cursor.scss';
import logo from '../../assets/rocket.svg';


export const Cursor = ({allowMove}) => {


    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [cursorPosition, setCursorPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const cursorRef = useRef(null);
    const delay = 0.05; 
    const offset = 100;

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const dx = mousePosition.x - cursorPosition.x;
        const dy = mousePosition.y - cursorPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

            setCursorPosition(prevPosition => ({
                x: distance > offset ? prevPosition.x + dx * delay :prevPosition.x ,
                y: distance > offset ? prevPosition.y + dy * delay :prevPosition.y,
                ang: Math.atan2(dy, dx) * (180 / Math.PI) + 90
            }));

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mousePosition]);

    return (
        <img src={logo} id="Cursor"
            ref={cursorRef}
            style={!allowMove ? staticStyle : {
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transform: `rotate(${cursorPosition.ang }deg)`,
            }}/>
        );
    };
    
    const staticStyle = {
        left: `0.5%`,
        top: '92%',
        transition: `all 2s ease-out`
    
}

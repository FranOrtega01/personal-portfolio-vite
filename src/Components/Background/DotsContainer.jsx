import React, { useState, useEffect } from 'react';
import Dot from './Dot';
import "./Dot.scss"

const calculateDots = (containerSize) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const horizontalDots = Math.floor(screenWidth / containerSize) + containerSize;
    const verticalDots = Math.floor(screenHeight / containerSize);
    return horizontalDots * verticalDots;
};

export const DotsContainer = ({ allowMove }) => {

    const containerSize = 40;
    const range = 300;

    const [gridSize, setGridSize] = useState(calculateDots(containerSize));
    const [resize, setResize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setGridSize(calculateDots(containerSize));
            setResize(true);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (resize) {
            setResize(false);
        }
    }, [resize]);

    

    const createGrid = () => {
        const grid = [];
        for (let i = 0; i < gridSize; i++) {
            grid.push(
                <Dot key={`${i}`} containerSize={containerSize} range={range} allowMove={allowMove} />
            );
        }
        return grid;
    };

    return <div className="grid-container">{!resize && createGrid()}</div>;
};
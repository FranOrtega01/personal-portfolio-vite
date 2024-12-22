import React, { useState, useEffect, useRef } from 'react';

const Dot = ({ range, allowMove, containerSize }) => {
    const containerRef = useRef();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMouseInRange, setIsMouseInRange] = useState(false);


    useEffect(() => {
        if (!allowMove) return
        const containerRect = containerRef.current.getBoundingClientRect();

    

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xOffset = clientX - containerRect.left - containerRect.width / 2;
            const yOffset = clientY - containerRect.top - containerRect.height / 2;
            const distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
            if (distance < range) {
                setIsMouseInRange(true);
                let newX = (xOffset / range) * (containerRect.width / 2)
                let newY = (yOffset / range) * (containerRect.height / 2)
                
                setPosition({ x: newX, y: newY });
            } else {
                setIsMouseInRange(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [allowMove]);

    return (
        <div className="dot-container" style={{ width: containerSize, height: containerSize }} ref={containerRef}>
            <div
                className="dot"
                style={{
                    transform: `translate(${(isMouseInRange && allowMove) ? position.x : 0}px, ${(isMouseInRange && allowMove) ? position.y : 0}px)`,
                    transition: `all ${isMouseInRange ? 300 : 400}ms linear`
                }}
            ></div>
        </div>
    );
};

export default Dot;

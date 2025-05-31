import { useState } from "react";
import './MovingDot.css';

export default function MovingDot(){
    const [position, setPosition] = useState({x: 0, y: 0});

    return (
        <div 
            className="moving-dot-container"
            onPointerMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }}
        >
            <div 
                className="moving-dot" 
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`
                }} 
            />
        </div>
    );
}
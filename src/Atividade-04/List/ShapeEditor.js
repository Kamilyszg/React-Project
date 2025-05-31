import { useState } from "react";
import './List.css';

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 100},
    {id: 1, type: 'square', x: 150, y:100},
    {id: 2, type: 'circle', x: 250, y:100},
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick(){
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        setShapes(nextShapes);
    }

    return(
        <div className="list-container">
            <button className="list-button" onClick={handleClick}>
                Move circles down!
            </button>
            <div
                style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                marginTop: '10px',
                }}
            >
                {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                    backgroundColor: 'purple',
                    position: 'absolute',
                    left: shape.x,
                    top: shape.y,
                    borderRadius: shape.type === 'circle' ? '50%' : '0',
                    width: '20px',
                    height: '20px',
                    }}
                />
                ))}
            </div>
        </div>
    );
}
import { sculptureList } from "./data";
import { useState } from "react";
import './Gallery.css'

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const sculpture = sculptureList[index];

    function handleClick(){
        setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
    }

    function handleShowMore(){
        setShowMore(!showMore)
    }

    return(
        <div className="gallery-container">
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1}) of {sculptureList.length}
            </h3>
            <button onClick={handleShowMore}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <div className="gallery-image-wrapper">
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                    className="gallery-image"
                />
            </div>
            {showMore &&  <p>{sculpture.description}</p>}
        </div>
    );
}
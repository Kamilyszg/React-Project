import { sculptureList } from "./data";
import { useState } from "react";

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
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1}) of {sculptureList.length}
            </h3>
            <button onClick={handleShowMore}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            /> 
            {showMore &&  <p>{sculpture.description}</p>}
        </>
    );
}


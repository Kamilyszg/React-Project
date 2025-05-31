import { useState } from "react";
import './List.css';

let nextId=0;

export default function List1(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return(
        <div className="list-container">
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={e=> setName(e.target.value)}/>

            <button onClick={()=> {
                setArtists([
                    ...artists,
                    {id:nextId++, name:name}
                ]);
            }}>Add</button>
            <ul>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>
                ))}
            </ul>
        </div>
    );
}
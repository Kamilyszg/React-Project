import { useState } from "react";
import './FormBase.css';

export default function Form3(){
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Bue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChage(e){
        setPerson({...person, name: e.target.value});
    }
    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork: {...person.artwork, title: e.target.value}
        });
    }
    function handleImageChange(e){
        setPerson({
            ...person,
            artwork: {...person.artwork, image: e.target.value}
        });
    }
    function handleCityChange(e){
        setPerson({
            ...person,
            artwork: {...person.artwork, city: e.target.value}
        });
    }

    return(
        <div className="form-base">
            <label>
                Name:
                <input value={person.name} onChange={handleNameChage} />
            </label>
            <label>
                Title:
                <input value={person.artwork.title} onChange={handleTitleChange}/>
            </label>
            <label>
                City:
                <input value={person.artwork.city} onChange={handleCityChange}/>
            </label>
            <label>
                Image:
                <input value={person.artwork.image} onChange={handleImageChange}/>
            </label>
            <p>
                <i>{person.artwork.title}</i> by {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <div className="form-image-wrapper">
                <img className="form-image" src={person.artwork.image} alt={person.artwork.title} />
            </div>
        </div>
    );
}
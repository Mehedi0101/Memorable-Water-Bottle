import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then( response => response.json())
        .then( data => setBottles(data))
    }, [])

    console.log(bottles);

    return (
        <div className="bottle-container">
            {bottles.map( bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)}
        </div>
    );
};

export default Bottles;
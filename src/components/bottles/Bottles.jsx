import { useEffect } from "react";
import { useState } from "react";
import Proptypes from "prop-types";
import Bottle from "../bottle/Bottle";
import './bottles.css'

const Bottles = ({addedItems,setAddedItems}) => {
    const [bottles, setBottles] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then( response => response.json())
        .then( data => setBottles(data))
    }, [])

    return (
        <div className="bottle-container">
            {bottles.map( bottle => <Bottle key={bottle.id} bottle={bottle} addedItems={addedItems} setAddedItems={setAddedItems}></Bottle>)}
        </div>
    );
};

Bottles.propTypes = {
    addedItems: Proptypes.array.isRequired,
    setAddedItems: Proptypes.func.isRequired
}

export default Bottles;
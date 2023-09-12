import Proptypes from 'prop-types'
import './bottle.css'
import { addDataToStorage, removeDataFromStorage } from '../../utils/localStorageFunctionalities';

const Bottle = ({bottle, addedItems, setAddedItems}) => {

    const  {name, img, price} = bottle;

    const adding = (bottle) => {
        setAddedItems([...addedItems, bottle]);
        addDataToStorage(bottle.id);
    }

    const removing = (id) => {
        setAddedItems(addedItems.filter(item => item.id !== id))
        removeDataFromStorage(bottle.id);
    }

    return (
        <div className='bottle'>
            <h2 className='card-title'>{name}</h2>
            <div>
                <img className='card-img' src={img} alt="" />
            </div>
            <h3 className='price'>Price: ${price}</h3>
            <div className='cart-buttons'>
                <button onClick={() => {adding(bottle)}}>+</button>
                <p>Add To Cart</p>
                <button onClick={() => {removing(bottle.id)}}>-</button>
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle: Proptypes.object.isRequired,
    addedItems: Proptypes.array.isRequired,
    setAddedItems: Proptypes.func.isRequired
}

export default Bottle;
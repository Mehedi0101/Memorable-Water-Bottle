import Proptypes from 'prop-types'
import './bottle.css'

const Bottle = ({bottle}) => {

    const  {name, img, price} = bottle;

    return (
        <div className='bottle'>
            <h2 className='card-title'>{name}</h2>
            <div>
                <img className='card-img' src={img} alt="" />
            </div>
            <h3 className='price'>Price: ${price}</h3>
            <div class='cart-buttons'>
                <button>+</button>
                <p>Add To Cart</p>
                <button>-</button>
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle: Proptypes.object.isRequired
}

export default Bottle;
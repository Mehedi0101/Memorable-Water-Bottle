import Proptypes from 'prop-types';
import CartProducts from '../cart-products/CartProducts';
import './cart.css';

const Cart = ({addedItems}) => {

    return (
        <div>
            <div className="cart-item">
                <h2>Cart: </h2>
                {addedItems.map( (item, index) => <CartProducts key={index} item={item}></CartProducts>)}
            </div>
            <h3 className="total-price">Price: <strong>{addedItems.reduce((total, item) => total += item.price, 0)} $</strong></h3>
        </div>
    );
};

Cart.propTypes = {
    addedItems: Proptypes.array.isRequired
}

export default Cart;
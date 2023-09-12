import Proptypes from 'prop-types'
import './CartProducts.css'

const CartProducts = ({item}) => {
    return (
        <div>
            <img className='cart-img' src={item.img} alt="" />
        </div>
    );
};

CartProducts.propTypes = {
    item: Proptypes.object.isRequired
}

export default CartProducts;
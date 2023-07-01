import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const { cartCount, items: cartItems } = useSelector(state => {
    return state.cart;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartCount > 0
        &&
        <ul>
          {cartItems.map(item => {
            return (
              <CartItem key={item.id}
                item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
              />
            )
          })}
        </ul>
      }
      {cartCount <= 0
        &&
        <p>Cart is empty. Add some products.</p>
      }

    </Card>
  );
};

export default Cart;

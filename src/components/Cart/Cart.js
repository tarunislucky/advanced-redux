import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => {
    return state.items;
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => {
          return (
            <CartItem key={item.id}
              item={{ id: item.id, title: item.title, quantity: item.quantity, total: (item.quantity * item.price), price: item.price }}
            />
          )
        })}
        {/* <CartItem
          item={{ title: "some title", quantity: 1, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;

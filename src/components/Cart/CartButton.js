import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { userInterfaceActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => {
    return state.cart.cartCount;
  })
  const cartButtonHandler = event => {
    dispatch(userInterfaceActions.toggleCartVisibility());
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;

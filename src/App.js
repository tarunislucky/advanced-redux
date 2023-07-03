import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();
  const cartVisibility = useSelector(state => {
    return state.ui.cartVisibility;
  })
  const cart = useSelector(state => {
    return state.cart;
  });
  const notification = useSelector(state => {
    return state.ui.notification;
  })

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

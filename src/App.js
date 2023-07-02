import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { userInterfaceActions } from './store/ui-slice';

let isInitial = true;

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
    const sendCartData = async () => {
      // In an async function there are multiple sync parts
      // all dispatches that come in each sync part are batched and executed together
      dispatch(userInterfaceActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data..."
      }));
      const response = await fetch("https://react-http-485a4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const responseData = await response.json();

      dispatch(userInterfaceActions.showNotification({
        status: "success",
        title: "Sucess",
        message: "Sent cart data successfully!"
      }));

    }
    // isInitial stops code from sending api request on first render
    if (isInitial) {
      isInitial = false;
      return;
    };
    sendCartData().catch((error) => {
      dispatch(userInterfaceActions.showNotification({
        status: "error",
        title: "Error !",
        message: "sending cart data failed!"
      }));
    });
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

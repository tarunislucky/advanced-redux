import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
    id: 1,
    title: "Test-1",
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 2,
    title: "Test-2",
    price: 7,
    description: 'This is a first product - amazing!'
  },
  {
    id: 3,
    title: "Test-3",
    price: 8,
    description: 'This is a first product - amazing!'
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map(item => {
          return (<ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />);
        })};

      </ul>
    </section>
  );
};

export default Products;

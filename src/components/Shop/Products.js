import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
    id: "p1",
    title: "Apples",
    price: 6,
    description: 'Fine red apples'
  },
  {
    id: "p2",
    title: "Bananas",
    price: 7,
    description: 'Fine green bananas'
  },
  {
    id: "p3",
    title: "Oranges",
    price: 8,
    description: 'Your cool oranges for the summer'
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
            id={item.id}
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

import { Component } from "react";
import Button from './Button';

const styles = {
  product: {
    width: '30%',
    padding: '10px 15px',
    border: 'solid 1px #eee',
    boxShadow: '0px 5px 5px rgb(0, 0, 0, 0.10)',
    borderRadius: '5px'
  },
  img: {
    width: '100%',
  }
}

class Product extends Component {

  render() {

    const { product, addToCart } = this.props;

    return (
      <div style={styles.product}>
        <img alt={product.nombre} src={product.img} style={styles.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCart(product)}>
          add to cart
        </Button>
      </div>
    )
  }

}

export default Product;
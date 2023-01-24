import { Component } from "react";

import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
  cart: {
    color: '#fff',
    border: 'none',
    padding: '15px',
    cursor: 'pointer',
    borderRadius: '15px',
    backgroundColor: '#359A2C',
  },
  bubble: {
    top: '20px',
    left: '12px',
    position: 'relative',
  }
}

class Cart extends Component {

  render() {
    const { cart, visible, showCart } = this.props
    const amount = cart.reduce((acc, el) => acc + el.amount, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {
            amount !== 0 ? <BubbleAlert value={amount} /> : null
          }
        </span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        { visible ? <CartDetails cart={cart} /> : null }
      </div>
    )
  }

}

export default Cart;
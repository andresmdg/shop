import { Component } from "react";
import Logo from './Logo';
import Cart from './Cart';

const styles = {
  navbar: {
    height: '100px',
    display: 'flex',
    padding: '0 50px',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
  }
}

class NavBar extends Component {

  render() {
    const { cart, visible, showCart } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Cart
          cart={cart}
          visible={visible}
          showCart={showCart}
        />
      </nav>
    )
  }

}

export default NavBar;
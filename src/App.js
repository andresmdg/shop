import { Component } from 'react';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Products from './components/Products';

class App extends Component {

  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.jpg' },
      { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg' },
      { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
    ],
    cart: [],
    visible: false,
  }

  addToCart = (product) => {

    const { cart } = this.state
    if (cart.find(f => f.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name
        ? ({
          ...x,
          amount: x.amount + 1
        })
        : x)
      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: this.state.cart.concat({ ...product, amount: 1 })
    })

  }
  showCart = () => {
    if (!this.state.cart.length) {
      return 
    }
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <NavBar
          cart={this.state.cart}
          visible={visible}
          showCart={this.showCart}
        />
        <Layout>
          <Title>Tienda</Title>
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;

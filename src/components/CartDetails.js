import { Component } from "react";

const styles = {
  product: {
    display: 'flex',
    padding: '25px 20px',
    alignItems: 'center',
    listStyleType: 'none',
    justifyContent: 'space-between',
    borderBottom: '1px solid #aaa',
  },
  details: {
    right: 50,
    width: '300px',
    marginTop: '30px',
    borderRadius: '5px',
    position: 'absolute',
    backgroundColor: '#fff',
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
  },
  ul: {
    margin: '0',
    padding: '0',
  },
}

class CartDetails extends Component {
  render() {
    const { cart } = this.props
    return (
      <div style={styles.details}>
        <ul style={styles.ul}>
          {cart.map(m =>
            <li style={styles.product} key={m.name}>
              <img alt={m.name} src={m.img} width={50} height={32} />
              {m.name} <span>{m.amount}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CartDetails;
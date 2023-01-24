import { Component } from "react";

const styles = {
  button: {
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    padding: '15px 20px',
    backgroundColor: '#0A283E',
  }
}

class Button extends Component {
  render() {
    return (
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button;
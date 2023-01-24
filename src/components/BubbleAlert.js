import { Component } from "react";

const styles = {
  bubbleAlert: {
    color: '#fff',
    width: '20px',
    fontSize: '0.9rem',
    padding: '2px 10px',
    borderRadius: '25px',
    backgroundColor: '#E9725A',
  }
}

class BubbleAlert extends Component {

  getNumber(n) {
    if (!n) return ' ';
    return n > 9 ? '9+' : n
  }

  render() {

    const { value } = this.props;

    return (
      <span style={styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    )
  }

}

export default BubbleAlert;
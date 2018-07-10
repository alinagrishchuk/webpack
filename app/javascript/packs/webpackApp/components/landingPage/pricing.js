import React from 'react';

class Pricing extends React.Component {
  render() {
    const price = this.props.price;

    return(
      <div>
        <h1>Price: {price}</h1>
      </div>
    )
  }
}

export default Pricing;
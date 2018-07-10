import React from 'react';

class Pitch extends React.Component {
  render() {
    console.log(this.props.route);
    return(
      <div>
        <h1>Hello {this.props.name || 'word'}</h1>
      </div>
    )
  }
}
export default Pitch
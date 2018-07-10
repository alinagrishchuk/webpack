import React from 'react';

class Pitch extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello {this.props.name || 'word'}</h1>
      </div>
    )
  }
}
export default Pitch
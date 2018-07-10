import React from 'react';

import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';

export class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Pitch {...this.props} />
        <Pricing {...this.props}/>
      </div>
    );
  }
}

export const ExtendedLandingPage = (props) => {
  return (
    <LandingPage
      name='Alina'
      {...props}
    />
  );
};
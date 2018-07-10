import React from 'react';

import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';
import {Api} from '../middleware/api'

export class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Pitch {...this.props} />
        <Pricing price={Api.price()}/>

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
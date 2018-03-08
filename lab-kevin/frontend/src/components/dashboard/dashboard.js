import React from 'react';
import {Settings} from '../settings';

export default class Dashboard extends React.Component{

  render(){
    return (
      <section className="dashboard-container">
        <h2>All the World&apos;s a Stage<span>--William Shakespeare</span></h2>
        <p>Take a picture here, Take a souvenir<span>-—R.E.M.</span></p>
        <Settings />
      </section>
    );
  }


} 
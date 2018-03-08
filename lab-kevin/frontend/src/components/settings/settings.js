import React from 'react';
import {Profile} from '../profile';
import {connect} from 'react-redux';

class Settings extends React.Component{
  render(){
    return (
      <section className="settings-container">
        <Profile onComplete={this.props.onComplete}/>
      </section>
    );
  }
}

const mapDispatchToProps = () => ({
  onComplete:{
    settings: user => console.log('user', user),
    profile: profile => console.log('profile', profile),
  },
});

export default connect(null, mapDispatchToProps)(Settings);
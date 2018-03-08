import React from 'react';
import {Profile} from '../profile';
import {connect} from 'react-redux';
import {updateProfileRequest} from '../../actions';

class Settings extends React.Component{
  render(){
    return (
      <section className="settings-container">
        <Profile onComplete={this.props.onComplete}
          profile={this.props.profile}/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  onComplete:{
    settings: user => console.log('user', user),
    profile: profile => dispatch(updateProfileRequest(profile)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
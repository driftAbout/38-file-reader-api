import React from 'react';
import {Settings} from '../settings';
import {connect} from 'react-redux';

class Dashboard extends React.Component{

  // componentWillReceiveProps(nextProps){
  //   this.props.createProfileRequest(nextProps.token);
  // }

  render(){
    return (
      <section className="dashboard-container">
        <h2>All I&apos;ve got is a photograph<span>--Def Leppard</span></h2>
        <p>Take a picture here, Take a souvenir<span>-—R.E.M.</span></p>
        <Settings />
      </section>
    );
  }


} 

const mapStateToProps = state => ({
  profile: state.profile,
});

// mapDispatchToProps = dispatch => ({
//   createProfileRequest: token => dispatch(createProfileRequest(token))
// })

export default connect(mapStateToProps, null)(Dashboard);
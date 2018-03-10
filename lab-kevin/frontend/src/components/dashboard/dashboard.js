import './_dashboard.scss';
import React from 'react';
import {Settings} from '../settings';
import {connect} from 'react-redux';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isClosed: true,
    };

    this.toggleSettings = this.toggleSettings.bind(this);
  }
  // componentWillReceiveProps(nextProps){
  //   this.props.createProfileRequest(nextProps.token);
  // }

  toggleSettings(){
    this.setState({isClosed: !this.state.isClosed});
  }

  render(){
    return (
      <section className="dashboard">
        <h2>All I&apos;ve got is a photograph<span>--Def Leppard</span></h2>
        <p>Take a picture here, Take a souvenir<span>-—R.E.M.</span></p>
        <div className={`settings-wrap${this.state.isClosed ? ' closed' : ''}`}>  
          <span className="settings-toggle" onClick={this.toggleSettings}>{this.state.isClosed ? 'Settings' : 'close'}</span>
          <Settings />
        </div>
        <div className="gallery-wrap" >
        </div>
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
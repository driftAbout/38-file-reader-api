import './_dashboard.scss';
import React from 'react';
import {Settings} from '../settings';
import {connect} from 'react-redux';
import {Gallery} from '../gallery';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isClosed: true,
    };

    this.toggleSettings = this.toggleSettings.bind(this);
  }
 
  toggleSettings(){
    this.setState({isClosed: !this.state.isClosed});
  }

  render(){
    return (
      <section className="dashboard">
        <h2>Take A Picture Here, Take A Souvenir<span>--R.E.M.</span></h2>
        <div className={`settings-wrap${this.state.isClosed ? ' closed' : ''}`}>  
          <span className="settings-toggle" onClick={this.toggleSettings}>{this.state.isClosed ? 'Settings' : 'close'}</span>
          <Settings />
        </div>
        <div className="gallery-wrap" >
          <Gallery />
        </div>
      </section>
    );
  }

} 

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, null)(Dashboard);
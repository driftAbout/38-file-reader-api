import React from 'react';
import {connect} from 'react-redux';
import {signInRequest, signUpRequest, createProfileRequest, getProfileRequest} from '../../actions';
import {SignForm} from '../sign';


class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    let {params} = this.props.match;
    // let onComplete = params.sign === 'signin' ?
    //   this.props.signin :
    //   this.props.signup;

    let onComplete = {
      login: params.sign === 'signin' ? this.props.signin : this.props.signup,
      getProfile: params.sign === 'signin' ?  this.props.getProfileRequest : this.props.createProfileRequest,
    };
  
    return (
      <section className="landing-container">
        <h2>All I&apos;ve got is a photograph<span>--Def Leppard</span></h2>
        <SignForm sign={params.sign}
          onComplete={onComplete}
        />
      </section>

    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signInRequest(user)),
  signup: user => dispatch(signUpRequest(user)),
  createProfileRequest: token => dispatch(createProfileRequest(token)),
  getProfileRequest: token => dispatch(getProfileRequest(token)),
});

export default connect(mapStateToProps , mapDispatchToProps)(Landing);


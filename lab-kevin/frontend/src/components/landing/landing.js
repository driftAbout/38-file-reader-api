import React from 'react';
import {connect} from 'react-redux';
import {signInRequest, signUpRequest} from '../../actions';
import {SignForm} from '../sign';

class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    let {params} = this.props.match;
    let onComplete = params.sign === 'signin' ?
      this.props.signin :
      this.props.signup;
  
    return (
      <section className="landing-container">
        <h2>Makin&apos; the best of every virtue and vice.</h2>
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
});

export default connect(mapStateToProps , mapDispatchToProps)(Landing);


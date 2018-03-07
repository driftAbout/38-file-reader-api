import React from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Landing} from '../landing';
import {Dashboard} from '../dashboard';
import {tokenSet} from '../../actions';

export default class App extends React.Component{
  constructor(props){
    super(props);

  }

  onComponentDidMount(){
    console.log('localstorage', localStorage.token);
    if(localStorage.token) store.dispatch(tokenSet(localStorage.token));
  }
  
  render(){
    let {token} = store.getState();
    console.log('app token', token);
    return (
      <React.Fragment>
        <header>
          <h1>Cheeseburgers in Paradise</h1>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/landing/signin">Sign in</Link></li>
          </nav>
        </header>
        <Provider store={store}>
          <main>
            <Route exact path="/landing/:sign" component={Landing} />
            <Route exact path="/" component={() => 
              token ?
                <Dashboard token={token} />
                : <Redirect to="/landing/signup" />
            }/>
          </main>
        </Provider>
      </React.Fragment>  
    );
  }
}
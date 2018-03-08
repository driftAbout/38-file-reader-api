import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Landing} from '../landing';
import {Dashboard} from '../dashboard';
import {tokenSet} from '../../actions';
import {Header} from '../header';
import {Footer} from '../footer';


export default class App extends React.Component{
  constructor(props){
    super(props);

  }

  onComponentDidMount(){
    if(localStorage.token) store.dispatch(tokenSet(localStorage.token));
  }
  
  render(){
    let {token} = store.getState();
    console.log('app token', token);
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <main>
            <Route exact path="/landing/:sign" component={Landing} />
            <Route exact path="/" component={() => 
              token ?
                <Dashboard token={token} />
                : <Redirect to="/landing/signup" />
            }/>
          </main>
          <Footer />
        </React.Fragment>  
      </Provider>
    );
  }
}
import superagent from 'superagent';

const tokenSet = token => {
  return {
    type: 'TOKEN_SET',
    payload: token,
  };
};

const tokenDelete = () => {
  return {
    type: 'TOKEN_DELETE',
  };
};

const signUpRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => dispatch(tokenSet(res.text)));
};

const signInRequest = user => dispatch => {
  return  superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => dispatch(tokenSet(res.text)));
};

export  {tokenSet, tokenDelete, signInRequest, signUpRequest};
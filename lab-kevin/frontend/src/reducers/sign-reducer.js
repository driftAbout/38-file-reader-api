export default (state=null, action) => {
  let {type, payload} = action;

  if (!state && localStorage.token) state = localStorage.token;

  let takeAction = {};
  takeAction['TOKEN_SET'] = () => {
    localStorage.token = payload;
    return payload;
  };
  takeAction['TOKEN_DELETE'] = () => null;

  takeAction['RESET_STATE'] = () => {
    delete localStorage.token;
    return null;
  };

  return takeAction[type] ? takeAction[type]() : state;

};
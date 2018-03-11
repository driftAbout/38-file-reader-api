export default (state={}, action) => {
  let {type, payload} = action;

  if (!Object.keys(state).length && localStorage.profile) state = JSON.parse(localStorage.profile);

  const takeAction = {};

  takeAction['PROFILE_SET'] = payload => {
    localStorage.profile = JSON.stringify(payload);
    return payload;
  };
   
  takeAction['RESET_STATE'] = () => {
    delete localStorage.profile;
    return {};
  };

  return takeAction[type] ? takeAction[type](payload) : state;
 
};
export default (state={}, action) => {
  let {type, payload} = action;

  const takeAction = {};

  takeAction['PROFILE_SET'] = payload => payload;

  return takeAction[type] ? takeAction[type](payload) : state;
 
};
export default (state=[], action) => {
  let {type, payload} = action;

  const takeAction = {};

  takeAction['PHOTO_CREATE'] = photo => [...state, photo];

  return takeAction[type] ? takeAction[type](payload) : state;
 
};
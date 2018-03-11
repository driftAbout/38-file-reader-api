export default (state=[], action) => {
  let {type, payload} = action;

  const takeAction = {};

  takeAction['PHOTO_CREATE'] = photo => [...state, photo];

  takeAction['PHOTO_UPDATE'] = photo => [...state].map(img => img._id === photo._id ? photo : img);
  
  takeAction['PHOTO_DELETE'] = photo => [...state].filter(img => img._id !== photo.photo_id);

  return takeAction[type] ? takeAction[type](payload) : state;
 
};
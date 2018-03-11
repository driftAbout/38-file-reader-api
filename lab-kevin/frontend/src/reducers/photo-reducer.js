export default (state=[], action) => {
  let {type, payload} = action;

  if (!state.length && localStorage.photos) state = JSON.parse(localStorage.photos);

  const takeAction = {};

  takeAction['PHOTO_CREATE'] = photo => {
    let photos = [...state, photo];
    localStorage.photos = JSON.stringify(photos);
    return photos;
  };

  takeAction['PHOTO_UPDATE'] = photo => {
    let photos = [...state].map(img => img._id === photo._id ? photo : img);
    localStorage.photos = JSON.stringify(photos);
    return photos;
  };
  
  takeAction['PHOTO_DELETE'] = photo => {
    let photos = [...state].filter(img => img._id !== photo.photo_id);
    localStorage.photos = JSON.stringify(photos);
    return photos;
  };

  takeAction['PHOTOS_SET'] = photos => {
    let photosArray = [...state, ...photos.data];
    localStorage.photos = JSON.stringify(photosArray);
    return photosArray;
  };

  takeAction['RESET_STATE'] = () => {
    delete localStorage.photos;
    return [];
  };

  return takeAction[type] ? takeAction[type](payload) : state;
 
};
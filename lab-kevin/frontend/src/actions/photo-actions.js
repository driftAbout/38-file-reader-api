import superagent from 'superagent';

const photoCreate = photo => ({type: 'PHOTO_CREATE', payload: photo});
const updatePhoto = photo => ({type: 'PHOTO_UPDATE', payload: photo});
const deletePhoto = photo => ({type: 'PHOTO_DELETE', payload: photo});

// const getProfileRequest = token => dispatch => {
//   return  superagent.get(`${__API_URL__}/profiles/me`)
//     .set({'Authorization': `Bearer ${token}`})
//     .then(res => dispatch(profileSet(res.body)));
// };

const photoCreateRequest = photo => dispatch => {
  let token = localStorage.token;
  return  superagent.post(`${__API_URL__}/photos`)
    .set({'Authorization': `Bearer ${token}`})
    .field('description', photo.description)
    .attach('photo', photo.file)
    .then(res => dispatch(photoCreate(res.body)))
    .catch(console.error);
};

const updatePhotoRequest = photo => dispatch => {
  let token = localStorage.token;
  let {description} = photo;
  return  superagent.put(`${__API_URL__}/photos/${photo.photo_id}`)
    .set({'Authorization': `Bearer ${token}`})
    .send({description: description})
    .then(res => dispatch(updatePhoto(res.body)))
    .catch(console.error);
};

const deletePhotoRequest =  photo => dispatch => {
  let token = localStorage.token;
  return  superagent.delete(`${__API_URL__}/photos/${photo.photo_id}`)
    .set({'Authorization': `Bearer ${token}`})
    .then(() => dispatch(deletePhoto(photo)))
    .catch(console.error);
};
  
// const updateProfileRequest = profile => dispatch => {
//   let {file, bio, _id} = profile;
//   let token = localStorage.token;
//   return  superagent.put(`${__API_URL__}/profiles/${_id}`)
//     .set({'Authorization': `Bearer ${token}`})
//     .field('bio', bio)
//     .attach('avatar', file)
//     .then(res => dispatch(profileSet(res.body)));
// };
    

export {photoCreate, photoCreateRequest, updatePhoto, updatePhotoRequest, deletePhoto, deletePhotoRequest};
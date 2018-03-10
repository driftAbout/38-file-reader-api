import superagent from 'superagent';

const photoCreate = photo => ({type: 'PHOTO_CREATE', payload: photo});

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
    .then(res => dispatch(photoCreate(res.body)));
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
    
export {photoCreate, photoCreateRequest};
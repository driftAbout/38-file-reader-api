import './_profile.scss';
import React from 'react';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {...this.props.profile, edit_settings: false, edit_profile: false } || {
      username: '',
      email: '',
      bio: '',
      avatar: '',
      edit_settings: false,
      edit_profile: false,
    };

    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);

  }

  toggleEdit(e){
    let edit_toggle = e.target.getAttribute('data-edit');
    this.setState({[edit_toggle]: !this.state[edit_toggle]});
  }

  handleImgClick(e){
    console.log(e);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete[e.target.name](this.state);
  }

  render(){
    return (
      <div>
        <form name="profile" className={`user-profile-form${this.state.edit_profile ? ' edit' : ''}`} onSubmit={this.handleSubmit}>
          <button  onClick={this.handleImgClick}>{this.state.avatar ? <img name="avatar" src={this.state.avatar} /> : <span>Upload Image</span>}</button>
          <textarea name='bio' value={this.state.bio}>
          </textarea>
          { this.state.edit_profile ? <span><button type="submit" >submit</button><button data-edit="edit_profile" onClick={this.toggleEdit}>cancel</button></span> : <span  data-edit="edit_profile"onClick={this.toggleEdit}>edit</span>}
        </form>
        <form name="settings" className={`user-settings-form${this.state.edit_settings ? ' edit' : ''}`}>
          <input name="username" type="type" value={this.state.username} /> 
          <input name="email" type="email" value={this.state.email} /> 
          { this.state.edit_settings ? <span><button type="submit">submit</button><button data-edit="edit_settings" onClick={this.toggleEdit}>cancel</button></span> : <span data-edit="edit_settings" onClick={this.toggleEdit}>edit</span>}
        </form>
      </div>
    );
  }
   
}
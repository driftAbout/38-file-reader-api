import './_gallery-item.scss';
import React from 'react';

export default class GalleryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photo: this.props.photo.url || '',
      photo_id: this.props.photo._id,
      description: this.props.photo.description || '',
      edit: false,
      showDelete: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleEdit(){
    this.setState({edit: !this.state.edit});
  }

  toggleDelete(){
    this.setState({showDelete: !this.state.showDelete});
  }

  handleDelete(){
    this.props.onComplete.delete_photo(this.state);
  }

  handleBlur(){
    this.toggleEdit();
  }

  handleSubmit(e){
    e.preventDefault();
    e.target.firstElementChild.blur();
    this.toggleEdit();
    if (this.state.description === this.props.photo.description) return;
    this.props.onComplete[e.target.name](this.state);
  }

  render(){
    return (
      <li className="gallery-list-item" >
        <div className="gallery-item-image-wrap">
          <div className="gallery-item-image-container" onDoubleClick={this.toggleDelete}>
            <img className="gallery-item-image" src={this.props.photo.url} />
          </div>
          <button className={`delete-photo-btn${this.state.showDelete ? ' show-delete' : ''}`} 
            type="button"
            onClick={this.handleDelete}
          >Delete Photo</button>
        </div>
        <div className="gallery-item-form-wrap">
          <form name="update" className={`gallery-item-form${this.state.edit ? ' edit' : ''}`} onSubmit={this.handleSubmit}>
            <input type="text" 
              name="description" 
              value={this.state.description} 
              onChange={this.handleChange}
              onDoubleClick={this.toggleEdit}
              onBlur={this.handleBlur}
              readOnly={!this.state.edit}  
            />
            <input type="hidden" name="submit"/>
          </form>
        </div>
      </li>
    );
  }
}
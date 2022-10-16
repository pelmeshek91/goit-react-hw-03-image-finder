import React from 'react';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
// import { Note } from '../ImageGallery/Notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      // const notify = () => toast("Did not find anything! Please change the request.");
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  notify = () => toast("Did not find anything! Please change the request.")

  render() {

    console.log(this.props);
      return (
      
      <header className="searchbar">
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.submit} onClick={this.notify}>
            {/* <span className="button-label">Search</span> */}
            <BsSearch />
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.searchQuery}
          />
        </form>
        
          {/* // !this.props.error &&
          // this.props.gallery.length < 1 &&  */}
          <ToastContainer />
      </header>
    );
  }
}

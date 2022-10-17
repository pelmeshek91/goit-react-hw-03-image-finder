import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = { gallery: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,}

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  notify = () =>
    toast.warn('Did not find anything! Please change the request.');

  render() {
    return (
      <header className="searchbar">
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.submit} onClick={this.notify}>
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
        {this.props.isLoading && !this.props.error && this.props.gallery.length < 1 && (
          <ToastContainer />
        )}
      </header>
    );
  }
}

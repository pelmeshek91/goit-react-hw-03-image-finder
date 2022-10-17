import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
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
    const { searchQuery } = this.state

    if (searchQuery.trim() === '') {
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

    

  render() {
    
    return (
      <header className="searchbar">
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.submit}>
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
      </header>
    );
  }
}

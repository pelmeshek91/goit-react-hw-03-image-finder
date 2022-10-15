import { Component } from 'react';
import { BsSearch } from "react-icons/bs";

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
      alert('Введите имя покемона.');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.submit}>
            {/* <span className="button-label">Search</span> */}
            <BsSearch/>
          </button>

          <input
            className= {s.input}
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

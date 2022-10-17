import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    isLoading: false,
    error: null,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery} = this.state
   
    return (
      <>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        <Gallery
          searchQuery={searchQuery}
        />
      </>
    );
  }
}

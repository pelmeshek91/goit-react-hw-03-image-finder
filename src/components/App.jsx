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
  stateUpdate = (gallery, isLoading, error) => {
    this.setState({ gallery, isLoading, error });
  };
  render() {
   
    return (
      <>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          gallery={this.state.gallery}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
        <Gallery
          searchQuery={this.state.searchQuery}
          onUpdate={this.stateUpdate}
        />
      </>
    );
  }
}

import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    // gallery: [],
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Gallery
          searchQuery={this.state.searchQuery}
          gallery={this.state.gallery}
        />
      </div>
    );
  }
}

import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchImage: '',
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    const { searchImage } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImage={searchImage} />
      </div>
    );
  }
}

export default App;

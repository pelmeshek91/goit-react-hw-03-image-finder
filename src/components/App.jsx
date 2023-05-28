import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImage } from 'services/pixabayAPI';

export class App extends Component {
  state = {
    searchImage: null,
  };

  handleFormSubmit = async searchImage => {
    this.setState({ searchImage });
    try {
      await fetchImage(searchImage);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;

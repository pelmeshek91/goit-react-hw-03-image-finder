import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImage } from 'services/pixabayAPI';

export default class ImageGallery extends Component {
  state = {
    gallery: null,
    isLoading: false,
    error: null,
    page: 1,
    searchCopy: null,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.searchImage !== state.searchCopy) {
      return { page: 1, searchCopy: props.searchImage };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.getImage();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getImage();
    }
  }

  getImage = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImage(this.props.searchImage, this.state.page);
      this.setState(prev => ({
        gallery: this.state.page === 1 ? images : [...prev.gallery, ...images],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { gallery } = this.state;
    return (
      <div>
        <ul className="ImageGallery">
          {gallery && (
            <>
              <ImageGalleryItem gallery={gallery} />
              <Button changePage={this.changePage} />
            </>
          )}
        </ul>
      </div>
    );
  }
}
ImageGallery.propTypes = {
  searchImage: PropTypes.string.isRequired,
};

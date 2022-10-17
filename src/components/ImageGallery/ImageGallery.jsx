import { Component } from 'react';
import PropTypes from 'prop-types';
import { axiosPicture } from '../../Services/picture-api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ButtonPagination } from 'components/Button/Button';
import { Modal } from '../Modal/Modal';
import ThreeDots from '../Loader/Loader';
import s from './ImageGallery.module.css';
import { ToastContainer, toast } from 'react-toastify';

export class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
    currentImage: null,
  };

  static propTypes = { 
    searchQuery: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired}

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

     if (prevQuery !== nextQuery) {
      try {
        this.setState({ isLoading: true, page: 1, gallery: [] });
        const pictureData = await axiosPicture(nextQuery);
        this.setState({ gallery: pictureData });  
      } catch (err) {
        this.setState({ error: err.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      try {
        this.setState({ isLoading: true, error: '' });
        const pictureData = await axiosPicture(
          nextQuery,
          nextPage
        );
          this.setState(({ gallery }) => ({
          gallery: [...gallery, ...pictureData],
        }));
      } catch (err) {
        this.setState({ error: err.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (!this.state.isLoading && this.state.gallery.length === 0) {
      this.notify();
    }
  }
   pagination = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  updateCurrentImage = data => {
    this.setState({ currentImage: data });
  };
  closeModal = () => {
    this.setState({ currentImage: null });
  };

  notify = () => {
          toast.warn('Did not find anything! Please change the request.');
  }

  render() {
    const { page, gallery, currentImage, isLoading, error } = this.state;

    return (
      <>
        {error && (
          <span className={s.error}>Oops! Something went wrong. {error}</span>
        )}
        {!isLoading && !error && gallery.length === 0 && <ToastContainer /> }
        <ul className={s.gallery}>
          {!!gallery.length && (
            <GalleryItem
              gallery={gallery}
              openModal={this.updateCurrentImage}
            />
          )}
        </ul>
        {isLoading && <ThreeDots />}
        {!!gallery.length &&
          gallery.length >= page * 12 && (
            <ButtonPagination pagination={this.pagination} />
          )}

        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}



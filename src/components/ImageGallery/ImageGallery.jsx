import { Component } from 'react';
import { axiosPicture } from '../../Services/picture-api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ButtonPagination } from 'components/Button/Button';

export class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      try {
        this.setState({ isLoading: true, error: '' });

        const pictureData = await axiosPicture(
          this.props.searchQuery,
          this.state.page
        );

        this.setState({ gallery: [...pictureData] });
      } catch (err) {
        this.setState({ error: err.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  pagination = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { gallery, page } = this.state;
    return (
      <>
        <ul className="gallery">
          {!!gallery.length && <GalleryItem gallery={gallery} />}
        </ul>
        <ButtonPagination nextPage={page} pagination={this.pagination} />
      </>
    );
  }
}

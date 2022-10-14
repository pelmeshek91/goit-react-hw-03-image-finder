
import { Component } from 'react';
import { axiosPicture } from '../../Services/picture-api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1
  };

   async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
                
    if (prevQuery !== nextQuery) {
      
      try {
      
      this.setState({ isLoading: true, error: '' });

      const pictureData = await axiosPicture(this.props.searchQuery);

      this.setState({ gallery: [...pictureData] });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
    
    }
  }
  render() {
    console.log(this.state.gallery)
       return(<ul className="gallery">
         {!!this.state.gallery.length && <GalleryItem gallery={this.state.gallery} />}
     </ul>)
     }
  }

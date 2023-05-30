import PropTypes from 'prop-types';

const ImageGalleryItem = ({ gallery }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className="ImageGalleryItem">
          <a href={largeImageURL} rel="noreferrer">
            <img
              src={webformatURL}
              alt={tags}
              width="350"
              className="ImageGalleryItem-image"
            />
          </a>
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGalleryItem;

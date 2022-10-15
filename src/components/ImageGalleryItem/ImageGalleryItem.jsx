/* eslint-disable jsx-a11y/anchor-is-valid */
export const GalleryItem = ({ gallery, openModal }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id}>
          <a
            href="#"
            onClick={() => {
              openModal({ src: largeImageURL, alt: tags });
            }}
            rel="noreferrer"
          >
            <img src={webformatURL} alt={tags} />
          </a>
        </li>
      ))}
    </>
  );
};

export const GalleryItem = ({ gallery }) => {
    console.log(gallery)
    return (
    <>
            {gallery.map(({ id, webformatURL, tags }) => <li key={id}><img src={webformatURL} alt={tags} /></li> )}
    </>
    )
}
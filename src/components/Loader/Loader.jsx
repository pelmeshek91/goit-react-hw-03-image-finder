import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="Loader">
      <ColorRing
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

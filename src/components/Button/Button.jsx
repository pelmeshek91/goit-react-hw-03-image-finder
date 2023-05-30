import PropTypes from 'prop-types';

const Button = ({ changePage }) => {
  return (
    <div>
      <button onClick={changePage}> LOAD MORE</button>
    </div>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;

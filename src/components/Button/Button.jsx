import PropTypes from 'prop-types';

const Button = ({ changePage }) => {
  return (
    <div className="Btn">
      <button onClick={changePage} className="Button">
        LOAD MORE
      </button>
    </div>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;

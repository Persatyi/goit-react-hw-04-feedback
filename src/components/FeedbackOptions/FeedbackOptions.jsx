import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { names, type, method } = props;
  return (
    <>
      {names.map(name => (
        <button
          id={name}
          type={type}
          className={s.button}
          key={name}
          onClick={method}
        >
          {name}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  names: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default FeedbackOptions;

import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { names } = props;
  return (
    <>
      {names.map(([name, value]) => (
        <p className={s.name} key={name}>
          {name} : {value}
        </p>
      ))}
    </>
  );
};

Statistics.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
};

export default Statistics;

import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

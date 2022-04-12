import s from './Section.module.css';

const Section = props => {
  const { title, children } = props;
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

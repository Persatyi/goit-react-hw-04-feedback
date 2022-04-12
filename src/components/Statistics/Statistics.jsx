import s from './Statistics.module.css';

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

export default Statistics;

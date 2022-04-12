import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { names, type, method } = props;
  return (
    <>
      {names.slice(0, 3).map(name => (
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

export default FeedbackOptions;

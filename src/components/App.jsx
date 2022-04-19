import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return +Math.round((good / countTotalFeedback()) * 100) + '%';
  };

  const total = countTotalFeedback();
  const statisticArray = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
    ['total', total],
    ['positive feedback', countPositiveFeedbackPercentage()],
  ];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          type="button"
          names={['good', 'neutral', 'bad']}
          method={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics names={statisticArray} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

// export default function App() {
//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const onLeaveFeedback = e => {
//     setState({ ...state, [e.target.id]: state[e.target.id] + 1 });
//     countTotalFeedback();
//     countPositiveFeedbackPercentage();
//   };

//   const countTotalFeedback = () => {
//     return Object.values(state).reduce((acc, element) => {
//       return acc + element;
//     }, 0);
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return +Math.round((state.good / countTotalFeedback()) * 100) + '%';
//   };

//   const total = countTotalFeedback();
//   const statisticArray = [
//     ...Object.entries(state),
//     ['total', total],
//     ['positive feedback', countPositiveFeedbackPercentage()],
//   ];

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           type="button"
//           names={Object.keys(state)}
//           method={onLeaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         {total ? (
//           <Statistics names={statisticArray} />
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Section>
//     </>
//   );
// }

import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    // switch (e.target.id) {
    //   case 'good':
    //     this.setState(prevState => {
    //       return {
    //         good: prevState.good + 1,
    //       };
    //     });
    //     break;

    //   case 'neutral':
    //     this.setState(prevState => {
    //       return {
    //         neutral: prevState.neutral + 1,
    //       };
    //     });
    //     break;

    //   case 'bad':
    //     this.setState(prevState => {
    //       return {
    //         bad: prevState.bad + 1,
    //       };
    //     });
    //     break;
    // }

    this.setState(prevState => {
      return {
        [e.target.id]: prevState[e.target.id] + 1,
      };
    });

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    // this.setState(prevState => {
    //   return {
    //     total: prevState.good + prevState.neutral + prevState.bad,
    //   };
    // });

    return Object.values(this.state).reduce((acc, element) => {
      return acc + element;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    // this.setState(prevState => {
    //   return {
    //     'Positive feedback':
    //       Math.round((prevState.good / prevState.total) * 100) + '%',
    //   };
    // });
    return (
      +Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const statisticArray = [
      ...Object.entries(this.state),
      ['total', total],
      ['positive feedback', this.countPositiveFeedbackPercentage()],
    ];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            type="button"
            names={Object.keys(this.state)}
            method={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics names={statisticArray} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

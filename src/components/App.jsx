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
    total: 0,
    'Positive feedback': '0%',
  };

  onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;

      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;

      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
    }

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        'Positive feedback':
          Math.round((prevState.good / prevState.total) * 100) + '%',
      };
    });
  };

  render() {
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
          {this.state.total ? (
            <Statistics
              names={Object.entries(this.state)}
              feedback={this.state.total}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

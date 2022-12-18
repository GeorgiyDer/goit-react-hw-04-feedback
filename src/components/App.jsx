import { useState } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export const App = () => { 
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  }

  const  countTotalFeedback = () => {
    const feedbackValues = good + bad + neutral;
    return feedbackValues;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentPositiveFeadback = good
      ? Math.ceil((good * 100) / countTotalFeedback())
      : 0;
    return percentPositiveFeadback;
  };

  const options = ['good', 'neutral', 'bad'];

  return <SectionTitle title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
        {countTotalFeedback() ?
          <Statistics
            title="Statistics"
            goodFeedback={good}
            neutralFeedback={neutral}
            badFeedback={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
            /> :
          <Notification title="Statistics" message="No feedback given"/>}
      </SectionTitle>
    ;
}


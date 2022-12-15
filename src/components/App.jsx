import { useState } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export const App = () => { 
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const makeGoodResult = () => {
    setGood(good +1)
  };

  const  makeNeutralResult = () => {
    setNeutral(neutral +1)
  };

  const makeBadResult = () => {
    setBad(bad +1)
  };

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

  return <SectionTitle title="Please leave feedback">
        <FeedbackOptions good={makeGoodResult} neutral={makeNeutralResult} bad={makeBadResult} />
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


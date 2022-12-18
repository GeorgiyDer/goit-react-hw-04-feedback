import {StyledButton, StyledDiv} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => { 
    return (
        <StyledDiv>
            {options.map(option => (<StyledButton key={option} onClick={() => onLeaveFeedback(option)}>{option}</StyledButton>))}
        </StyledDiv>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;







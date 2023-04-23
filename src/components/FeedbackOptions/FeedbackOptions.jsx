import React from 'react';
import { Buttons, Button } from '../FeedbackOptions/Button.styled';

const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <Buttons>
      <Button type="button" onClick={onGoodClick}>
        good
      </Button>
      <Button type="button" onClick={onNeutralClick}>
        neutral
      </Button>
      <Button type="button" onClick={onBadClick}>
        bad
      </Button>
    </Buttons>
  );
};

export default FeedbackOptions;

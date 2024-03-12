import React from 'react';
import { Button, Timer } from '../index';
import { Wrapper } from './Wrapper';
import { PreviewImage } from './PreviewImage';
import { Label } from './Label';
import { VotedLabel } from './VotedLabel';
import { SubmittedDateTimer } from './SubmittedDateTimer';
import { PreviewCardPropTypes } from './types';

export const PreviewCard: React.FC<PreviewCardPropTypes> = ({ 
  href,
  hrefTarget = '_self',
  label, 
  dateTime,
  dateTimeText = 'Submitted:',
  votedIconText,
  votedLabel = 'Task has been voted',
  status = 'standard', 
  picture, 
  timer,
  timerDeadline,
  timerFreeze = false,
  buttonText = 'Reserve',
  onClick,
  previewId = '',
}) => (
  <Wrapper 
    hrefTarget={hrefTarget} 
    href={href} 
    status={status}
  >
    <PreviewImage picture={picture} />

    {status === 'active' && timer && (
      <Timer
        position="center"
        durationMinutes={timer}
        freeze={timerFreeze}
        deadline={timerDeadline}
      />
    )}

    {status === 'standard' && label && (
      <Label label={label} />
    )}

    {status === 'voted' && (
      <VotedLabel 
        votedIconText={votedIconText}
        votedLabel={votedLabel}
      />
    )}

    {dateTime && (
      <SubmittedDateTimer 
        dateTimeText={dateTimeText}
        dateTime={dateTime}
      />
    )}

    <div className='relative z-index-10'>
      <Button 
        buttonText={buttonText}
        size="tiny"
        fullWidth
        onClick={() => onClick && onClick(previewId)}
      />
    </div>
  </Wrapper>
);
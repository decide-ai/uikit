import React from 'react';
import { Typography, DynamicIcon, getColorByName } from '../index';
import { ConnectLine } from './ConnectLine';
import { StepCircle } from './StepCircle';
import { StepDot } from './StepDot';
import { StepsPropTypes } from './types';

/**
 * Renders a sequence of steps with dynamic skins and connectors between them.
 * 
 * @param skin The visual style of the step ('num', 'dot', or 'icon').
 * @param steps Array of step objects, each representing a step in the sequence.
 */
export const Steps: React.FC<StepsPropTypes> = ({
  skin = 'num',
  steps,
}) => {
  /** Сheck if the icon exists */
  if (!steps.length) {
    console.error(`Step component should be provided with a steps array. Please follow the documentation.`);
    return null;
  }

  return (
    <div className="table w-full table-fixed">
      {steps.map((item, index) => (
        <div 
          key={index} 
          className='table-cell align-baseline'
          style={{ width: 'auto' }}
        >
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <ConnectLine 
                state={item.state}
                isHideLine={index === 0}
                type="left"
              />

              {skin === 'num' && (
                <StepCircle state={item.state}>
                  <Typography 
                    tagName="span" 
                    size="sm"
                  >
                    {index + 1}
                  </Typography>
                </StepCircle>
              )}
              
              {skin === 'icon' && item.iconName && (
                <StepCircle state={item.state}>
                  <DynamicIcon 
                    iconName={item.iconName}
                    stroke={getColorByName('A00')?.hex}
                  />
                </StepCircle>
              )}

              {skin === 'dot' && (
                <StepDot state={item.state} />
              )}

              <ConnectLine  
                state={item.state}
                isHideLine={index === steps.length - 1}
                type="right"
              />
            </div>

            <div className='flex justify-center pt-2'>
              <Typography size="sm">
                {item.label}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
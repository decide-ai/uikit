import React from 'react';
import cn from 'classnames';
import { Typography, getColorByName } from '../index';
import { ProgressBarProps } from './types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  label,
  type = 'line',
  total = 0,
  progress = 0,
  segmentColorKey,
}) => {
  /**
   * Calculate progress percentage
   */
  let progressPercentage = 0;
  if (progress && total) {
    let progressBar = Math.max(0, Math.min(progress, total));
    progressPercentage = (progressBar / total) * 100;
  }

  /**
   * Generate an array for segments
   */
  let segmentsArray = null;
  if (type === 'dash' && total) {
    segmentsArray = Array.from({ length: total }, (_, index) => index);
  }

  /**
   * Get the color segment if we have a ColorKey segment, otherwise we use the base color B00 from the color set
   */
  const segmentColor = segmentColorKey 
    ? getColorByName(segmentColorKey)?.bg : 'bg-B00';

  return (
    <div className="w-full flex flex-col gap-2">
      <Typography size="lg" adaptive>{title}</Typography>
      
      {type === 'line' && (  
        <div className="w-full bg-C00 rounded-full h-[5px]">
          <div
            className={`${segmentColor} h-[5px] rounded-full transition-all duration-150 ease-in-out`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      )}

      {type === 'dash' && segmentsArray && (
        <div className="w-full flex gap-2">
          {segmentsArray.map((index) => (
            <div 
              key={index} 
              className={cn("w-full h-[5px] rounded-full", {
                [segmentColor as string]: index < progress,
                'bg-C00': index >= progress,
              })}
            />
          ))}
        </div>
      )}
      
      <div className="flex justify-between">
        <Typography size="sm" adaptive>{label}</Typography>
        <Typography size="sm" adaptive>
          {type === 'line' 
            ? `${progressPercentage.toFixed(0)}/${total}` 
            : `${progress}/${total}`}
        </Typography>
      </div>
    </div>
  );
}

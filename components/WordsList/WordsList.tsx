import React from 'react';
import cn from 'classnames';
import { Typography } from '../index';
import { WordsListPropTypes } from './types';

/**
 *  Mapping grid column classes for Tailwind CSS
 */
const GRID_COLS: Record<string, string> = {
  cols2: 'grid-cols-2',
  cols3: 'grid-cols-3',
  cols4: 'grid-cols-4',
}

/**
 * Renders a list of words as specified. Allows displaying an index before each word,
 * customizing text size, and adjusting grid layout.
 */
export const WordsList: React.FC<WordsListPropTypes> = ({
  wordsList,
  showIndex = false,
  textSize = 'sm',
  gridCols = 'cols3',
}) => {
  /** 
   * If the requred prop is not obtained, return null
   */
  if (!wordsList) {
    console.error(`Prop wordsList in Component WordList does not exist.`);
    return null;
  }

  /**
   * Get grid columns;
   */
  const gridColumns = gridCols && GRID_COLS[gridCols];

  return (
    <ul className={cn('w-full grid gap-1.5 md:gap-2', gridColumns)}>
      {wordsList.map((item, index) => (
        <li key={item}>
          <div className={cn('py-2.5 px-3 rounded-md bg-C00 text-center')}>
            {showIndex && (
              <Typography size={textSize}>
                {`${index+1}.`}
              </Typography>
            )}

            <Typography size={textSize}>{item}</Typography>
          </div>
        </li>
      ))}
    </ul>
  );
}
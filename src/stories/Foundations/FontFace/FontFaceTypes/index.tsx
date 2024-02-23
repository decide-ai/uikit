import React from 'react';
import cn from 'classnames';
import { Typography } from '../../../../../components';
import { FontFaceTypesProps } from '../types';
import { DATA } from '../data';

export const FontFaceTypes: React.FC<FontFaceTypesProps> = ({ 
  name, 
  usage,
}) => (
  <div className="flex flex-col gap-y-8">
    <div 
      className={cn(...usage, 'text-lg')}
      dangerouslySetInnerHTML={{ __html: DATA.letters }} 
    />
    <ul>
      {DATA.fontSize.map(item => (
        <li key={item.name} className="grid grid-cols-[100px_1fr]">
          <Typography
            size="xs"
            color="A50"
            tagName="span"
          >
            {`${item.remSize}/${item.pxSize}`}
          </Typography>
          <span className={cn(...usage, item.name)}>{DATA.sentence}</span>
        </li>
      ))}
    </ul>
  </div>
);
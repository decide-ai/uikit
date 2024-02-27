import React from "react";
import { Typography } from '../../../components';
import { BaseContainerProps } from '../types';

export const BaseContainer: React.FC<BaseContainerProps> = ({ 
  children,
  title,
  description,
}) => (
  <React.Fragment>
    {(title || description) && (
      <div className="p-12 bg-C50">
        {title && (
          <Typography
            size="4xl"
            weight="medium"
            tagName="h2"
            adaptive
          >
            {title}
          </Typography>
        )}
        {description && (
          <div className="mt-1">
            <Typography 
              size="sm"
              adaptive
            >
              {description}
            </Typography>
          </div>
        )}
      </div>
    )}
    <div className="p-12">
      {children}
    </div>
  </React.Fragment>
);
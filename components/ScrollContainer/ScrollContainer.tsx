import React from 'react';
import classnames from 'classnames/bind';

// Styles
import styles from './styles.less';
const cn = classnames.bind(styles);

/**
 * The ScrollContainer component creates a horizontally scrollable container for its children.
 */
export const ScrollContainer = ({ 
  children 
}: {
  /**
   * Children sequence; 
   * The child elements of the component that will be displayed inside the scrollable container.
   * May include any valid React elements.
   */
  children: React.ReactNode;
}) => (
  <div className={cn('scrollBarGradient', 'flex flex-row')}>
    <div className={cn('scrollBar', 'flex gap-2 overflow-y-auto')}>
      {React.Children.toArray(children)}
    </div>
  </div>
);
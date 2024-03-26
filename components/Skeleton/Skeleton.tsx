import React from 'react';

// Types
import { SkeletonProps } from './types';

/**
 * 
 * A flexible and customizable skeleton loader component for React applications.
 * It provides a placeholder representation of the upcoming content, improving user experience during data fetching operations.
 * This component uses Tailwind CSS for styling, leveraging utility classes for backgrounds, shapes, and animations.
 * 
 * Usage example:
 * <Skeleton width="100%" height="20px" />
 * <Skeleton count={3} height="10px" />
 * <Skeleton width="50%" height="20px" circle />
 * 
 * Usage wrapper:
 * const MyCustomWrapper = ({ children }) => (
 *  <div className="my-custom-wrapper-class">
 *    {children}
 *  </div>
 * );
 * <Skeleton {...props} wrapper={MyCustomWrapper} />
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  count = 1,
  width = '100%',
  height = '20px',
  wrapper: Wrapper,
}) => {
  const elements = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className='bg-gray-300 rounded-lg animate-pulse'
      style={{ width, height }}
    />
  ));

  // If a wrapper component is provided, use it to enclose the skeleton elements
  return Wrapper ? <Wrapper>{elements}</Wrapper> : <>{elements}</>;
};

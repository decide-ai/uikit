import React, { useRef, useEffect } from "react";

// Types
import { OutsideClickPropTypes } from './types';

/**
 * `OutsideClick` Component
 * 
 * A component that monitors clicks outside the given child element
 * and calls the `onClick` function when a click outside occurs.
 * 
 * @param {function} onClick - Function to be called when a click outside the element occurs
 * @param {ReactElement} children - Child element to be wrapped with the OutsideClick logic
 * 
 * @returns {ReactElement} The wrapped child element with outside click monitoring logic
 * 
 * Component Documentation
 * #Prop Types:
 * `onClick`: Function that will be called when a click outside the element occurs.
 * `children`: The single child element of type ReactElement.
 * 
 * #Using useRef and useEffect:
 * `useRef` is used to create a reference to the element.
 * `useEffect` adds an event listener for mousedown to track clicks outside the element and removes it when the component is unmounted.
 * 
 * #Cloning the Child Element:
 * React.cloneElement is used to add the ref to the child element.
 */
export const OutsideClick: React.FC<OutsideClickPropTypes> = ({
  onClick,
  children,
}) => {
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elemRef.current && !elemRef.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick]);

  // Clone the child and add the ref
  return React.cloneElement(children, { ref: elemRef });
};
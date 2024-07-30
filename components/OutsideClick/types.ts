export type OutsideClickPropTypes = {
  /** Function to be called when a click outside the element occurs */
  onClick: () => void;
  /** Child element to be wrapped with the OutsideClick logic */
  children: React.ReactElement; // Ensure only one child element is passed
}
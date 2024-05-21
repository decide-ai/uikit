export type FiltersPropTypes = {
  /**
   * Optional label for the filters section. If provided, it will be displayed above the filters.
   */
  label?: string;

  /**
   * Children elements to be rendered within the scroll container. Typically, these would be the individual filters.
   */
  children: React.ReactNode;

  /**
   * Optional Callback function for the filters section. Callback to be invoked when the sort button is clicked.
   */
  onSortClick?: () => void;

   /**
   * Optional Name for the filters section. Name to be displayed on the sort button. Defaults to 'Sort'.
   */
  sortName?: string;

  /**
   * Optional prop for the filters section. If true, the sort button will only be shown on mobile devices.
   */
  sortOnlyMobile?: boolean;
}

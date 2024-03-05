// Types definition for StatBox component props
export type StatBoxPropTypes = {
  /**
   * The main text label for the stat box
   */
  label: string;

  /**
   * The name of the icon displayed next to the label
   */
  iconName: string;

  /**
   * Content or data to display in the main area of the stat box
   */
  children: React.ReactNode; 

  /**
   * Optional text for a primary action button
   */
  primaryBtnText?: string;

  /**
   * Optional click handler for the primary button
   */
  primaryBtnOnClick?: () => void;

  /**
   * Optional text for a secondary action button
   */
  secondaryBtnText?: string;

  /**
   * Optional click handler for the secondary button
   */
  secondaryBtnOnClick?: () => void;

  /**
   * Skin variation for styling the stat box. Defaults to 'standard'.
   */
  skin?: 'standard' | 'grey';

  /**
   * Optional tooltip text to explain the stat box or provide additional information
   */
  tooltip?: string;
}

export type HeadingPropTypes = Pick<StatBoxPropTypes, 'label' | 'tooltip' | 'iconName'>;
export type ButtonPropsTypes = Pick<StatBoxPropTypes, 'primaryBtnText' | 'primaryBtnOnClick' | 'secondaryBtnText' | 'secondaryBtnOnClick'>;
export type FeedbackAlertPropTypes = {
  /**
   * Optional icon name for the icon displayed in the alert
   */
  iconName?: string;

  /**
   * The main text message to be displayed in the alert
   */
  text: string;

  /**
   * Optional skin color for the alert background
   */
  skin?: 'green' | 'yellow' | 'red' | 'grey' | 'darkGreen',

  /**
   * Optional children to render additional elements inside the alert
   */
  children?: React.ReactNode;
}
type ChildrenTypes = {
  children: React.ReactNode;
}

export type WrapperPropTypes = Pick<PreviewCardPropTypes, 'status' | 'href' | 'hrefTarget'> & ChildrenTypes;
export type PreviewImagePropTypes = Pick<PreviewCardPropTypes, 'picture'>;
export type LabelPropTypes = Pick<PreviewCardPropTypes, 'label'>;
export type VotedLabelPropTypes = Pick<PreviewCardPropTypes, 'votedLabel' | 'votedIconText'>;
export type SubmittedDateTimerPropTypes = Pick<PreviewCardPropTypes, 'dateTime' | 'dateTimeText'>;

// Type definition for the props accepted by the PreviewCard component
export type PreviewCardPropTypes = {
  /**
   * Preview link.
   */
  href?: string;

  /**
   * Preview link target. Exists in two versions: '_self' | '_blank'. Default value '_self'
   */
  hrefTarget?: '_self' | '_blank';

  /**
   * Optional label to display on the PreviewCard. This could represent the warning text with gray background.
   * Block is displayed if component has a prop `label` and a prop `status` is equal `standard`.
   */
  label?: string;

  /**
   * Optional datetime string to indicate when the card content was submitted or created.
   */
  dateTime?: string;

  /**
   * Optional datetime text string to indicate when the card content was submitted or created.
   * Default text is "Submitted:"
   */
  dateTimeText?: string;

  /**
   * Text to display next to the voted icon. Used when the prop `status` is equal 'voted'.
   */
  votedIconText?: string;

  /**
   * Label to display when the prop `status` is equal 'voted'. Provides additional information or status.
   */
  votedLabel?: string;
  
  /**
   * The current status of the card. Changes how certain parts of the card are displayed.
   */
  status: 'active' | 'standard' | 'voted';

  /**
   * URL of the image to display as the card's picture. Must be a valid image URL.
   */
  picture: string;
  
  /**
   * Optional timer duration in minutes. Used when the status is 'active' to show a countdown.
   */
  timer?: number;

  /**
   * Controls whether the timer is paused or running. Useful for pausing the countdown.
   */
  timerFreeze?: boolean;

  /**
   * A threshold in seconds. For exapmle `120` seconds. When the remaining time reaches this value, `isExpired` becomes `true`. Default is 0.
   */
  timerDeadline?: number;

  /**
   * Text to display on the button. Defaults to 'Reserve' if not provided.
   */
  buttonText?: string;


  /**
   * Optional click handler for the button. Receives the previewId as an argument.
   */
  onClick?: (previewId: string | number) => void;

  /**
   * Unique identifier for the preview content. Used in the button's click handler.
   */
  previewId?: string | number;
}
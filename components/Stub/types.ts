// Defines the prop types for the Stub component
export type StubPropTypes = {
  /** 
   * The main title displayed in the Stub component. 
   */
  title: string;

  /** 
   * The name of the icon to be displayed. The iconName must correspond to one of the available icons.
   */
  iconName: string;

  /**
   *  An optional subtitle to provide additional information or context.
   */
  subTitle?: string;

  /** 
   * Specifies the color of the icon stroke. Default is 'A00'. It can be a color name defined in the current uikit color sistem.
   */
  iconStroke?: string;
}
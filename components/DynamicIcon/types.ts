export type DynamicIconPropTypes = {
  /**
   * Component render icon by name. 
   * iconName is required param.
   */
  iconName: string;
  /**
   * To type other props that can be passed to IconComponent.
   */
  [key: string]: any;
}
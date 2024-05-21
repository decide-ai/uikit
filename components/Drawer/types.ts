type SizeTypes = 'large' | 'medium';
type RoundedTypes = '3xl' | '2xl' | 'xl' | 'lg' | 'md';

export type DrawerPropTypes = {
  /**
   * `children`: Represents the content to be rendered within the Drawer component. This prop is
   * required to display anything inside the Drawer. It can be any valid React node, including
   * components, elements, or fragments.
   */
  children: React.ReactNode;

  /**
   * `empty`: An optional boolean flag that, when true, modifies the styling of the Drawer component
   * to indicate it is empty or to apply a different visual appearance. By default, padding is applied
   * to the Drawer's content. If `empty` is set to true, this padding is removed, allowing for more
   * custom content styling or indicating an empty state.
   */
  empty?: boolean;

  /**
   * Extra classes for manage drower component.
   */
  className?: string;

  /**
   * Change the appearance of a drawer with a skin prop.
   * standard - is for general primary actions. This skin add white color, use as default value.
   * grey - this skin add grey background to drawer.
   * green - this skin add green B50 background to drawer.
   */
  skin?: 'standard' | 'grey' | 'green';

  /**
   * Controls the drower size with the `size` prop. Available sizes are:
   * 'large', 'medium'. This props changes padding in box;
   */
  size?: SizeTypes;

  /**
   * When `rounded` is `3xl`, the drawer become `rounded-3xl` rounded for large screen, 
   * `rounded-2xl` for small screen and for mobile.
   * 
   * `rounded-3xl: mobile/tablet - 2xl, desktop - md:3xl`;
   * `rounded-3xl: mobile/tablet - xl, desktop - md:2xl`;
   * `rounded-3xl: mobile/tablet/desktop - xl`;
   * `rounded-3xl: mobile/tablet/desktop - lg`;
   * `rounded-3xl: mobile/tablet/desktop - md`;
   * 
   * By default, the `rounded` prop is `lg`;
   */
  rounded?: RoundedTypes;

  /** Add shadow to the component Drawer. Shadow styles located in tailwind.config.js */
  shadow?: boolean;
}
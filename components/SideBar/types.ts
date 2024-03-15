export type ChildrenNodePropTypes = {
  children: React.ReactNode
}

export type SideBarItemBoxPropTypes = ChildrenNodePropTypes;

export type MapWrapperPropTypes = {
  itemsList: ItemsPropTypes[];
}

export type ContextTypes = {
  /**
   * Variable use for toggle Desktop SideBar
   */
  isExpanded: boolean;

  /**
   * Function to toggle the expanded state
   */
  toggleExpanded: () => void;
}

export type ModClubLogoPropTypes = {
  /**
   * Is show logo with text or hide text
   */
  isLess?: boolean;
}

// Define the shape of items that will be displayed in the sidebar.
// Each item contains a text, an icon, and optional onClick and href handlers.
export type ItemsPropTypes = {
  /**
   * Items text.
   */
  text?: string;

  /**
   * Item icon. Require param
   */
  iconName: string;
  
  /**
   * Items callback
   */
  onClick?: () => void;
}

export type SideBarPropTypes = {
  /**
   * Items to be displayed at the top of the sidebar.
   */
  beforeDeviderList?: ItemsPropTypes[];

  /**
   * Items to be displayed below the aboveList.
   */
  afterDeviderList?: ItemsPropTypes[];

  /**
   * Items to be displayed at the bottom of the sidebar.
   */
  extraList?: ItemsPropTypes[]
}
type RecordItemTypes = {
  /**
   * Defines the type for a record item where each key can be a string, a boolean, or a React node.
   */
  [key: string]: string | boolean | number | React.ReactNode;
};

type TruncateTypes = {
    /**
   * Use truncate to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed.
   */
    truncate?: boolean;
}

export type TableItemWrapPropTypes = AlignColumnType & {
  /**
   * `children`: Represents the content to be rendered within the Table item component.
   */
  children: React.ReactNode;
}

/**
 * Controls the vertical padding of table rows.
 */
export type VerticalSpaceTypes = {
  /**
   * tiny - Adds 12px padding. Use it to create dense tables or for rows that contain media elements, such as images or avatars.
   * small - Adds 15px padding. Use this for common cases.
   * medium (default) - Adds 18px padding. Use this for short data lists.
   * large - Adds 24px padding. Use sparingly for short data lists with a few items only.
   */
  rowVerticalSpace?: 'tiny' | 'small' | 'medium' | 'large';
}

export type VerticalSkinPropTypes = {
  /**
   * Skin use VerticalSpaceTypes and pick one of TW padding classes from styles object.
   */
  verticalPaddingSkin: string;
}


type AlignColumnType = {
  /**
   * Optional. Specifies the alignment of the column content.
   */
  align?: 'start' | 'center' | 'end';
}

/**
 * Defines the type for a table column.
 */
export type ColumnTypes = AlignColumnType & {
  /**
   * The title of the column.
   */
  title: string;

  /**
   * A function to render the cell content. It takes a record and returns a React node.
   */
  render: (row: RecordItemTypes) => React.ReactNode;

  /**
   * Column icon
   * 
   * Add a tooltip to give additional information about a specific column using infoTooltipProps.
   */
  infoTooltipProps?: string;

  /**
   * Callback for sort button. This prop display sort button with default SortVerticalIcon icon.
   */
  onSortClick?: () => void;

  /**
   * If this param is equal null component will displaying SortVerticalIcon insted
   */
  sortIconName?: string;

  /**
   * This param add button incolumn, button text get from buttonText records array. 
   * !IMPORTANT: Button always return record item object.
   */
  isShowButton?: boolean;
};

/**
 * Props for the Table Header component.
 */
export type TableHeaderPropTypes = VerticalSpaceTypes & TruncateTypes & {
  /**
   * An array of table columns.
   */
  columns: ColumnTypes[];
};

/**
 * Props for the Table Row component.
 */
export type TableRowPropsTypes = Pick<TablePropTypes, 'truncate' | 'highlightedRows' | 'columns'> & VerticalSpaceTypes & {
  /**
   * The record to be displayed in the row.
   */
  record: RecordItemTypes;

  /**
   * Help to find even and odd row for add background gray or white.
   */
  rowIndex: number;
};

/**
 * Props for the main Table component.
 */
export type TablePropTypes = VerticalSpaceTypes & TruncateTypes & {
  /**
   * Optional. An array of IDs for highlighted rows.
   * Flag indicating whether the line should be highlighted. Mast use a key "id" for each one to highlight a table row.
   */
  highlightedRows?: string[];

  /**
   * An array of records to display in the table.
   */
  records: RecordItemTypes[];

  /**
   * An array of columns to display.
   */
  columns: ColumnTypes[];
};

export type GridWrapPropTypes = VerticalSpaceTypes 
  & Pick<TablePropTypes, 'highlightedRows'>
  & {
  /**
   * The record to be displayed in the row.
   */
  record?: RecordItemTypes;

  /**
   * Help to find even and odd row for add background gray or white.
   */
  rowIndex?: number;

  /**
   * `children`: Represents the content to be rendered within the Table component.
   */
  children: React.ReactNode;

  /**
   * Extra classes. More use for Table Header component.
   */
  className?: string;
}

export type MobileItemWrapPropTypes = Pick<GridWrapPropTypes, 'record' | 'highlightedRows' | 'children'>;

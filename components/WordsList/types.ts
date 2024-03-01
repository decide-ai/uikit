export type WordsListPropTypes = {
  /** 
   * Array of words to be displayed
   */
  wordsList: string[];

  /** 
   * Flag to show the index before each word
   */
  showIndex?: boolean;

  /** 
   * Text size for the words
   */
  textSize?: "base" | "sm" | "xs";

  /** 
   * Grid column configuration
   */
  gridCols?: 'cols2' | 'cols3' | 'cols4';
}
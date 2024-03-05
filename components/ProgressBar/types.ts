export type ProgressBarProps = {
  /**
   * The title of the progress bar. This is typically used to describe what the progress bar represents.
   * It is displayed above the progress bar itself.
   */
  title?: string;

  /**
   * A label that provides additional information about the progress bar, such as the current status or
   * a brief description. It is displayed below the progress bar.
   */
  label?: string;

  /**
   * The type of progress bar to display. There are two types:
   * - 'line': A continuous progress bar.
   * - 'dash': A segmented progress bar, where each segment represents a portion of the total progress.
   * The default type is 'line'.
   */
  type?: 'line' | 'dash';

  /**
   * The key to retrieve the color for the progress bar from a predefined set of colors. This allows for
   * customizable color schemes based on the progress state or to match a branding theme.
   * If not provided, a default color ('bg-B00') is used.
   */
  segmentColorKey?: string;

  /**
   * The current progress value. This is used to calculate the width of the filled portion of the
   * progress bar relative to the total. For a 'dash' type progress bar, it determines how many segments
   * are filled.
   */
  progress?: number;

  /**
   * The total value that represents completion. In a 'line' type progress bar, this value is used
   * alongside the `progress` prop to calculate the percentage of completion. In a 'dash' type, it
   * determines the total number of segments.
   */
  total?: number;
}
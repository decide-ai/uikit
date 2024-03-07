type Step = {
  /**
   * The current state of the step, which affects its display. Indicates what state the element is currently in;
   */
  state?: 'active' | 'completed' | undefined;

  /**
   * The text label displayed beneath the step indicator.
   */
  label?: string;

  /**
   * The name of the icon to display for the step when using 'icon' skin.
   */
  iconName?: string;
};

export type StepsPropTypes = {
  /**
   * An array of step objects. Each step object follows the Step type structure.
   * `state` - Indicates what state the element is currently in 'active', 'completed', regular view;
   * `label` - The text label displayed beneath the step indicator.
   * `iconName` - The name of the icon to display for the step. Works only when using 'icon' skin.
   */
  steps: Step[];

  /**
   * Visual representation style of the steps:
   * num - displays a number inside the circle.
   * dot - displays a small dot.
   * icon - displays an icon.
   */
  skin?: 'num' | 'dot' | 'icon';
}

export type CirclePropTypes = Pick<Step, 'state'> & {
  state: 'active' | 'completed' | 'error' | undefined;
  children: React.ReactNode;
}

export type StepDotPropTypes = {
  /**
   * Represents the current state of the line, affecting its color.
   */
  state: string | undefined;
}

export type ConnectLinePropTypes = StepDotPropTypes & {
  /** 
   * Determines if the line should be hidden.
   */
  isHideLine: boolean;

  /**
   * Specifies the line type, which can affect its styling.
   */
  type?: 'right' | 'left';
}
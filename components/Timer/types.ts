export type TimerProps = {
  /**
   * (required): Duration of the timer in minutes. Timer starts counting down from this value.
   */
  durationMinutes: number;

  /**
   * A threshold in seconds. For exapmle `120` seconds. When the remaining time reaches this value, `isExpired` becomes `true`. Default is 0.
   */
  deadline?: number;

  /**
   * A boolean indicating whether the timer should pause or continue. When true, the timer pauses. Default is false.
   */
  freeze?: boolean;

  /**
   * Custom text to display when the timer has expired. Defaults to "Reservation expires".
   */
  expiredText?: string;

  /**
   * callback fired when time is expired;
   */
  callback?: (statusMessage: string) => void;

  /**
   * Timer position.
   * Default position: start
   */
  position?: 'center' | 'start';
};
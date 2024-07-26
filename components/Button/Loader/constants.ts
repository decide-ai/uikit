import cn from 'classnames';
import { LoaderSizeTypes, ThemeTypes } from '../types';

/**
 * Spinner Style Display Options
 */
export const spinnerSkin = (theme: ThemeTypes) => ({
  standard: 'grey',
  inline: theme === 'darkGreen' ? 'standard' : theme === 'blue' ? 'blue' : 'black',
  grey: theme === 'darkGreen' ? 'standard' : theme === 'blue' ? 'blue' : 'black',
  inlineGrey: theme === 'darkGreen' ? 'standard' : theme === 'blue' ? 'blue' : 'black',
  light: theme === 'darkGreen' ? 'standard' : theme === 'blue' ? 'blue' : 'black',
  limpid: theme === 'darkGreen' ? 'grey' : theme === 'blue' ? 'blue' : 'black',
}) 

/**
 * Spinner Size Display Options
 */
export const SPINNER_SIZE: LoaderSizeTypes = {
  large: 'base',
  medium: 'small',
  small: 'tiny',
  tiny: 'tiny'
}
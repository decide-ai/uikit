import { colorsMap } from '../../../../components';
import { ColorsMapItem } from './types'

/**
 * Convert array to group of objects
 */
export const getColorsGroup = () => {
  const grouped = colorsMap.reduce<Record<string, ColorsMapItem>>((acc, { group, name, bg, text, hex }) => {
    if (!acc[group]) {
      acc[group] = { group, colorsList: [{ name, bg, text, hex }] };
    } else {
      acc[group].colorsList.push({ name, bg, text, hex });
    }
    return acc;
  }, {});

  return Object.values(grouped);
}
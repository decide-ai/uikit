import { getIconsMap } from "../../../../components";
import { IconMapItem } from "./types";

/**
 * Convert array to group of objects
 */
export const getIconsGroup = () => {
  const arr = getIconsMap();
  const grouped = arr.reduce<Record<string, IconMapItem>>((acc, { group, name, component }) => {
    if (!acc[group]) {
      acc[group] = { group, iconsList: [{ name, component }] };
    } else {
      acc[group].iconsList.push({ name, component });
    }
    return acc;
  }, {});

  return Object.values(grouped);
}
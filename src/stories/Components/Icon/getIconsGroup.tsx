import { getIconsMap } from "../../../../components";
import { IconMapItem } from "./types";

/**
 * Convert Map to group of objects
 */
export const getIconsGroup = () => {
  const iconsMap = getIconsMap();
  const grouped = Array.from(iconsMap).reduce<Record<string, IconMapItem>>((acc, [name, { group, component }]) => {
    if (!acc[group]) {
      acc[group] = { group, iconsList: [{ name, component }] };
    } else {
      acc[group].iconsList.push({ name, component });
    }
    return acc;
  }, {});

  return Object.values(grouped);
}

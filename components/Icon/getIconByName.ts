import { getIconsMap } from "./getIconsMap";

/**
 * The method allows to get any icon by name.
 */
export const getIconByName = (iconName: string) => {
  const iconsMap = getIconsMap();
  let IconObject = iconsMap.find(item => item.name === iconName);
  if (!IconObject) return null;
  
  return IconObject.component;
}
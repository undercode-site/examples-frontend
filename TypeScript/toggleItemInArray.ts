export function toggleItemInArray<T>(list: T[], item: T): T[] {
  const index = list.indexOf(item);
  if (~index) {
    const listCopy = [...list];
    listCopy.splice(index, 1);
    return listCopy;
  } else {
    return [...list, item];
  }
}

export function generateArrays(length, filler) {
  return [...Array(length).keys()].map(filler);
}

export function isValidPosition(x, y, width, height) {
  return x >= 0 && y >= 0 && x < width && y < height;
}

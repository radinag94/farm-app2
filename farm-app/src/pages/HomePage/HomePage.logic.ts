export function flattenCoordinates(coordinates) {
  return coordinates
    .flat(Infinity)
    .map((coordinate) =>
      Array.isArray(coordinate) ? coordinate.join(", ") : coordinate
    )
    .join(" ,");
}

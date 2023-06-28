export const truncateDecimal = (value, decimalPlaces) => {
  const factor = 10 ** decimalPlaces;
  return Math.floor(value * factor) / factor;
};

export const isCoordinateMatch = (clickedRelative, characterPosition) => {
  const { xRelative, yRelative } = characterPosition;
  const { clickedXRelative, clickedYRelative } = clickedRelative;
  const toleranceX = 0.006;
  const toleranceY = 0.01;
  // not truncating the difference value because there's as such no need and why make unnecessary calls to trunc func?
  return (
    Math.abs(xRelative - clickedXRelative) <= toleranceX &&
    Math.abs(yRelative - clickedYRelative) <= toleranceY
  );
};

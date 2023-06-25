export const calculatePopupPosition = (X, Y, parentElement, popupElement) => {
  const parentBounds = parentElement.getBoundingClientRect();
  const popupBounds = popupElement.getBoundingClientRect();

  const maxX = parentBounds.width - popupBounds.width;
  const maxY = parentBounds.height - popupBounds.height + 180;

  const x = Math.max(0, Math.min(X, maxX));
  const y = Math.max(0, Math.min(Y, maxY));
  return { x, y };
};

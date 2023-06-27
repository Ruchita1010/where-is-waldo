import { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { calculatePopupPosition } from '../utils/popupUtils';

export const usePopup = (initialCoords) => {
  const [popup, setPopup] = useState({
    open: false,
    position: initialCoords,
  });

  const parentRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const parentElement = parentRef.current;
    const popupElement = popupRef.current;

    const { x, y } = calculatePopupPosition(
      initialCoords.x,
      initialCoords.y,
      parentElement,
      popupElement
    );

    setPopup((prevPopup) => ({
      ...prevPopup,
      position: { x, y },
    }));
  }, [initialCoords]);

  const closePopup = () => {
    setPopup((prevPopup) => ({
      ...prevPopup,
      open: false,
    }));
  };

  useOutsideClick(parentRef, closePopup);

  return [popup, setPopup, parentRef, popupRef];
};

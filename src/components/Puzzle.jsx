import { useEffect, useRef, useState } from 'react';
import { calculatePopupPosition } from '../utils/popupUtils';
import { truncateDecimal } from '../utils/coordinatesUtils.js';
import { isCoordinateMatch } from '../utils/coordinatesUtils.js';
import styles from '../styles/Puzzle.module.css';

export const Puzzle = ({ puzzle, setFoundCharacters, startTimer }) => {
  const { image, location, characters } = puzzle;

  const [popup, setPopup] = useState({ open: false, position: { x: 0, y: 0 } });
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  const parentRef = useRef();
  const popupRef = useRef();

  // close popup if clicked outside the image
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (parentRef.current && !parentRef.current.contains(e.target)) {
        setPopup((prevPopup) => ({
          ...prevPopup,
          open: false,
        }));
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleImageClick = (e) => {
    const X = e.pageX + e.currentTarget.scrollLeft;
    const Y = e.pageY + e.currentTarget.scrollTop;
    const newPosition = calculatePopupPosition(
      X,
      Y,
      parentRef.current,
      popupRef.current
    );
    setPopup({ open: true, position: newPosition });
    setOffsets({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleCharacterOptionClick = (name, position) => {
    const { width, height } = parentRef.current;
    const clickedXRelative = truncateDecimal(offsets.x / width, 3);
    const clickedYRelative = truncateDecimal(offsets.y / height, 3);
    const isMatched = isCoordinateMatch(
      { clickedXRelative, clickedYRelative },
      position
    );

    if (isMatched) {
      setFoundCharacters((prevFoundCharacters) => {
        // ensure that the same character isn't added again
        if (!prevFoundCharacters.includes(name)) {
          return [...prevFoundCharacters, name];
        }
        return prevFoundCharacters;
      });
    }
  };

  /* start timer when the puzzle image has finished loading! It doesn't makes sense to start the time as soon as the component mounts when the image hasn't loaded*/
  const handleImageLoad = () => {
    startTimer();
  };

  const popupStyles = {
    visibility: popup.open ? 'visible' : 'hidden',
    left: `${popup.position.x}px`,
    top: `${popup.position.y}px`,
  };

  return (
    <main>
      <div className={styles.puzzleImageContainer}>
        <img
          src={image}
          alt={location}
          onClick={handleImageClick}
          onLoad={handleImageLoad}
          ref={parentRef}
        />
      </div>
      <div className={styles.popup} style={popupStyles} ref={popupRef}>
        {characters.map(({ image, name, position }) => (
          /* using the character's name as key because I know it is going to be different and there are very few characters */
          <div
            key={name}
            className={styles.characterOptionsContainer}
            onClick={() => handleCharacterOptionClick(name, position)}>
            <img src={image} />
            <p>{name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

import { useState } from 'react';
import { usePopup } from '../hooks/usePopup';
import { truncateDecimal } from '../utils/coordinatesUtils.js';
import { isCoordinateMatch } from '../utils/coordinatesUtils.js';
import styles from '../styles/Puzzle.module.css';

export const Puzzle = ({ puzzle }) => {
  const { image, location, characters } = puzzle;

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });
  const [popup, setPopup, parentRef, popupRef] = usePopup(coords);

  const handleImageClick = (e) => {
    const x = e.pageX + e.currentTarget.scrollLeft;
    const y = e.pageY + e.currentTarget.scrollTop;
    setCoords({ x, y });
    setPopup((prevPopup) => ({
      ...prevPopup,
      open: true,
    }));
    setOffsets({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
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
      console.log(`Found ${name}!`);
    }
  };

  const popupStyles = {
    display: popup.open ? 'block' : 'none',
    position: 'absolute',
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

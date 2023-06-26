import { useEffect, useRef, useState } from 'react';
import { Character } from './Character';
import { CharacterOptionsPopup } from './CharacterOptionsPopup';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { calculatePopupPosition } from '../utils/popupUtils';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { image, location, characters } = puzzle;
  const [popup, setPopup] = useState({
    open: false,
    position: { x: 0, y: 0 },
  });
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const parentRef = useRef(null);
  const popupRef = useRef(null);

  const handleImageClick = (e) => {
    const x = e.pageX + e.currentTarget.scrollLeft;
    const y = e.pageY + e.currentTarget.scrollTop;
    setCoords({ x, y });
    setPopup((prevPopup) => ({
      ...prevPopup,
      open: true,
    }));
  };

  useEffect(() => {
    const parentElement = parentRef.current;
    const popupElement = popupRef.current;

    const { x, y } = calculatePopupPosition(
      coords.x,
      coords.y,
      parentElement,
      popupElement
    );

    setPopup((prevPopup) => ({
      ...prevPopup,
      position: { x, y },
    }));
  }, [coords]);

  const closePopup = () => {
    setPopup((prevPopup) => ({
      ...prevPopup,
      open: false,
    }));
  };

  useOutsideClick(parentRef, closePopup);

  return (
    <div className={styles.gameScreen}>
      <nav>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>LEADERBOARD</button>
      </nav>
      <div className={styles.gameStateDisplay}>
        <div className={styles.characterContainer}>
          {characters.map(({ image, name }) => (
            /* using the character's name as key because I know it is going to be different and there are very few characters */
            <Character key={name} image={image} name={name} />
          ))}
        </div>
        <p className={styles.timer}>00:00:00</p>
      </div>
      <main>
        <div className={styles.puzzleImageContainer} ref={parentRef}>
          <img src={image} alt={location} onClick={handleImageClick} />
        </div>
        <CharacterOptionsPopup
          characters={characters}
          popup={popup}
          coords={coords}
          ref={popupRef}
        />
      </main>
    </div>
  );
};

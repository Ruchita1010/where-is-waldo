import { useRef, useState } from 'react';
import { Character } from './Character';
import { CharacterOptionsPopup } from './CharacterOptionsPopup';
import { calculatePopupPosition } from '../utils/popupUtils';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { image, location, characters } = puzzle;
  const [popup, setPopup] = useState({
    isOpen: false,
    style: { position: 'absolute', top: 0, left: 0 },
  });
  const parentRef = useRef(null);
  const popupRef = useRef(null);

  const showPopUp = (e) => {
    const X = e.pageX + e.currentTarget.scrollLeft;
    const Y = e.pageY + e.currentTarget.scrollTop;
    const parentElement = parentRef.current;
    const popupElement = popupRef.current;

    const { x, y } = calculatePopupPosition(X, Y, parentElement, popupElement);

    setPopup({
      isOpen: true,
      style: { position: 'absolute', left: `${x}px`, top: `${y}px` },
    });
  };

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
          <img src={image} alt={location} onClick={showPopUp} />
        </div>
        <CharacterOptionsPopup
          characters={characters}
          popup={popup}
          ref={popupRef}
        />
      </main>
    </div>
  );
};

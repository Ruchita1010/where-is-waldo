import { formatTime } from '../utils/timeUtils';
import styles from '../styles/GameState.module.css';

export const GameState = ({ characters, foundCharacters, time }) => {
  return (
    <div className={styles.gameStateDisplay}>
      <div className={styles.characterContainer}>
        {characters.map(({ image, name }) => (
          /* using the character's name as key because I know it is going to be different and there are very few characters */
          <div key={name} className={styles.characterImageContainer}>
            <img
              src={image}
              alt={name}
              className={foundCharacters.includes(name) ? styles.found : ''}
            />
          </div>
        ))}
      </div>
      <p className={styles.timer}>{formatTime(time)}</p>
    </div>
  );
};

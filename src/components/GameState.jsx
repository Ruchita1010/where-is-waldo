import { Character } from './Character';
import styles from '../styles/GameState.module.css';

export const GameState = ({ characters }) => {
  return (
    <div className={styles.gameStateDisplay}>
      <div className={styles.characterContainer}>
        {characters.map(({ image, name }) => (
          /* using the character's name as key because I know it is going to be different and there are very few characters */
          <Character key={name} image={image} name={name} />
        ))}
      </div>
      <p className={styles.timer}>00:00:00</p>
    </div>
  );
};

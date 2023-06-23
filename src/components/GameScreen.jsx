import { Character } from './Character';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { image, location, characters } = puzzle;

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
        <div className={styles.puzzleImageContainer}>
          <img src={image} alt={location} />
        </div>
      </main>
    </div>
  );
};

import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters } = puzzle;

  return (
    <div className={styles.gameScreen}>
      <nav>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>LEADERBOARD</button>
      </nav>
      <GameState characters={characters} />
      <Puzzle puzzle={puzzle} />
    </div>
  );
};

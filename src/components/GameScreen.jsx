import { useState } from 'react';
import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters } = puzzle;
  const [foundCharacters, setFoundCharacters] = useState([]);

  return (
    <div className={styles.gameScreen}>
      <nav>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>LEADERBOARD</button>
      </nav>
      <GameState characters={characters} foundCharacters={foundCharacters} />
      <Puzzle puzzle={puzzle} setFoundCharacters={setFoundCharacters} />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters } = puzzle;
  const [foundCharacters, setFoundCharacters] = useState([]);

  useEffect(() => {
    if (foundCharacters.length === characters.length) {
      console.log('You found them all');
    }
  }, [foundCharacters]);

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

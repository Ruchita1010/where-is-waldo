import { useEffect, useState } from 'react';
import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import { useTimer } from '../hooks/useTimer';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters } = puzzle;
  const [foundCharacters, setFoundCharacters] = useState([]);

  const [time, startTimer, clearTimer] = useTimer();

  useEffect(() => {
    if (foundCharacters.length === characters.length) {
      clearTimer();
    }
  }, [foundCharacters]);

  return (
    <div className={styles.gameScreen}>
      <nav>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>LEADERBOARD</button>
      </nav>
      <GameState
        characters={characters}
        foundCharacters={foundCharacters}
        time={time}
      />
      <Puzzle
        puzzle={puzzle}
        setFoundCharacters={setFoundCharacters}
        startTimer={startTimer}
      />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import { Modal } from './Modal';
import { useTimer } from '../hooks/useTimer';
import { useDisableScroll } from '../hooks/useDisableScroll';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters } = puzzle;
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [time, startTimer, clearTimer] = useTimer();

  // disables scroll when modal is open
  useDisableScroll(showModal);

  useEffect(() => {
    if (foundCharacters.length === characters.length) {
      clearTimer();
      setShowModal(true);
    }
  }, [foundCharacters]);

  const handleModalSubmit = (playerName) => {
    console.log(`Player Name: ${playerName}`);
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

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
      {showModal && (
        <Modal onSubmit={handleModalSubmit} onCancel={handleModalCancel} />
      )}
    </div>
  );
};

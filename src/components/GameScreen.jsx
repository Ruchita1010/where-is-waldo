import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GameState } from './GameState';
import { Puzzle } from './Puzzle';
import { Modal } from './Modal';
import { useTimer } from '../hooks/useTimer';
import { useDisableScroll } from '../hooks/useDisableScroll';
import { addToLeaderboard } from '../firebase/firebaseDataActions';
import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { characters, id } = puzzle;
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
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
    addToLeaderboard({ playerName, time }, id)
      .then(() => {
        setShowModal(false);
        navigate('/leaderboard');
      })
      .catch((error) => {
        console.error('Error adding to leaderboard:', error);
      });
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.gameScreen}>
      <nav>
        <Link to="/">
          <button className="btn">HOME</button>
        </Link>
        <Link to="/leaderboard">
          <button className="btn">LEADERBOARD</button>
        </Link>
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

import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export const Modal = ({ onSubmit, onCancel }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(playerName);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <p>Woot! Woot! You found them all</p>
        <p>（￣︶￣）↗</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="playerName">
            Enter your name to join the leaderboard
          </label>
          <input
            type="text"
            id="playerName"
            maxLength={30}
            required
            value={playerName}
            onChange={handleInputChange}
          />
          <div className={styles.modalBtns}>
            <button type="button" className="btn" onClick={onCancel}>
              CANCEL
            </button>
            <button type="submit" className="btn" id={styles.submitBtn}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

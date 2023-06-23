import styles from '../styles/GameScreen.module.css';

export const GameScreen = ({ puzzle }) => {
  const { image, location } = puzzle;

  return (
    <div className={styles.gameScreen}>
      <nav>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>LEADERBOARD</button>
      </nav>
      <main>
        <div className={styles.puzzleImageContainer}>
          <img src={image} alt={location} />
        </div>
      </main>
    </div>
  );
};

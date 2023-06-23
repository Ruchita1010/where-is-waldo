import { Link } from 'react-router-dom';
import styles from '../styles/StartScreen.module.css';

export const Puzzle = ({ puzzle, setActivePuzzle }) => {
  const { image, location } = puzzle;

  return (
    <Link to="/game">
      <div className={styles.puzzle} onClick={() => setActivePuzzle(puzzle)}>
        <div className={styles.imageContainer}>
          <img src={image} alt={location} />
        </div>
        <p className={styles.locationName}>{location.toUpperCase()}</p>
      </div>
    </Link>
  );
};

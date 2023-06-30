import { Link } from 'react-router-dom';
import styles from '../styles/PuzzleCard.module.css';

export const PuzzleCard = ({ puzzle, setActivePuzzle }) => {
  const { image, location } = puzzle;

  return (
    <Link to={`/game/${puzzle.id}`}>
      <div
        className={styles.puzzleCard}
        onClick={() => setActivePuzzle(puzzle)}>
        <div className={styles.imageContainer}>
          <img src={image} alt={location} />
        </div>
        <p className={styles.locationName}>{location.toUpperCase()}</p>
      </div>
    </Link>
  );
};

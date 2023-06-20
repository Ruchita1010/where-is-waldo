import styles from '../styles/StartScreen.module.css';

export const Puzzle = ({ puzzle }) => {
  const { image, location } = puzzle;
  return (
    <div className={styles.puzzle}>
      <div className={styles.imageContainer}>
        <img src={image} alt={location} />
      </div>
      <p className={styles.locationName}>{location.toUpperCase()}</p>
    </div>
  );
};

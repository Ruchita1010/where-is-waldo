import styles from '../styles/Character.module.css';

export const Character = ({ image, name }) => {
  return (
    <div className={styles.characterImageContainer}>
      <img src={image} alt={name} />
    </div>
  );
};

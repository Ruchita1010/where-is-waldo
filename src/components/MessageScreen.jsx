import styles from '../styles/MessageScreen.module.css';

export const MessageScreen = ({ message }) => {
  return (
    <div className={styles.messageScreen}>
      <p>{message}</p>
    </div>
  );
};

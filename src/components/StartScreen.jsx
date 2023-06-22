import { Puzzle } from './Puzzle';
import { MessageScreen } from './MessageScreen';
import { useDataFetch } from '../hooks/useDataFetch';
import styles from '../styles/StartScreen.module.css';

export const StartScreen = () => {
  /* setting a default value of an empty array ([]) to ensure that puzzles is always an array, even if the data is still loading */
  const { data: puzzles = [], isLoading, error } = useDataFetch();

  if (isLoading) {
    return <MessageScreen message={'Loading...（︶^︶）'} />;
  }

  if (error) {
    return <MessageScreen message={'Some Error Occurred...（╯^╰）'} />;
  }

  return (
    <>
      <h1 className={styles.title}>WHERE'S WALDO?</h1>
      <main className={styles.content}>
        <p>Search Waldo and his friends in...</p>
        <div className={styles.puzzleContainer}>
          {puzzles.map((puzzle) => (
            <Puzzle key={puzzle.id} puzzle={puzzle} />
          ))}
        </div>
      </main>
    </>
  );
};

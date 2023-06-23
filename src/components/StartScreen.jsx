import { PuzzleCard } from './PuzzleCard';
import { MessageScreen } from './MessageScreen';
import { useDataFetch } from '../hooks/useDataFetch';
import styles from '../styles/StartScreen.module.css';

export const StartScreen = ({ setActivePuzzle }) => {
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
        <div className={styles.puzzleCards}>
          {puzzles.map((puzzle) => (
            <PuzzleCard
              key={puzzle.id}
              puzzle={puzzle}
              setActivePuzzle={setActivePuzzle}
            />
          ))}
        </div>
      </main>
    </>
  );
};

import { PuzzleCard } from './PuzzleCard';
import { MessageScreen } from './MessageScreen';
import { useDataFetch } from '../hooks/useDataFetch';
import { getAllPuzzles } from '../firebase/firebaseDataActions';
import styles from '../styles/StartScreen.module.css';

export const StartScreen = ({ setActivePuzzle }) => {
  const { data: puzzles, isLoading, error } = useDataFetch(getAllPuzzles);

  if (isLoading) {
    return <MessageScreen message={'Loading...（︶^︶）'} />;
  }

  if (error) {
    console.error(error);
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

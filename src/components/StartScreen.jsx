import { useEffect, useState } from 'react';
import { Puzzle } from './Puzzle';
import { retrieveStoredData } from '../firebase/firebaseDataActions';
import styles from '../styles/StartScreen.module.css';

export const StartScreen = () => {
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveStoredData();
        setPuzzles(data);
      } catch (error) {
        console.log(`Error fetching the data: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className={styles.startScreen}>
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

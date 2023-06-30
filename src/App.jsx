import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { Leaderboard } from './components/Leaderboard';
import styles from './styles/App.module.css';

const App = () => {
  /* Reading from the local storage directly to set the initial state to ensure that we're getting the most recent value from the local storage, regardless of any async state updates */
  const [activePuzzle, setActivePuzzle] = useState(() => {
    return JSON.parse(localStorage.getItem('activePuzzle')) || {};
  });

  useEffect(() => {
    localStorage.setItem('activePuzzle', JSON.stringify(activePuzzle));
  }, [activePuzzle]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={<StartScreen setActivePuzzle={setActivePuzzle} />}
        />
        <Route
          path="/game/:puzzleId"
          element={<GameScreen puzzle={activePuzzle} />}
        />
        <Route
          path="/leaderboard/:puzzleId"
          element={<Leaderboard puzzleId={activePuzzle.id} />}
        />
      </Routes>
    </div>
  );
};

export default App;

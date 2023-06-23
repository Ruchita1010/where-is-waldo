import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import styles from './styles/App.module.css';

const App = () => {
  const [activePuzzle, setActivePuzzle] = useState({});

  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={<StartScreen setActivePuzzle={setActivePuzzle} />}
        />
        <Route path="/game" element={<GameScreen puzzle={activePuzzle} />} />
      </Routes>
    </div>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import { StartScreen } from './components/StartScreen';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<StartScreen />} />
      </Routes>
    </div>
  );
};

export default App;

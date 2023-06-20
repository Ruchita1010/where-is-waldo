import { StartScreen } from './components/StartScreen';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>WHERE'S WALDO?</h1>
      <StartScreen />
    </div>
  );
};

export default App;

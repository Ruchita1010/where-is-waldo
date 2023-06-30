import { MessageScreen } from './MessageScreen';
import { useDataFetch } from '../hooks/useDataFetch';
import { getLeaderboardData } from '../firebase/firebaseDataActions';
import styles from '../styles/Leaderboard.module.css';

export const Leaderboard = ({ puzzleId }) => {
  const {
    data: leaderboard,
    isLoading,
    error,
  } = useDataFetch(getLeaderboardData, [puzzleId]);

  if (isLoading) {
    return <MessageScreen message={'Loading...（︶^︶）'} />;
  }

  if (error) {
    console.error(error);
    return <MessageScreen message={'Some Error Occurred...（╯^╰）'} />;
  }

  return (
    <div className={styles.leaderboard}>
      <nav>
        <button className="btn">HOME</button>
      </nav>
      <div className={styles.leaderboardContainer}>
        <div className={styles.leaderboardList}>
          {leaderboard.map((leaderboardEntry, index) => (
            <div
              key={leaderboardEntry.playerName}
              className={styles.leaderboardEntry}>
              <p>{index + 1}</p>
              <p>{leaderboardEntry.playerName}</p>
              <p>{leaderboardEntry.time}s</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

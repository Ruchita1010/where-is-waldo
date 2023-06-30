import {
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from '@firebase/firestore';
import { colRef, db } from '../firebase/firebase';

// retrieval
export const getAllPuzzles = async () => {
  const querySnapshot = await getDocs(colRef);
  const puzzles = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return puzzles;
};

export const getLeaderboardData = async (puzzleId) => {
  const puzzleDocRef = doc(db, 'puzzles', puzzleId);
  const puzzleDocSnapshot = await getDoc(puzzleDocRef);
  let leaderboard = await puzzleDocSnapshot.data().leaderboard;
  return leaderboard.sort((playerA, playerB) => playerA.time - playerB.time);
};

// updation
export const addToLeaderboard = async (playerEntry, puzzleId) => {
  try {
    const puzzleDocRef = doc(db, 'puzzles', puzzleId);
    await updateDoc(puzzleDocRef, {
      leaderboard: arrayUnion(playerEntry),
    });
  } catch (error) {
    throw error; // Rethrow the error to handle it at a higher level if needed
  }
};

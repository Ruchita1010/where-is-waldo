import { getDocs } from 'firebase/firestore';
import { colRef } from './firebase';

export const retrieveStoredData = async () => {
  try {
    const snapshot = await getDocs(colRef);
    let puzzles = [];
    snapshot.docs.forEach((doc) => {
      puzzles.push({ ...doc.data(), id: doc.id });
    });
    return puzzles;
  } catch (err) {
    console.log(`Error retrieving the data: ${err}`);
  }
};

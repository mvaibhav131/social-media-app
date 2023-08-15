import { query, collection, where, getDocs } from "firebase/firestore";
// @ts-expect-error TS(2307): Cannot find module 'lib/firebase' or its correspon... Remove this comment to see the full error message
import { db } from "lib/firebase";

export default async function isUsernameExists(username: any) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
}
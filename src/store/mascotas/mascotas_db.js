import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebase'

export async function getData() {
  const querySnapshot = await getDocs(collection(db, "mascotas"));
  const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return docs;
}

export async function getPetData(id) {
  const docRef = doc(db, "mascotas", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
}
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
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


export const updatePetData = async (petId, newData) => {
  const docRef = doc(db, 'mascotas', petId);
  await updateDoc(docRef, newData);
};
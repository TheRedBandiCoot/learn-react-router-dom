import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionsRef = collection(db, 'vans');
const usersCollectionsRef = collection(db, 'users');

export const getVans = async () => {
  try {
    const querySnapShot = await getDocs(vansCollectionsRef);
    const allVansData = querySnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return allVansData;
  } catch (error) {
    console.log(error);
  }
};

export const getVan = async (id) => {
  const docRef = doc(db, 'vans', id);
  const vanSnapShot = await getDoc(docRef);
  return {
    ...vanSnapShot.data(),
    id: vanSnapShot.id,
  };
};

export const getHostVans = async () => {
  try {
    const q = query(vansCollectionsRef, where('hostId', '==', '123'));
    const querySnapShot = await getDocs(q);
    const allVansData = querySnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return allVansData;
  } catch (error) {
    console.log(error);
  }
};

export async function loginUser(creds) {
  const { email, password } = creds;
  const auth = getAuth();
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data.user.email;
}

// export const getVans = async (id) => {
//   const url = id ? `/api/vans/${id}` : '/api/vans';
//   const res = await fetch(url);
//   const data = await res.json();
//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   return data.vans;
// };

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

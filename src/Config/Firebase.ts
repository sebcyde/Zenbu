import { initializeApp } from 'firebase/app';
// import DefaultImage from '../assets/PFP/girl2.png';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDtZ5A7C-gVR_sONLxXHkbYkZ5znZaF5Nk',
	authDomain: 'zenbu-1e99f.firebaseapp.com',
	projectId: 'zenbu-1e99f',
	storageBucket: 'zenbu-1e99f.appspot.com',
	messagingSenderId: '730840678421',
	appId: '1:730840678421:web:ecd665d1e41ead95f64e1c',
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Sign Up New Users
export const SignUpNewUser = async (
	auth: any,
	email: string,
	password: string,
	Username: string
) => {
	try {
		const UserCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = UserCred.user;
		console.log('Signed up as:', user);

		await setDoc(doc(db, `Users/${user.uid}`), {
			UserEmail: user.email,
			Username: Username,
			// DisplayPicture: DefaultImage,
			CreationDate: user.metadata.creationTime,
			UID: user.uid,
			Admin: false,
			LastSeen: Date.now(),
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Lists`), {
			Favourites: [],
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Recommendations`), {
			Recommendations: [],
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Friends`), {
			Following: [],
			Followers: [],
		});

		console.log('User Creation Successful:');
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`Error ${errorCode}:`, errorMessage);
	}
};

// Sign In Existing Users
export const SignInExistingUser = async (
	auth: any,
	email: string,
	password: string
) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Signed in as:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error ${errorCode}:`, errorMessage);
			alert('Invalid Credentials');
		});
};

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDEYxDsQk_BPRjMTdU3icPVRWJhhAY4RkU',
	authDomain: 'lc-landing-page.firebaseapp.com',
	databaseURL: 'https://lc-landing-page.firebaseio.com',
	projectId: 'lc-landing-page',
	storageBucket: 'lc-landing-page.appspot.com',
	messagingSenderId: '325096222884',
	appId: '1:325096222884:web:2c6377efd248416b6af631',
	measurementId: 'G-MC6JE1WB25',
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

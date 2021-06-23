import '../assets/styles/globals.css';
import '../assets/fontawesome/css/all.css';

import '../assets/styles/main.scss';

import initializeFirebase from '../utils/firebaseConfig.ts';


const firebaseapp = initializeFirebase();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp



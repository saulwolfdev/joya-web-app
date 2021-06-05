import '../styles/globals.css'
import "../scss/style.scss"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import initializeFirebase from '../utils/firebaseConfig.ts';
config.autoAddCss = false;

const firebaseapp = initializeFirebase();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

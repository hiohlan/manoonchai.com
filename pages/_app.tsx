// pages/_app.js
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

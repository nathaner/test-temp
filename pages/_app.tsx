import '../styles/globals.scss';
import Footer from '../layouts/components/Footer';
import NavBar from '../layouts/components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

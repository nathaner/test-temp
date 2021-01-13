import NavBar from './components/NavBar'
import React from 'react';
import Footer from './components/Footer';

export default function BaseLayout({ children }) {
  return <>
      <NavBar />
      <main>
      {children}
      </main>
      <Footer />
  </>;
}

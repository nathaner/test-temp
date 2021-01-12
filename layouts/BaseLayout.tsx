import AppBar from './components/AppBar'
import React from 'react';
import Footer from './components/Footer';

export default function BaseLayout({ children }) {
  return <>
      <AppBar />
      <main className="wrapper">
      {children}
      </main>
      <Footer />
  </>;
}

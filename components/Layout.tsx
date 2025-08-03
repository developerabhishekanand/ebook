
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoginModalProvider } from '../context/LoginModalContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <LoginModalProvider>
      <header><Navbar /></header>
        <main className='dark:bg-slate-900 dark:text-white'>{children}</main>
      <Footer />
      </LoginModalProvider>
    </div>
  );
};

export default Layout;

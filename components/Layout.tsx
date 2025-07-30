
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header><Navbar /></header>
        <main>{children}</main>
      <footer><Footer /></footer>
    </>
  );
};

export default Layout;

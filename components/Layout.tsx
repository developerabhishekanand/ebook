
import React from 'react';
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header><Navbar /></header>
        <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const NavbarFooterBody = ({children}) => {
  return (
    <>

        <Navbar />

            {children}

        <Footer />

    </>
  );
};

export default NavbarFooterBody
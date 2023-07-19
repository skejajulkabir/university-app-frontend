import React from 'react'
import {Footer , Navbar} from '../components'



const NavbarFooterBody = ({children}) => {
  return (
    <>

        <Navbar />

            {children}

        {/* <Footer /> */}

    </>
  );
};

export default NavbarFooterBody
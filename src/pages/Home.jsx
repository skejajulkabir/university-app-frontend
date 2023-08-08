import React from 'react'
import {  Feed, LeftSidebar, RightSidebar } from '../components'
import ProductShowcasePage from './ProductShowcasePage'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Home = () => {

  // const isUserVarified = useSelector((state)=> state.utils.isVarified);
  const globalUser = useSelector((state)=> state.globalUser.user);
  console.log(globalUser);


  if (localStorage.getItem("TOKEN")  && globalUser.name !== "" && globalUser.userName !== "" && globalUser.isVarified === true ) {
    return (
      <>
  
        <div className="flex flow-row w-full bg-slate-600 justify-between">
  
        <LeftSidebar />
  
        <Feed/>
  
        <RightSidebar />
  
        </div>
  
  
        {/* <div className="min-h-screen bg-slate-500">home</div> */}
  
      </>
    )
  } else {
    return (
      <>
        <div className="pt-24">
          <div className="min-h-screen flex flex-col items-center justify-center px-6">
            <div className="text-3xl font-serif bg-slate-300 p-6 py-10 rounded-md">
              To access the home page of the site you have to login and varify yourself first as a <span className='text-4xl text-red-500 px-4 bg-slate-200 rounded-md'>JUSTIAN</span>...
            </div>



            {
              localStorage.getItem('TOKEN') && 
              <Link to={'/varifyaccountpage'}>
                <div className="text-3xl font-serif bg-sky-200 mt-6  cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out p-6 py-10 rounded-md">
                  Click to varify your account...
                </div>
              </Link>
            }



            


          </div>


        </div>
        <ProductShowcasePage/>
      </>
    )
  }


}

export default Home
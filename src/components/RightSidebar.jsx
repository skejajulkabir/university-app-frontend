import React from 'react'
import People from './Rightsidebar components/People'
import FeaturedProductAd from './Rightsidebar components/FeaturedProductAd'

const RightSidebar = () => {
  return (
    <>
        <div className="hidden  xl:block   bg-slate-400 w-2/5 h-screen sticky top-0 right-0 overflow-x-hidden overflow-y-scroll scrollbar-hide">

            <FeaturedProductAd/>
            <People/>
             
        </div>   
    </>
  )
}

export default RightSidebar
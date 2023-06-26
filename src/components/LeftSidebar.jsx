import React from 'react'
import ProfileButton from './Leftsidebar componets/profileButton'
import SearchBar from './Leftsidebar componets/SearchBar'
import GoToSettings from './Leftsidebar componets/GoToSettings'
import NoticeBar from './Leftsidebar componets/NoticeBar'
import BloodDonation from './Leftsidebar componets/BloodDonation'
import PlatformDonors from './Leftsidebar componets/PlatformDonors'

const LeftSidebar = () => {
  return (
    <>
    <div className="hidden  lg:block   bg-slate-400 w-2/5 h-screen overflow-y-scroll scrollbar-hide sticky top-0 left-0 ">

    
      <SearchBar/>

      <ProfileButton />

      <NoticeBar/>

      <BloodDonation/>


      <GoToSettings/>


      <PlatformDonors/>

    </div>
        
    </>
  )
}

export default LeftSidebar
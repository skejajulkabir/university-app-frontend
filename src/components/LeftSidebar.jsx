import React from 'react'
import { Link } from 'react-router-dom'
import ProfileButton from './Leftsidebar componets/ProfileButton'
import SearchBar from './Leftsidebar componets/SearchBar'
import GoToSettings from './Leftsidebar componets/GoToSettings'
import NoticeBar from './Leftsidebar componets/NoticeBar'
import BloodDonation from './Leftsidebar componets/BloodDonation'
import PlatformDonors from './Leftsidebar componets/PlatformDonors'
import GroupTab from './Leftsidebar componets/GroupTab'

const LeftSidebar = () => {
  return (
    <>
    <div className="hidden  lg:block   bg-slate-400 w-2/5 h-screen overflow-y-scroll scrollbar-hide sticky top-0 left-0 ">


      <Link to='/search'>
        <SearchBar/>
      </Link>

        <ProfileButton />
      

      <Link to='/underdevelopment'>
        <NoticeBar/>
      </Link>


      <Link to='/underdevelopment'>
        <BloodDonation/>
      </Link>


      <Link to='/settings'>
        <GoToSettings/>
      </Link>

      <Link to='/underdevelopment' >
        <GroupTab/>
      </Link>


      <Link to='/platformdonors'>
        <PlatformDonors/>
      </Link>


    </div>
        
    </>
  )
}

export default LeftSidebar
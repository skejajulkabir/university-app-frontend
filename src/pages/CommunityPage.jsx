import React from 'react'
import BloodDonation from '../components/Leftsidebar componets/BloodDonation'
import { Link } from 'react-router-dom'

const CommunityPage = () => {
  return (
    <>
        <div className="pt-36 lg:pt-24 px-2">
            <div className="flex flex-col lg:flex-row lg:flex-wrap">
                <div className="bg-slate-400 w-full md:w-5/12 h-2/4 ">
                    <Link to="/underdevelopment">
                        <BloodDonation />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommunityPage
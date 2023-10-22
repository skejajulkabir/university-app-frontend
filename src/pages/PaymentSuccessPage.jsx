import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccessPage = () => {
  return (
    <>
        <div className="min-h-screen min-w-full bg-slate-400 flex items-center justify-center lg:p-36">
            <div className="bg-slate-200 p-10 lg:p-20 rounded-md">
                <div className="text-xl lg:text-3xl font-bold font-mono lg:text-center pb-10 text-green-700">
                    Payment successful! You'll be notified soon abaout the delivery...
                </div>
                <Link to={"/"} className="">
                    <div className="text-xl lg:text-2xl cursor-pointer font-semibold text-center p-5 lg:p-12 bg-slate-300 rounded-md">
                        Go to Homepage
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default PaymentSuccessPage
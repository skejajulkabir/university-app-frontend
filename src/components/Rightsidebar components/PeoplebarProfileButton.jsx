import React from 'react'

const PeoplebarProfileButton = () => {
  return (
    <>
        <div className="flex flex-row bg-slate-300 w-full mx-2 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-11">
            <img
              className="w-10 mr-3 rounded-full justify-center border-gray-400 border-2 p-1"
              src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/344871955_1005060590944787_6828652408108499129_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U53DZ4xlUxsAX_usWs7&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCYt_cDOv71Mkot5esk6hnk9pIVQDPcNQjAoXEcktVAgg&oe=64A064C2"
              alt="DP"
            />
          </div>

          <div className="ml-4 text-xl font-semibold truncate">
            Rashed Khan
          </div>
        </div>
    </>
  )
}

export default PeoplebarProfileButton
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [admissionSession, setAdmissionSession] = useState("SELECT");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/search/searchuser`, {
        name: searchQuery.name,
        userName: searchQuery.userName, // You can add more fields here based on your UI inputs
        bloodGroup: searchQuery.bloodGroup,
        department: searchQuery.department,
        roll: searchQuery.roll,
        admissionSession: admissionSession.admissionSession,
        from: searchQuery.from,
        currentLocation: searchQuery.currentLocation,
      });
      // console.log(response)
      if (response.status === 200) {
        const users = response.data;
        setSearchResults(users);
      } else {
        console.error("Error searching users.");
      }
    } catch (error) {
      console.error("Error searching users.", error);
    }
  };

  return (
    <>
      <div className="">
        <div className="pt-24 w-full bg-slate-200 min-h-screen ">
          <div className="w-full">
            <div className="text-4xl font-bold w-fit mx-auto">
              Search People
            </div>
          </div>
          <div className="pt-10 w-full lg:w-2/3 mx-auto ">
            <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="w-11 text-3xl ml-2">
                <BiSearch />
              </div>
              <div className="ml-1 w-5/6">
                <input
                  type="text"
                  placeholder="Moner madhuri mishiye khujun!"
                  className="w-full mr-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300 focus:scale-110 transition-transform duration-300 ease-in-out py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md placeholder:pl-1 text-slate-600 "
                  id="searchbar"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="">



            <div className="w-3/5 mx-auto pt-0 mt-2 p-2 bg-slate-400 rounded-md">
              <div className="p-3 text-white font-bold text-2xl">
                Add Session:
              </div>
              <select
                name="admissionSession"
                id="admissionSession"
                className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                value={admissionSession}
                onChange={(e) => setAdmissionSession(e.target.value)}
              >
                <option value="SELECT">
                  ADD ADMISSION SESSION TO GET BETTER RESULTS!
                </option>
                <option value="2007-2008">2007-2008</option>
                <option value="2008-2009">2008-2009</option>
                <option value="2009-2010">2009-2010</option>
                <option value="2010-2011">2010-2011</option>
                <option value="2011-2012">2011-2012</option>
                <option value="2012-2013">2012-2013</option>
                <option value="2013-2014">2013-2014</option>
                <option value="2014-2015">2014-2015</option>
                <option value="2015-2016">2015-2016</option>
                <option value="2016-2017">2016-2017</option>
                <option value="2017-2018">2017-2018</option>
                <option value="2018-2019">2018-2019</option>
                <option value="2019-2020">2019-2020</option>
                <option value="2020-2021">2020-2021</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
              </select>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>


            <div className="">
              <div className="">
                <div className="">
                  {/* Display search results here */}
                  <div>
                    {searchResults.map((user) => (
                      <div key={user._id}>{user.name}</div>
                      // Customize the display as per your requirements
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SearchPage;



// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 













// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


// import React from "react";
// import { BiSearch } from "react-icons/bi";

// const SearchPage = () => {
//   return (
//     <>
//       <div className="">
//         <div className="pt-24 w-full bg-slate-200 min-h-screen ">

//           <div className="w-full">
//             <div className="text-4xl font-bold w-fit mx-auto">
//               Search People
//             </div>
//           </div>

//           <div className="pt-10 w-full lg:w-2/3 mx-auto ">
//             <label htmlFor="searchbar" className="">
//               <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <div className="w-11 text-3xl ml-2">
//                   <BiSearch />
//                 </div>

//                 <div className="ml-1 w-5/6">
//                   <input
//                     type="text"
//                     placeholder="Moner madhuri mishiye khujun!"
//                     className="w-full mr-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300 focus:scale-110 transition-transform duration-300 ease-in-out py-2 focus:outline-none    focus:ring-sky-500   bg-slate-300 rounded-md placeholder:pl-1 text-slate-600 "
//                     id="searchbar"
//                     autoComplete="off"
//                   />
//                 </div>
//               </div>
//             </label>
//           </div>

//           <div className="">
//             <div className="w-3/5 mx-auto pt-0 mt-2 p-2 bg-slate-400 rounded-md">

//               <div className="p-3 text-white font-bold text-2xl">
//                 Add Session :
//               </div>

//               <select
//                     name="admissionSession"
//                     id="admissionSession"
//                     // onChange={(handleUserTypeChange)}
//                     // onChange={(handleChange)}
//                     // onChange={(e)=>{setUserType(e.target.value);}}
//                     className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
//                   >
//                     <option value="SELECT">ADD ADMISSION SESSION TO GET BETTER RESULTS!</option>
//                     <option value="2007-2008">2007-2008</option>
//                     <option value="2008-2009">2008-2009</option>
//                     <option value="2009-2010">2009-2010</option>
//                     <option value="2010-2011">2010-2011</option>
//                     <option value="2011-2012">2011-2012</option>
//                     <option value="2012-2013">2012-2013</option>
//                     <option value="2013-2014">2013-2014</option>
//                     <option value="2014-2015">2014-2015</option>
//                     <option value="2015-2016">2015-2016</option>
//                     <option value="2016-2017">2016-2017</option>
//                     <option value="2017-2018">2017-2018</option>
//                     <option value="2018-2019">2018-2019</option>
//                     <option value="2019-2020">2019-2020</option>
//                     <option value="2020-2021">2020-2021</option>
//                     <option value="2021-2022">2021-2022</option>
//                     <option value="2022-2023">2022-2023</option>
//                   </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchPage;

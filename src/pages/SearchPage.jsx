import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [showModifySearchToggler, setShowModifySearchToggler] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [admissionSession, setAdmissionSession] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");
  const [from, setFrom] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/search/searchuser`,
        {
          name: searchQuery,
          bloodGroup: bloodGroup,
          department: department,
          roll: roll,
          admissionSession: admissionSession,
          from: from,
          currentLocation: currentLocation,
        }
      );
      console.log(response)

      if (response.status === 200) {
        const users = response.data.users;
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
        <div className="pt-24 w-full bg-slate-600 min-h-screen ">
          <div className="w-full">
            <div className="text-4xl font-bold w-fit mx-auto">
              Search People
            </div>
          </div>
          <div className="pt-10 w-full lg:w-2/3 mx-auto ">
            <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md cursor-pointer  transition-transform duration-300 ease-in-out">
              <div className="w-11 text-3xl ml-2">
                <BiSearch />
              </div>
              <div className="ml-1 w-5/6">
                <input
                  type="text"
                  placeholder="Moner madhuri mishiye khujun!"
                  className="w-full mr-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  transition-transform duration-300 ease-in-out py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md placeholder:pl-1 text-slate-600 "
                  id="searchbar"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-3/5 mx-auto pt-2 mt-2 p-2 bg-slate-400 rounded-md">
              <div
                className="p-3 text-white font-bold text-2xl cursor-pointer bg-slate-500 rounded-md "
                onClick={() =>
                  setShowModifySearchToggler(!showModifySearchToggler)
                }
              >
                Click to modify your search :
              </div>

              <div className="">
                {showModifySearchToggler && (
                  <div className="">
                    <select
                      name="admissionSession"
                      id="admissionSession"
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 mt-2 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                      value={admissionSession}
                      onChange={(e) => setAdmissionSession(e.target.value)}
                    >
                      <option value="">
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
                    {/* Add more input fields for other parameters */}
                    <SearchPageInput
                      label="Blood Group"
                      value={bloodGroup}
                      onChange={setBloodGroup}
                    />
                    <SearchPageInput
                      label="Department"
                      value={department}
                      onChange={setDepartment}
                    />
                    <SearchPageInput
                      label="Roll"
                      value={roll}
                      onChange={setRoll}
                    />
                    <SearchPageInput
                      label="From"
                      value={from}
                      onChange={setFrom}
                    />
                    <SearchPageInput
                      label="Current Location"
                      value={currentLocation}
                      onChange={setCurrentLocation}
                    />
                  </div>
                )}
              </div>

              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-full"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="">
            <div className="w-full  ">
              <div className="bg-slate-400 lg:w-2/3 mx-auto p-3 mt-4 rounded-md ">
                {/* Display search results here */}
                <div>
                  {searchResults.length > 0 ? (
                    searchResults.map((user, index) => (
                      <Link
                        key={index}
                        to={`/profile/${user?._id}`}
                        className="flex flex-row bg-slate-300 w-full  p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                      >
                        <div className="w-12 h-12">
                          <img
                            className="w-full h-full object-cover mr-3 rounded-full  border-gray-400 border-2 p-1"
                            src={user?.avatar}
                            alt="DP"
                          />
                        </div>

                        <div className="">
                          <div className="flex flex-col">
                          <div className="ml-4 text-xl font-semibold truncate ">
                          {user?.matchedParts && user?.name ? (
                            <HighlightText
                              text={user.name}
                              matchedParts={user.matchedParts.name}
                            />
                          ) : (
                            user?.name
                          )}
                        </div>
                        <div className="ml-4 text-sm font-semibold truncate">
                          {user?.matchedParts && user?.userName ? (
                            <HighlightText
                              text={user.userName}
                              matchedParts={user.matchedParts.userName}
                            />
                          ) : (
                            user?.userName
                          )}
                        </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 py-4">
                      No results found.
                    </div>
                  )}
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

const HighlightText = ({ text, matchedParts }) => {
  if (!matchedParts) return <>{text}</>;

  const { startIndex, endIndex } = matchedParts;
  const prefix = text.slice(0, startIndex);
  const highlight = text.slice(startIndex, endIndex);
  const suffix = text.slice(endIndex);

  return (
    <>
      {prefix}
      <span className="bg-yellow-200">{highlight}</span>
      {suffix}
    </>
  );
};

const SearchPageInput = ({ label, value, onChange }) => {
  return (
    <div className="p-3">
      <label htmlFor={label} className="text-sm text-gray-600">
        {label}:
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label}`}
        className="block w-full px-4 py-2 mt-2 focus:outline-none placeholder-gray-400 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

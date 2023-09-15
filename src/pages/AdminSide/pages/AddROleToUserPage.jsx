import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import axios from "axios";
import { setLoading } from "../../../Redux/features/utilSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddROleToUserPage = () => {
  const [roleType, setRoleType] = useState("SELECT");
  const [formData, setFormData] = useState({
    userRole: "",
    usrID: "",
  });

  const dispatch = useDispatch();
  const globalUser = useSelector((state) => state.globalUser.user);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!globalUser.role.includes("MODERATOR")) {
      Navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = () => {
    // Handle form submission here
    dispatch(setLoading(true));
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/admin/addroletoauser`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        dispatch(setLoading(false));
        toast.success(res.data.message);
      })
      .catch((err) => {
        dispatch(setLoading(false));
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="pt-20 bg-slate-200 min-h-screen">
        <div className="flex flex-row">
          <LeftSideBar />
          <div className="w-full p-3 rounded-md">
            <div className="bg-slate-400 w-full min-h-screen rounded-md p-3">
              <div className="bg-slate-300 text-center p-3 text-xl rounded-md font-bold">
                Add Role To User
              </div>

              <div className="flex bg-slate-200 my-4 flex-row p-4 rounded-md">
                <label htmlFor="usrID">
                  <div className="text-xl font-bold">Add the users userID:</div>
                </label>
                <div className="w-9/12 pl-3">
                  <input
                    onChange={handleChange}
                    className="p-2 w-full"
                    type="text"
                    name="usrID"
                    id="usrID"
                  />
                </div>
              </div>

              {roleType === "SELECT" && (
                <div className="">
                  <div className="w-full bg-slate-400">
                    <select
                      className="bg-slate-200 p-4 w-full text-center"
                      name="userRole"
                      id="userRole"
                      onChange={handleChange}
                    >
                      <option value="">SELECT</option>
                      <option value="ARTIST">ARTIST</option>
                      <option value="POLITICAL">POLITICAL</option>
                      <option value="GUARDIAN">GUARDIAN</option>
                      <option value="LEADER">LEADER</option>
                    </select>
                  </div>
                </div>
              )}

              {roleType === "CUSTOM" && (
                <div className="flex bg-slate-200 my-4 flex-row p-4 rounded-md">
                  <label htmlFor="customRole">
                    <div className="text-xl font-bold">Add a custom Role.</div>
                  </label>
                  <div className="w-9/12 pl-3">
                    <input
                      className="p-2 w-full"
                      value={formData.userRole}
                      onChange={handleChange}
                      type="text"
                      name="userRole"
                      id="customRole"
                    />
                  </div>
                </div>
              )}

              {roleType === "CUSTOM" && (
                <div
                  className="py-3 cursor-pointer "
                  onClick={() => setRoleType("SELECT")}
                >
                  <div className="w-full text-white bg-slate-600 p-3 rounded-md text-center ">
                    Select a role.
                  </div>
                </div>
              )}

              {roleType === "SELECT" && (
                <div
                  className="py-3 cursor-pointer "
                  onClick={() => setRoleType("CUSTOM")}
                >
                  <div className="w-full text-white bg-slate-600 p-3 rounded-md text-center ">
                    Add a custome role.
                  </div>
                </div>
              )}

              <div
                className="w-full bg-blue-500 text-white p-3 text-center rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                Add ROLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddROleToUserPage;

import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SizeHandlingPage = () => {
  const [sizeData, setSizeData] = useState([]);


  const handleGetSize = ()=>{
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/client1/getavailablesizes`
      )
      .then((resp) => {
        setSizeData(resp.data.sizes);
      })
      .catch((error) => {
        console.error("Error fetching size data:", error);
      });
  };


  useEffect(() => {
    handleGetSize();
  }, []);

  const handleQuantityChange = (colorIndex, sizeIndex, event) => {
    const updatedSizeData = [...sizeData];
    updatedSizeData[colorIndex].data[sizeIndex].quantity = event.target.value;
    setSizeData(updatedSizeData);
  };

  const handleUpdate = (clr) => {
    // console.log(clr)
    try {
      axios
        .put(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/updatesize`,
          clr
        )
        .then((res) => {
          toast.success(res.data.message);
          handleGetSize();
        }).catch((err) => {
          toast.error("There was a problem updating the Size Data.")
        })
    } catch (error) {
      toast.error("There was a problem updating the Size Data.")
    }
  };




  const handleDelete = (Id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
  
    if (confirmation) {
      try {
        axios
          .delete(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/deletesize`, { data: { OId: Id } })
          .then((res) => {
            toast.success(res.data.message);
            handleGetSize();
          })
          .catch((error) => {
            toast.error("Some error occurred while deleting.");
          });
      } catch (error) {
        toast.error("Some error occurred while deleting.");
      }
    }
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
      <div className="pt-20"></div>
      <div className="flex flex-row">
        <LeftSideBar />

        <div className="min-h-screen w-screen">
          <div className="">
            <div className="text-5xl font-bold w-fit mx-auto">SIZES.</div>
          </div>

          <div className="mt-10">
            <table className="table-auto w-full border-2 border-slate-700">
              <thead className="border-2 border-slate-700">
                <tr className="border-2 border-slate-700">
                  <th className="w-44 border-2 border-slate-700">Color</th>
                  <th className="w-44 border-2 border-slate-700 ">Size</th>
                  <th className="border-2 border-slate-700">Quantity</th>
                  <th className="border-2 border-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {sizeData.map((color, colorIndex) => (
                  <tr key={color._id} className="border-2 border-slate-700">
                    <td className="border-2 border-slate-700 text-center font-bold">
                      {color.name}
                    </td>
                    <td className="border-2 border-slate-700">
                      {color.data.map((size, sizeIndex) => (
                        <div
                          key={size._id}
                          className="flex items-center justify-center py-3 border-2 border-slate-700"
                        >
                          <span className="mr-2 ">{size.size}</span>
                        </div>
                      ))}
                    </td>
                    <td>
                      {color.data.map((size, sizeIndex) => (
                        <div key={size._id} className="flex items-center">
                          <input
                            type="number"
                            className=" rounded  w-full p-3 border-2 border-slate-700"
                            value={size.quantity}
                            onChange={(event) =>
                              handleQuantityChange(colorIndex, sizeIndex, event)
                            }
                          />
                        </div>
                      ))}
                    </td>
                    <td className="flex flex-col items-center py-3 bg-slate-700 rounded-md p-3">
                      <div
                        onClick={() => handleUpdate(color)}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold cursor-pointer w-full text-center py-4 my-2 rounded-md"
                      >
                        UPDATE
                      </div>
                      <div
                        onClick={()=>handleDelete(color._id)}
                        className="bg-red-500 hover:bg-red-400 text-white font-bold cursor-pointer w-full text-center py-4 my-2 rounded-md"
                      >
                        DELETE
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full text-center p-3 bg-slate-400 mt-10 rounded-md">
            <Link to={"/admin/addsizevariant"}>
              <div className="">Add size variant.</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeHandlingPage;

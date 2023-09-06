import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddSizePage = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    data: [
      {
        id: Math.floor(Math.random() * 10000) + 1,
        size: "",
        quantity: 0,
      },
    ],
  });

  const addSize = () => {
    const newSize = {
      id: Math.floor(Math.random() * 10000) + 1,
      size: "",
      quantity: 0,
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      data: [...prevFormData.data, newSize],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateQuantity = (id, updatedObject) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      data: prevFormData.data.map((variant) =>
        variant.id === id ? { ...variant, ...updatedObject } : variant
      ),
    }));
  };

  const handleSubmit = () => {
    const confirmation = window.confirm("Proceed to add size?");

    if (confirmation) {
      axios
        .post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/addsizes`,
          formData
        )
        .then((res) => {
          toast.success("Sizee added successfully.");
          navigate("/admin/sizehandling")
        })
        .catch(() => {
          toast.error("Some error occurder.")
        });
    } else {
      return;
    }
  };

  return (
    <div>
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
      <div className="pt-20 bg-slate-400 min-h-screen flex flex-row">
          <LeftSideBar />

        <div className="bg-slate-600 rounded-md w-full">
          <div className="p-4 ">
            <div className="flex flex-row p-4 bg-slate-200 rounded-md">
              <div className="px-3 pr-5 text-xl font-bold">
                Size Variant NAME(Has to be in Capital letters):
              </div>
              <div className="w-full p-3">
                <input
                  onChange={handleChange}
                  className="w-full py-3 px-3"
                  type="text"
                  name="name"
                  value={formData.name}
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-4">
              {formData.data.map((variant, index) => (
                <SizeVariantInput
                  key={variant.id}
                  variant={variant}
                  index={index}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          </div>

          <div className="px-8 flex justify-center py-5">
            <button
              onClick={addSize}
              className="p-3 bg-blue-500 w-5/6 text-white text-xl font-bold rounded-md hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Add new size.
            </button>
          </div>

          <div className="px-8 flex justify-center py-5">
            <button
              onClick={handleSubmit}
              className="p-3 bg-red-500 w-5/6 text-white text-xl font-bold rounded-md hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSizePage;

const SizeVariantInput = ({ variant, index, updateQuantity }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateQuantity(variant.id, { [name]: value });
  };

  return (
    <div className="w-full bg-slate-300 p-2 rounded-md overflow-x-hidden mt-3">
      <div className="">
        <div className="p-3">
          <div className="flex flex-row p-3">
            <div className="text-xl font-bold">Size:(Capital)</div>
            <div className="w-full px-2">
              <input
                type="text"
                className="w-full py-2 rounded-md px-3"
                name="size"
                value={variant.size}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row p-3">
            <div className="text-xl font-bold">Quantity:</div>
            <div className="w-full px-2">
              <input
                type="number"
                className="w-full py-2 rounded-md px-3"
                name="quantity"
                value={variant.quantity}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

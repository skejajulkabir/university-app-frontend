import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderDetailsPage = () => {

  const [orderStatus, setOrderStatus] = useState('')

  const { state } = useLocation();

  if (
    !state ||
    !state.customer ||
    !state.cart ||
    !state.status ||
    !state.totalOrderValue ||
    !state._id
  ) {
    // Handle the case when data is not available or not in the expected format.
    return <div>No order details available.</div>;
  }

  const { customer, cart, status, totalOrderValue, _id } = state;




  useEffect(()=>{
    setOrderStatus(status);
  },[])


  const handleStatusChange = (e)=>{
    setOrderStatus(e.target.value)
  }



  const handleUpdate = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/updateOrder`,
        {
          oID : _id,
          updatedStatus : orderStatus
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('TOKEN')
          }
        }
      )
      .then((res)=> console.log(res))
      console.log("Order updated successfully!");
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };
  

  return (
    <>
      <div className="pt-20"></div>
      <div className="flex flex-row ">
        <LeftSideBar />

        <div className="w-full pt-3 rounded-md">
          <div className="p-8 bg-slate-300 min-h-screen  ">
            <div className=" bg-slate-200  flex justify-center flex-col items-center  p-4 rounded-lg">
              <h1 className="text-2xl font-bold mb-4">Order Details</h1>
              <h3 className="text-lg font-semibold">Order ID: {_id}</h3>
              <h3 className={`text-xl font-bold bg-red-400 px-3 rounded-lg py-4`}>
                Status: {status}
              </h3>
            </div>

            <div className=" bg-slate-400 mt-20 p-4 rounded-lg">
              <h2 className="text-xl font-bold p-2 text-slate-800">
                Customer Details
              </h2>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Full Name: {customer.fullName}
              </p>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Admission Session: {customer.admSession}
              </p>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Department: {customer.department}
              </p>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Email: {customer.email}
              </p>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Phone Number: {customer.phone}
              </p>
              <p className="mb-2 font-bold p-2 bg-slate-300">
                Address: {customer.address}
              </p>
            </div>

            <div className="mt-6 bg-slate-400  p-4 rounded-lg">
              <h2 className="text-xl font-bold underline p-2">Order Items</h2>
              <ul className="mt-2">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="mb-4 bg-slate-300 p-4 rounded-lg relative"
                  >
                    <p className="font-bold">Name: {item.name}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p>Price: {item.price}</p>
                    <p>Status: {item.status}</p>
                    <img
                      src={item.image}
                      alt=""
                      className="w-2h-28 h-28 absolute top-3 right-3 object-cover"
                    />

                    {/* <select name="status" id="" className="p-3 rounded-md">
                      <option value="change status">change status</option>
                      <option value="PENDING">PENDING</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                    </select> */}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-4xl font-bold mt-6 bg-slate-600 p-10 text-slate-100 flex justify-center items-center rounded-lg">
              Total Order Value: {totalOrderValue}
            </h2>

            <div className="flex justify-center items-center bg-slate-400 my-3 rounded-lg">
              <select
                name="status"
                id=""
                className="p-5 rounded-md m-4 text-lg font-bold"
                onChange={handleStatusChange}
                value={orderStatus}
              >
                <option value="PENDING">PENDING</option>
                <option value="ON_TRANSIT">ON_TRANSIT</option>
                <option value="DELIVERED">DELIVERED</option>
                <option value="CANCELLED">CANCEL</option>
              </select>
            </div>
            <div className="flex justify-center py-3 items-center bg-slate-400 my-3 rounded-lg">
              <button
                onClick={handleUpdate}
              className="p-5 rounded-md bg-blue-600 text-white hover:bg-blue-500">
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;

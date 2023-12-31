import { useState, useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/getorders`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("TOKEN"),
            },
          }
        );
        setOrdersData(response.data.orders);
      } catch (error) {
        alert("there was an error fetching the data...");
      }
    };
    fetchOrders();
  }, []);

  const navigateToOrderDetailsPage = (ordrID, orderData) => {
    navigate(`/admin/ordrdetailspage/${ordrID}`, { state: orderData });
  };

  return (
    <>
      <div className="pt-20"></div>
      <div className="flex flex-row ">
        <LeftSideBar />

        <div className="min-h-screen w-screen">
          <div className="">
            <div className="text-5xl font-bold w-fit mx-auto">ORDERS.</div>
          </div>

          <div className="mt-10">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">payment status</th>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Order posted</th>
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Admission Session</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone NUM</th>
                  <th className="px-4 py-2">Total Order Value</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order, index) => (
                  <tr key={index}>
                    <td
                      className={`border px-4 py-2 ${
                        order.status === "PENDING"
                          ? "bg-yellow-400"
                          : order.status === "ON_TRANSIT"
                          ? "bg-blue-500"
                          : order.status === "DELIVERED"
                          ? "bg-green-400"
                          : order.status === "CANCELLED"
                          ? "bg-red-500"
                          : "bg-gray-300" // Default background color for other cases
                      } `}
                    >
                      {order.status}
                    </td>

                    <td className={`border px-4 py-2 ${
                        order.isPaid === true
                          ? "bg-green-400"
                          : "bg-red-400"
                      } `}>
                      {order.isPaid === true ? "PAID" : "UNPAID"}
                    </td>

                    <td
                      className="border px-4 py-2 text-sky-500 cursor-pointer"
                      onClick={() => {
                        navigateToOrderDetailsPage(order._id, order);
                      }}
                    >
                      {order._id}
                    </td>
                    <td className="border px-4 py-2">{order.createdAt}</td>
                    <td className="border px-4 py-2">
                      {order.customer.fullName}
                    </td>
                    <td className="border px-4 py-2">
                      {order.customer.admSession}
                    </td>
                    <td className="border px-4 py-2">
                      {order.customer.department}
                    </td>
                    <td className="border px-4 py-2">{order.customer.email}</td>
                    <td className="border px-4 py-2">{order.customer.phone}</td>
                    <td className="border px-4 py-2">
                      {order.totalOrderValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;

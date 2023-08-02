import React from "react";
import LeftSideBar from "../components/LeftSideBar";

const Orders = () => {
  // Your orders data
  const ordersData = {
    orders: [
      {
        customer: {
          fullName: "Sk Ejajul kabir",
          id: "64a860179d28299f00c42a0c",
          admSession: "2021-2022",
          department: "phy",
          email: "522ajaj@gmail.com",
          address: "goborchaka, khulna",
          phone: 1401475571,
          voucher: "",
        },
        _id: "64caa16c8ce24dec8130d7c9",
        cart: [
          {
            name: "MINECRAFT | Dissolver Mens Premium T-shirt | RUSSIAN BLACK | WHITE",
            qty: 6,
            id: "64c026c5947882d2cba496c4",
            color: "BLACK",
            price: 480,
            image: "https://static-01.daraz.com.bd/p/b672a8087e1067f832e46bb2ee1c155d.jpg",
            size: "M",
            varUID: 8068,
          },
          // ... Add more cart items for this order ...
        ],
        status: "NEW_ORDER",
        totalOrderValue: 3840,
        __v: 0,
      },
      // ... Add more orders ...
    ],
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
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Admission Session</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Total Order Value</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.orders.map((order) => (
                  <tr key={order._id}>
                    <td className="border px-4 py-2">{order._id}</td>
                    <td className="border px-4 py-2">{order.customer.fullName}</td>
                    <td className="border px-4 py-2">{order.customer.admSession}</td>
                    <td className="border px-4 py-2">{order.customer.department}</td>
                    <td className="border px-4 py-2">{order.customer.email}</td>
                    <td className="border px-4 py-2">{order.totalOrderValue}</td>
                    <td className="border px-4 py-2">{order.status}</td>
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

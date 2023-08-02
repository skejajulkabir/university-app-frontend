import { useEffect, useState } from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveOneQtyFromCart,
  addOneQtyFromCart,
  clearCart,
} from "../Redux/features/cartslice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const globalUser = useSelector((state) => state.globalUser.user);
  const globalCart = useSelector((state) => state.globalCart.cart);

  const navigate = useNavigate();

  if (globalCart.length === 0) {
    navigate("/");
  }

  const [autofillInputDisabled, setAutofillInputDisabled] = useState(false);

  const [formData, setFormData] = useState({
    customer: {
      fullName: "",
      admSession: "",
      department: "",
      email: "",
      address: "",
      phone: "",
      voucher: "",
    },
    cart: globalCart,
  });

  console.log(formData);

  useEffect(() => {
    if (globalUser.userName) {
      setFormData((prev) => ({
        ...prev,
        customer: {
          ...prev.customer,
          fullName: globalUser.name,
          admSession: globalUser.info.admissionSession,
          department: globalUser.info.department,
          email: globalUser.regularEmail,
          phone: globalUser.contact.phoneNumber.Number,
        },
      }));
      setAutofillInputDisabled(true);
    }
  }, [globalUser]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      cart: globalCart,
    }));
  }, [globalCart]);

  const dispatch = useDispatch();

  const cartClear = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = () => {
    if (
      formData.customer.fullName === "" ||
      formData.customer.admSession === "" ||
      formData.customer.department === "" ||
      formData.customer.email === "" ||
      formData.customer.address === "" ||
      formData.customer.phone === ""
    ) {
      toast.error("Every Field has to be filled.");

      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/addorder`,
        formData
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Your order has been placed successfully!");
        }
      })
      .catch((err) => {
        toast.error("Some error occured.");
      });
  };

  const handleRemoveOneQtyFromCart = (id) => {
    // globalCart.findIndex(item);
    // console.log('this is a log from removeOneQtyFromCart');
    dispatch(RemoveOneQtyFromCart(id));
  };

  const handleAddOneQtyFromCart = (id) => {
    dispatch(addOneQtyFromCart(id));
    // console.log('this is a log from addOneQtyFromCart')
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [e.target.name]: e.target.value,
      },
    }));
  };
  // console.log(formData)

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
      <div className="mb-28 w-full">
        <div className="flex justify-center font-bold text-3xl pt-32 ">
          Welcome to the Checkout Page.
        </div>

        {/* <div className="m-10 ml-2 lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"> */}
        <div className="bg-gray-100 rounded w-2/3 p-8 mt-10 mx-auto">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Enter your personal info.
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.fullName}
              disabled={autofillInputDisabled}
              type="text"
              id="full-name"
              name="fullName"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* <div className="flex items-center">
            <span className="mr-3">Year</span>
            <div className="relative w-full">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 w-full pr-10">
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
                <option>Fourth</option>
                <option>Fifth(PHM)</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div> */}

          <div className="relative mb-4">
            <label
              htmlFor="department"
              className="leading-7 text-sm text-gray-600"
            >
              Admission Session
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.admSession}
              disabled={autofillInputDisabled}
              type="text"
              id="admSession"
              name="admSession"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Example : 2021-2022"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="department"
              className="leading-7 text-sm text-gray-600"
            >
              Department
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.department}
              disabled={autofillInputDisabled}
              type="text"
              id="department"
              name="department"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Example : PHYSICS"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.email}
              disabled={autofillInputDisabled}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address(Room number of hall or location...)
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.address}
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.phone}
              disabled={autofillInputDisabled}
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="voucher"
              className="leading-7 text-sm text-gray-600"
            >
              Enter voucher code if applicable.
            </label>
            <input
              onChange={handleChange}
              value={formData.customer.voucher}
              type="text"
              id="voucher"
              name="voucher"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="w-2/3 mt-10 mx-auto  right-0 bg-gray-100 p-10 flex items-center flex-col rounded-lg ">
          <div className="absolute top-8 right-8 text-2xl text-cyan-50 cursor-pointer ">
            <AiFillCloseCircle className="text-indigo-500 text-3xl" />
          </div>
          <h1 className="font-bold text-3xl text-center">CART</h1>
          <ol className="list-decimal w-full">
            {globalCart.length === 0 && (
              <div className="w-full py-80 p-11 bg-indigo-300 text-blue-950 flex justify-center align-middle">
                <span className="text-4xl font-bold">
                  No items in the cart.
                </span>
              </div>
            )}

            {globalCart.map((item) => {
              // console.log(item)
              if (Object.keys(item).length > 0) {
                return (
                  <li
                    className="py-3 bg-indigo-300 my-1 rounded-md"
                    key={Math.floor(Math.random() * 10000)}
                  >
                    <div className="item flex  ">
                      <div className="w-2/3 flex text-sm justify-center items-center p-2 overflow-hidden ml-4">
                        <div className="flex flex-col">
                          <div className="">
                            <span className="pr-1 -ml-2">NAME: </span>{" "}
                            <span>{item.name}</span>
                          </div>
                          <div className="font-bold">
                            <span className="pr-1 -ml-2">Variant: </span>{" "}
                            <span>{item.color}</span>
                          </div>
                          <div className="font-bold">
                            <span className="pr-1 -ml-2">size: </span>{" "}
                            <span>{item.size}</span>
                          </div>
                          <div className="font-semibold">
                            <span className="pr-1 -ml-2">Price: </span>{" "}
                            <span>{item.price * item.qty} TAKA</span>
                          </div>
                          <div className="">
                            <img
                              className="w-12 border-2 border-indigo-600  p-1"
                              src={item.image}
                              alt="prf img"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-1/3 h-fit my-auto flex justify-center items-center text-xl bg-indigo-200 mx-3 rounded-md ">
                        <span
                          onClick={() =>
                            handleRemoveOneQtyFromCart(item.varUID)
                          }
                        >
                          <AiFillMinusCircle className="px-1 text-4xl cursor-pointer text-indigo-600" />
                        </span>
                        <span className="px-1">{item.qty}</span>
                        <AiFillPlusCircle
                          onClick={() => handleAddOneQtyFromCart(item.varUID)}
                          className="px-1 text-4xl cursor-pointer text-indigo-600"
                        />
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ol>

          <div className="bg-slate-300 rounded-lg w-full flex justify-center items-center py-4">
            <div className="p-4 text-2xl font-bold">
              TOTAL :{" "}
              <span className="font-bold text-2xl">
                {globalCart.reduce(
                  (total, item) => total + item.price * item.qty,
                  0
                )}{" "}
                TAKA
              </span>
            </div>
          </div>

          {globalCart.length > 0 && (
            <div className="mt-6">
              <button
                onClick={cartClear}
                className="p-2 bg-indigo-500 rounded-md m-4 text-indigo-50 hover:bg-indigo-600"
              >
                CLEAR CART
              </button>
            </div>
          )}
        </div>

        <div className="w-full flex flex-col items-center p-12">
          <button
            className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handlePlaceOrder}
          >
            Place order
          </button>
          <p className="text-md text-gray-500 mt-3 font-bold">
            Our team may call you to confirm the order after you order.
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;

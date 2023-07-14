import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineSetting
} from "react-icons/ai";

import { MdAccountCircle } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BsShop } from "react-icons/bs";
import { CgNotes } from 'react-icons/cg'
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveOneQtyFromCart,
  addOneQtyFromCart,
  clearCart,
  settinglocalCartFromPreviouseBrowseToReux,
} from "../Redux/features/cartslice.js";

import { Link } from "react-router-dom";












const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalCart = useSelector((state) => state.globalCart.cart);

  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem("Cart")).length > 0) {
        const localCartFromPreviouseBrowse = localStorage.getItem("Cart");
        dispatch(
          settinglocalCartFromPreviouseBrowseToReux(
            JSON.parse(localCartFromPreviouseBrowse)
          )
        );
      } else {
        localStorage.setItem("Cart", JSON.stringify([]));
      }
    } catch {
      console.error(
        "there was an error setting the cart from the local storage"
      );
      localStorage.clear();
    }
  }, []);


  // authorization ueeffect

  useEffect(()=>{
    const fetchTshirtData = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/verify/initialvarify`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('TOKEN') //the token is a variable which holds the token
            }
          }
        )
        .then((res) => {
          if (res.data.error.message === "jwt expired") {
            localStorage.removeItem('TOKEN');
            window.location.reload();
            // navigate("/");
          }
          console.log(res)
        })
        .catch((err) => {
          console.log("there was an error fetching the data." + err);
        });
    };
    fetchTshirtData();
  },[])

  const cartClear = () => {
    dispatch(clearCart());
  };

  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
      // ref.current.classList.remove('hidden')
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      // ref.current.classList.add('hidden')
    }
  };

  const handleRemoveOneQtyFromCart = (id) => {
    dispatch(RemoveOneQtyFromCart(id));
  };

  const handleAddOneQtyFromCart = (id) => {
    dispatch(addOneQtyFromCart(id));
  };

  return (
    <div className="">
      {/* // <div className='w-full absolute sticky top-0 shadow-md flex flex-col justify-center lg:flex-row lg:justify-start justify-center items-center py-2 bg-white z-20 '> */}
      <div className="w-full py-3 bg-indigo-100 z-20 shadow-xl fixed flex flex-row ">
        <Link to="/" className="my-auto">
          <div className="logo my-auto">
            <img src="/univ-app-logo(long).psd.png" className=" w-40 md:w-56 ml-6 ml-2 my-auto hover:scale-125 transition-transform duration-300 ease-in-out" alt="logo" />
          </div>
        </Link>

        <div className="flex flex-row">
          <div className="nav hidden lg:block">
            <ul className="flex items-center justify-center px-10">
              <Link to="/shop">
                <li className="px-4 font-bold  rounded-lg py-3 flex flex-row hover:scale-125 transition-transform duration-300 ease-in-out">
                  SHOP -  <BsShop className="text-2xl mx-2"/>
                </li>
              </Link>

              <Link to="/underdevelopment">
                <li className="px-4 font-bold  rounded-lg py-3 flex flex-row hover:scale-125 transition-transform duration-300 ease-in-out bg-black text-white">
                  DONATE -  <FaMoneyBillAlt className="text-2xl mx-2 text-white"/>
                </li>
              </Link>

            </ul>
          </div>

          {/* <div className='flex justify-end flex-row absolute right-0 top-3'> */}
          <div className="flex justify-center flex-row h-full absolute top-1 right-2">

            <label htmlFor="searchbar">
              <div className="h-full  hover:scale-125 transition-transform duration-300 ease-in-out" >
                <div className="md:hidden h-full flex items-center justify-center my-auto cursor-pointer">
                  <BiSearch className="text-4xl lg:text-5xl mx-2 my-auto" />
                </div>
              </div>
            </label>

            <Link className="h-full  hover:scale-125 transition-transform duration-300 ease-in-out" to={"/login"}>
              <div className="h-full flex items-center justify-center my-auto cursor-pointer">
                <MdAccountCircle className="text-4xl lg:text-5xl mx-1 my-auto" />
              </div>
            </Link>
            <div
              className="cart mx-2 lg:mx-8 font-bold flex justify-center items-center  text-sm my-3 bg-indigo-300 rounded-full p-1 lg:p-3 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              ref={ref}
              onClick={toggleCart}
            >
              <span className="hidden lg:block">CART</span>
              {/* <AiOutlineShoppingCart className='text-5xl my-4 bg-indigo-300 rounded-full  p-3'/> */}
              <AiOutlineShoppingCart className="text-xl lg:text-2xl mx-1" />
            </div>
          </div>
        </div>







        <div
          ref={ref}
          className="w-full  min-h-screen overflow-y-scroll  sideCart absolute top-0 right-0 bg-indigo-200 p-10 transition-transform translate-x-full transform overflow-x-hidden overflow-scroll flex items-center flex-col rounded-lg xl:w-1/3 z-50"
        >
          <div
            className="absolute top-8 right-8 text-2xl text-cyan-50 cursor-pointer "
            onClick={toggleCart}
          >
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
              if (Object.keys(item).length > 0) {
                return (
                  <li className="py-3 bg-indigo-300 my-1" key={item.id}>
                    <div className="item flex  ">
                      <div className="w-2/3 flex justify-center items-center p-2 overflow-hidden ml-4">
                        {item.name}
                      </div>
                      <div className="w-1/3 flex justify-center items-center text-xl bg-indigo-200 mx-3 ">
                        <span
                          onClick={() => handleRemoveOneQtyFromCart(item.id)}
                        >
                          <AiFillMinusCircle className="px-1 text-4xl cursor-pointer text-indigo-600" />
                        </span>
                        <span className="px-1">{item.qty}</span>
                        <AiFillPlusCircle
                          onClick={() => handleAddOneQtyFromCart(item.id)}
                          className="px-1 text-4xl cursor-pointer text-indigo-600"
                        />
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ol>

          {globalCart.length > 0 && (
            <div>
              <Link to="/checkout" onClick={toggleCart}>
                <button className="p-2 bg-indigo-500 rounded-md m-4 text-indigo-50 hover:bg-indigo-600">
                  CHECKOUT
                </button>
              </Link>
              <button
                onClick={cartClear}
                className="p-2 bg-indigo-500 rounded-md m-4 text-indigo-50 hover:bg-indigo-600"
              >
                CLEAR CART
              </button>
            </div>
          )}
        </div>
      </div>

      <div className=" block pt-16 md:pt-20 lg:hidden pb-2 fixed w-full top-0 bg-white z-10">
        <ul className="flex items-center justify-evenly ">
          
          <Link to="/">
            <li className="px-4 font-bold hover:border-b-indigo-600 border-2  py-1 border-transparent border-r-0">
              <AiOutlineHome className="text-3xl mx-2"/>
            </li>
          </Link>

          <Link to="/shop">
            <li className="px-4 font-bold hover:border-b-indigo-600 border-2  py-1 border-transparent border-r-0">
              <BsShop className="text-2xl mx-2 font-bold"/>
            </li>
          </Link>





          {/* // ? community  */}

          <Link to="/shop">
            <li className="px-4 font-bold hover:border-b-indigo-600 border-2  py-1 border-transparent border-r-0">
              <HiUserGroup className="text-2xl mx-2 font-bold"/>
            </li>
          </Link>

          <Link to="/underdevelopment">
            <li className="px-4 font-bold hover:border-b-indigo-600 border-2  py-1 border-transparent border-r-0">
              <CgNotes className="text-2xl mx-2 font-bold"/>
            </li>
          </Link>

          <Link to="/underdevelopment">
            <li className="px-4 font-bold hover:border-b-indigo-600 border-2  py-1 border-transparent border-r-0">
              <AiOutlineSetting className="text-2xl mx-2 font-bold"/>
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

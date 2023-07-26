import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/features/cartslice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VarientCard } from "../components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SingleProductPage = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});
  const [selectedVariantData, setSelectedVariantData] = useState({});
  const [productImage, setProductImage] = useState("")
  const [sizeData, setSizeData ] = useState([])
  const [selectedSize, setSelectedSize] = useState("")

  // console.log(Object.keys(selectedVariantData).length);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/product/${params.id}`
        );
        setProductData({ ...response.data });
      } catch (error) {
        console.log("There was an error fetching the product data: " + error);
      }
    };

    fetchProductData();


    // const fetchSizeData = async () => {
    //   try {
    //     await axios.get(
    //       `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getavailablesizes`
    //     ).then((res)=>{
    //       setSizeData(res.data.sizes);
    //       console.log(res)
    //     })
    //   } catch (error) {
    //     console.log("There was an error fetching the size data: " + error);
    //   }
    // };

    // fetchSizeData();

  }, [params.id]);


  useEffect(() => {
    const fetchSizeData = async () => {
      try {
        await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getavailablesizes`
        ).then((res)=>{
          setSizeData(res.data.sizes);
          console.log(res)
        })
      } catch (error) {
        console.log("There was an error fetching the size data: " + error);
      }
    };

    fetchSizeData();

  }, [params.id]);
  
  const globalCart = useSelector((state) => state.globalCart.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (cartObject) => {
    if(selectedSize !== ""){
      dispatch(addToCart(cartObject));
    const newCart = [...globalCart, cartObject];
    const storageCart = localStorage.getItem("Cart");
    }else{
      toast.error("Please select a size!");
    }
    
  };

  // console.log(productData.product);
  const product = productData.product;



  useEffect(()=>{
    setProductImage(product?.img);
  },[product])


  // console.log(selectedVariantData)





  const handleSelectSize = (e)=>{
    setSelectedSize(e.target.value);
  }


  if (Object.keys(productData).length > 0) {
    return (
      <>
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
        
          <section className="text-gray-600 body-font overflow-hidden bg-slate-100 border-b-slate-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto  object-contain object-center rounded    lg:hover:scale-125 transition-transform duration-1000 ease-in-out"
                src={productImage}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font font-bold text-gray-500 tracking-widest">
                  BRAND NAME : {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>



                {/* <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div> */}

                <span className="text-xl font-bold"> Category: {product.category}</span>
                <br />
                <br />
                <p className="font-bold">Description:</p>

                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-4 text-xl font-bold">Color:</span>
                    {product.variants.map((c, index) => (
                      <span key={index} className="mr-1 text-xl font-bold bg-slate-500 p-1 rounded-md text-white">
                        {c.color}
                      </span>
                    ))}
                  </div>


                  {
                    Object.keys(selectedVariantData).length >= 1 &&
                      (
                        <div className="flex ml-6 items-center">
                          <span className="mr-3">Size</span>
                          <div className="relative">
                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" defaultValue={""} onClick={(e)=>handleSelectSize(e)}>
                              <option value={""}>select a size</option>
                              {
                                // sizeData.data.map((sz , index)=>{
                                //   if (sizeData.name == selectedVariantData.selectedVrntName) {
                                //     return <option key={index} value={sz.size}>{sz.size}</option>
                                //   }
                                // })
                                sizeData?.map((elm)=>{
                                  if(elm.name == selectedVariantData.selectedVrntName){
                                    return elm.data.map((sz , index)=>{
                                      if (sz.quantity > 2) {
                                        return <option key={index} value={sz.size}>{sz.size}</option>
                                      }else{
                                        return
                                      }
                                    })
                                  }else{
                                    return
                                  }
                                })
                                // console.log(sizeData)
                              }
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
                        </div>
                      )

                  }





                </div>
                <div className="flex flex-col">

                  




                  {
                    Object.keys(selectedVariantData).length >= 1 &&
                      (

                        <div className="bg-slate-400 rounded-md p-4">

                          <span className="title-font font-medium text-2xl text-gray-900 m-4">
                            Price: {selectedVariantData?.vrntPrice} <span className="text-2xl ">৳</span>
                          </span>

                          <div className="px-4 py-3">
                            <div className="text-xl">
                              selected Variant : <span>{selectedVariantData.selectedVrntName}</span>
                            </div>
                          </div>


                          <button
                            className="flex ml-12 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
                            onClick={() => {
                              handleAddToCart({
                                name: product?.title,
                                qty: 1,
                                id: product?._id,
                                color: selectedVariantData.selectedVrntName,
                                price: selectedVariantData.vrntPrice,
                                image: productImage,
                                size: selectedSize
                              });
                              console.log(selectedVariantData)
                            }}
                          >
                            Add to cart
                          </button>
                          
                        </div>
                      ) 
                  }


                  {
                    Object.keys(selectedVariantData).length < 1 &&
                      (
                        <div className="m-4">
                          <div className="text-2xl font-semibold text-black">
                            You have to select a variant first to place an order.
                          </div>
                        </div>
                      )

                  }






                </div>
              </div>
            </div>
          </div>
        </section>  


        <section className="">

          <h1 className="text-2xl m-3">Varients:</h1>
          <div className=" flex flex-col md:flex-row overflow-x-auto">
            {

              product.variants.map(( vrnt )=>{
                return (
                  <VarientCard key={vrnt._id} setSelectedSize={setSelectedSize} vrnt={vrnt} setProductImage={setProductImage} setSelectedVariantData={setSelectedVariantData} product={product}/>
                )
              })
              
            }
          </div>

        </section>









        




        
      </div>
    </>
    )
  }else{
    return (
      <>
        <div>Loading...</div>
      </>
    )
  }
};

export default SingleProductPage;

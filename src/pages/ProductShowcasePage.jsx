import React, { useEffect, useState } from "react";
import { TshirtCard } from "../components";
import axios from "axios";

const ProductShowcasePage = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1)
 

  
  const handleInfiniteScroll = ()=>{
    try {
      if((window.innerHeight + document.documentElement.scrollTop + 400)  + 1 >= document.documentElement.scrollHeight){
        setPage(prev=>prev + 1)
      }
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(()=>{
    window.addEventListener('scroll', handleInfiniteScroll)
  },[])






  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getproducts?page=${page}&limit=8`)
        .then((res) => {
          setProductData((prev)=> [...prev , ...res.data.paginatedProducts]);
          // console.log("fetched")
        })
        .catch((err) => {
          console.log("there was an error fetching the data.");
        });
    };
    fetchPosts();
  }, [page]);

  // useEffect(() => {
  //   const fetchTshirtData = async () => {
  //     await axios
  //       .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getproducts`)
  //       .then((res) => {
  //         setProductData(res.data.products);
  //       })
  //       .catch((err) => {
  //         console.log("there was an error fetching the data.");
  //       });
  //   };
  //   fetchTshirtData();
  // }, []);

  return (
    <div>
      <div className="w-full py-16 lg:hidden "></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-4 lg:pt-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {productData.map((item) => {
              return <TshirtCard key={item._id} item={item} />;
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcasePage;

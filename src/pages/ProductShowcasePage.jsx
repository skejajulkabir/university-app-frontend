import React, { useEffect, useState } from "react";
import { TshirtCard } from "../components";
import axios from "axios";

const ProductShowcasePage = () => {
  const [tshirtsData, setTshirtsData] = useState([]);

  useEffect(() => {
    const fetchTshirtData = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getproducts`)
        .then((res) => {
          setTshirtsData(res.data.products);
        })
        .catch((err) => {
          console.log("there was an error fetching the data.");
        });
    };
    fetchTshirtData();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-5 md:pt-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {tshirtsData.map((item) => {
              return <TshirtCard key={item._id} item={item} />;
            })}


            {/* <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/>
            <TshirtCard/> */}


            {/* <Link href={"/product/:id"} className="p-1 w-1/3 sm:p-4  md:w-1/4 lg:w-1/4">
              <div className="shadow-lg ">
                <div className="block p-2 relative h-fit  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block m-auto"
                    src="https://static-01.daraz.com.bd/p/2e77d934b384f171c7c8bad49af0e63e.jpg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-SHIRTS
                  </h3>
                  <p className="mt-1 bg-slate-50">SIZE: M,L,XL,XXL</p>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    WEAR THE CODE!
                  </h2>
                  <p className="mt-1">৳500</p>
                </div>
              </div>
            </Link> */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcasePage;

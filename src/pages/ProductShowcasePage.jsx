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
      <div className="w-full py-16 lg:hidden "></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-4 lg:pt-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {tshirtsData.map((item) => {
              return <TshirtCard key={item._id} item={item} />;
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcasePage;

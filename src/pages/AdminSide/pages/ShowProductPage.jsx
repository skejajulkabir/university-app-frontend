import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSideBar from "../components/LeftSideBar";

const ShowProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server when the component mounts
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/client1/getproducts"
      );
      setProducts(response.data.products);
      //   console.log(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <div className="pt-20"></div>
      <div className="flex flex-row">
        <LeftSideBar />

        <div className="min-h-screen w-screen">
          <div className="">
            <div className="text-5xl font-bold w-fit mx-auto">PRODUCTS.</div>
          </div>

          <div className="mt-10">
            <table className="table-auto w-full border">
              <thead className="border">
                <tr>
                  <th className="w-44">image</th>
                  <th className="w-44">Title</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr className="border" key={product._id}>
                    <td className="border ">
                      <img
                        src={product.img[0]}
                        className=" w-auto h-full object-cover  hover:scale-150 transition-transform duration-300 ease-in-out"
                        alt=""
                      />
                    </td>
                    <td className="border  ">{product.title}</td>
                    <td className="border text-center font-bold ">
                      {product.brand}
                    </td>
                    <td className="border text-center ">{product.category}</td>
                    <td className="border text-center font-bold">
                      {product.price} TAKA
                    </td>
                    <td className="border text-center ">{product.status}</td>
                    <td className="border text-center">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                      </button>
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

export default ShowProductPage;

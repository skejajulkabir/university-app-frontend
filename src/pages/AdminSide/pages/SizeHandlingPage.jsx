import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import axios from "axios";

const SizeHandlingPage = () => {
  const [sizeData, setSizeData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getavailablesizes`)
      .then((resp) => {
        setSizeData(resp.data.sizes);
      })
      .catch((error) => {
        console.error("Error fetching size data:", error);
      });
  }, []);

  const handleQuantityChange = (colorIndex, sizeIndex, event) => {
    const updatedSizeData = [...sizeData];
    updatedSizeData[colorIndex].data[sizeIndex].quantity = event.target.value;
    setSizeData(updatedSizeData);
  };

  return (
    <>
      <div className="pt-20"></div>
      <div className="flex flex-row">
        <LeftSideBar />

        <div className="min-h-screen w-screen">
          <div className="">
            <div className="text-5xl font-bold w-fit mx-auto">SIZES.</div>
          </div>

          <div className="mt-10">
            <table className="table-auto w-full border">
              <thead className="border">
                <tr>
                  <th className="w-44">Color</th>
                  <th className="w-44">Size</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((color, colorIndex) => (
                  <tr key={color._id}>
                    <td>{color.name}</td>
                    <td>
                      {color.data.map((size, sizeIndex) => (
                        <div key={size._id} className="flex items-center">
                          <span className="mr-2">{size.size}</span>
                          <input
                            type="number"
                            className="border rounded p-1 w-16"
                            value={size.quantity}
                            onChange={(event) =>
                              handleQuantityChange(colorIndex, sizeIndex, event)
                            }
                          />
                        </div>
                      ))}
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

export default SizeHandlingPage;

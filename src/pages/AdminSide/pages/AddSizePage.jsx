import React, { useEffect, useState } from "react";

const AddSizePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    data: [
      {
        size: "",
        quantity: 0,
      },
    ],
  });

  const addSize = () => {
    const newSize = {
      id: Math.floor(Math.random() * 10000) + 1,
      size: "",
      quantity: 0,
    };
    // setFormData([...formData , variants: [...formData.variants , newForm]]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      data: [...prevFormData.data, newSize],
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="pt-20 bg-slate-400 min-h-screen">
        <div className="p-4 ">
          <div className="flex flex-row p-4 bg-slate-200 rounded-md">
            <div className="px-3 pr-5 text-xl font-bold">
              Size Variant NAME(Has to be in Capital letters):
            </div>
            <div className="w-full p-3">
              <input onChange={handleChange} className="w-full py-3 px-3" type="text" name="" id="" />
            </div>
          </div>
        </div>


        {formData.data.map((elm, index) => (
                <div className="">
                    <div className="">
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            ))
        }

        <div className="px-8 flex justify-center">
          <button
            onClick={addSize}
          className="p-3 bg-blue-500 w-5/6 text-white text-xl font-bold rounded-md hover:scale-110 transition-transform duration-300 ease-in-out  ">
            Add new size.
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSizePage;





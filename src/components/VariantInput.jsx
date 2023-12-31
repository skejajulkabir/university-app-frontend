import React, { useState } from "react";

const VariantInput = ({ variant, index, updateVariant, deleteVariant }) => {
  const [variantObj, setVariantObj] = useState(variant);

  const handleObjChange = (e) => {
    setVariantObj({ ...variantObj, [e.target.name]: e.target.value });
    updateVariant(variant.id, variantObj);
  };

  return (
    <>
      <div className="w-full bg-slate-600 p-2 rounded-md overflow-x-hidden mt-3">
        <div className="">
          <div className="text-xl text-slate-100">Variant: {index + 1}</div>
        </div>
        <div className="w-full">
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Color(name) :
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="text"
              name="color"
              value={variantObj.color}
              onChange={handleObjChange}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Image(link) :
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="text"
              name="image"
              value={variantObj.image}
              onChange={handleObjChange}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Price :
            </div>
            <input
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="number"
              name="price"
              value={variantObj.price}
              onChange={handleObjChange}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Type(a) : (Edit this at the end!)
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="text"
              name="mislns"
              value={variantObj.mislns}
              onChange={handleObjChange}
              placeholder="This must be typed at last!"
            />
          </label>
        </div>

        <div
          className="my-3 bg-red-500 p-3 text-xl text-black font-bold rounded-md text-center cursor-pointer"
          onClick={() => deleteVariant(variant.id)}
        >
          DELETE VARIANT
        </div>
      </div>
    </>
  );
};

export default VariantInput;

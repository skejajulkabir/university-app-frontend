import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftSideBar from "./AdminSide/components/LeftSideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateProductPage = () => {
  const globalUser = useSelector((state) => state.globalUser.user);


  const params = useParams();

  const initialVariant = {
    id: Math.floor(Math.random() * 10000) + 1,
    color: "",
    image: "",
    price: "",
    mislns: "",
  };

  const initialState = {
    title: "",
    name: "",
    userName: "",
    brand: "Dissolver",
    slug: "",
    description: "",
    img: "",
    category: "",
    price: "",
    // done: "",
    variants: [initialVariant],
  };

  const [formData, setFormData] = useState(initialState);




  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/product/${
          params.prdId
        }`
      );
      setFormData(response.data.product);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product data.");
    }
  };



  useEffect(()=>{
    setFormData((prev)=>{
      return {...prev , name : globalUser.name , userName : globalUser.userName}
    })    
  },[globalUser.name])

  const addVarient = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      variants: [...prevFormData.variants, { ...initialVariant }],
    }));
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (formData.variants.length === 0) {
      toast.error("The product must have at least one variant.");
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/admin/updateproducts`,
        [formData],
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      );
      toast.success("Product updated successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update product.");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updateVariant = (id, updatedObject) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      variants: prevFormData.variants.map((variant) =>
        variant.id === id ? { ...variant, ...updatedObject } : variant
      ),
    }));
  };

  const deleteVariant = (id) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      variants: prevFormData.variants.filter((variant) => variant.id !== id),
    }));
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="pt-20"></div>
      <div className="flex flex-row ">
        <LeftSideBar />
        <div className="min-h-screen w-screen">
          <div className="">
            <div className="text-5xl font-bold w-fit mx-auto">
              Update product.
            </div>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="flex flex-col p-4">
            <InputComponent
                Title="Title :"
                type={"text"}
                name="title"
                value={formData.title}
                isDisabled={false}
                handleChange={handleChange}
              />

              <InputComponent
                Title="Author's Name :"
                type={"text"}
                name="authorName"
                value={formData.name}
                isDisabled={true}
                handleChange={handleChange}
              />



              <InputComponent
                Title="Authors Username :"
                type={"text"}
                name="authorUserName"
                value={formData.userName}
                isDisabled={true}
                handleChange={handleChange}
              />




              <InputComponent
                Title="Brand :"
                type={"text"}
                name="brand"
                value={formData.brand}
                isDisabled={true}
                handleChange={handleChange}
              />


              <InputComponent
                Title="Slug(Unique) :"
                type={"text"}
                name="slug"
                value={formData.slug}
                isDisabled={false}
                handleChange={handleChange}
              />

              <InputComponent
                Title="Image(Link) :"
                type="text"
                name="img"
                value={formData.img}
                isDisabled={false}
                handleChange={handleChange}
              />

              <InputComponent
                Title="Category :"
                type="text"
                name="category"
                value={formData.category}
                isDisabled={false}
                handleChange={handleChange}
              />


              <InputComponent
                Title="Price :"
                type="number"
                name="price"
                value={formData.price}
                isDisabled={false}
                handleChange={handleChange}
              />

              <div className=" m-3 ">
                <div className="text-xl font-bold">Add variens:</div>
              </div>

              <div className="w-full my-3" onClick={addVarient}>
                <div className="w-full bg-slate-600 rounded-md cursor-pointer">
                  <div className="w-fit mx-auto text-xl my-2 text-white p-3 rounded-md">
                    Add variant.
                  </div>
                </div>
              </div>

              {/* {
              formData.variants.map((elm , index)=>{
                return <VariantInput key={index} elm={elm}  />;
              })
            } */}

              {formData.variants.map((elm, index) => (
                <VariantInput
                  key={index}
                  index={index}
                  variant={elm}
                  updateVariant={updateVariant}
                  deleteVariant={deleteVariant}
                />
              ))}

              {/* <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Done?(Y/N) : (Edit this at the end!)
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="done"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div> */}

              <div className="m-3 w-full overflow-x-scroll">
                <div className="w-fit mx-auto text-xl font-bold">
                  <pre>
                    <code>{JSON.stringify(formData, null, 2)}</code>
                  </pre>
                </div>
              </div>

              <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto">
                  <button
                    className="w-11/12 p-4 mx-auto bg-slate-700 text-slate-50"
                    type="submit"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProductPage;
















const InputComponent = ({ Title , name , value , handleChange , type , isDisabled}) => {
  return (
    <div>
      <div className="w-full">
        <div className="w-full">
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
              {Title}
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2 "
              type={type}
              name={name}
              value={value}
              disabled={isDisabled}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
















const VariantInput = ({ variant, index, updateVariant, deleteVariant }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateVariant(variant.id, { [name]: value });
  };

  return (
    <>
      <div className="w-full bg-slate-600 p-2 rounded-md overflow-x-hidden mt-3">
        <div className="">
          <div className="text-xl text-slate-100">Variant: {index + 1}</div>
        </div>
        <div className="w-full">
          {/* Color Input */}
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Color(name) :
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="text"
              name="color"
              value={variant.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="w-full">
          {/* Image Input */}
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Image(link) :
            </div>
            <textarea
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="text"
              name="image"
              value={variant.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="w-full">
          {/* Price Input */}
          <label className="flex flex-row w-full justify-between rounded-md my-3">
            <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">
              Price :
            </div>
            <input
              className="bg-slate-200 w-4/6 p-2 mx-2"
              type="number"
              name="price"
              value={variant.price}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Delete Variant Button */}
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

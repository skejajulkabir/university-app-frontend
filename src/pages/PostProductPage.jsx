import { useState } from "react";
import VariantInput from "../components/VariantInput";
import axios from "axios";
import LeftSideBar from "./AdminSide/components/LeftSideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const PostProductPage = () => {

  const globalUser = useSelector((state)=> state.globalUser.user)



  const [formData, setFormData] = useState({
    title: "",
    authorName: globalUser.name,
    authorUserName: globalUser.userName,
    brand: "Dissolver",
    slug: "",
    description: "",
    img: "",
    category: "",
    price: "",
    done: "",
    reviews: [],
    variants: [],
  });

  const addvarient = () => {
    const newVariant = {
      id: Math.floor(Math.random() * 10000) + 1,
      color: "",
      image: "",
      price: "",
      mislns: "",
    };
    // setFormData([...formData , variants: [...formData.variants , newForm]]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      variants: [...prevFormData.variants, newVariant],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({ ...prevFormData, done: "done" }));

    if(formData.variants.length == 0){
      toast.error("the product has to have at least one variant.")
      return
    }

    try {
      await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/admin/addproducts`,
        [
          {
            title: formData.title,
            author: {
              name: formData.authorName,
              userName: formData.authorUserName,
            },
            brand: formData.brand,
            slug: formData.slug,
            description: formData.description,
            img: formData.img,
            category: formData.category,
            price: formData.price,
            reviews: formData.reviews,
            variants: formData.variants,
          },
        ],
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"), //the token is a variable which holds the token
          },
        }
      ).then((rsp)=>{
        console.log(rsp);
        toast.success("Product added SUccessfully.")
      })
      
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      toast.error("Try changing the slug.");
    }

    // console.log(formData)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateVariant = (id, updatedObject) => {
    Object.assign(
      formData.variants.find((elm) => elm.id == id),
      updatedObject
    );
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
              Post a new product.
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-4">
              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Title :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Author's Name :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      disabled
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Authors Username :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      disabled
                      name="authorUserName"
                      value={formData.authorUserName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Brand :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="brand"
                      value={formData.brand}
                      disabled
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Slug(Unique) :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="slug"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Description :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="description"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Image(Link) :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="img"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Category :
                    </div>
                    <textarea
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="text"
                      name="category"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <label className="flex flex-row w-full justify-between rounded-md my-3">
                    <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2 pl-3 flex items-center">
                      Price :
                    </div>
                    <input
                      className="bg-slate-200 w-4/6 p-2 mx-2 "
                      type="number"
                      name="price"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className=" m-3 ">
                <div className="text-xl font-bold">Add variens:</div>
              </div>

              <div className="w-full my-3" onClick={addvarient}>
                <div className="w-full bg-slate-300">
                  <div className="w-fit mx-auto text-xl my-2 ">
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
                />
              ))}

              <div className="w-full">
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
              </div>

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
                    Submit
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

export default PostProductPage;

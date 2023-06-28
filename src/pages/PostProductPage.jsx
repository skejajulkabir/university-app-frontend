import { useState } from "react";

const PostProductPage = () => {

  const [variantCount, setVariantCount] = useState(1)


  function generateUniqueArray(numberOfElements) {
    const uniqueArray = [];
  
    for (let i = 0; i < numberOfElements; i++) {
      let randomNumber;
      
      do {
        randomNumber = Math.floor(Math.random() * numberOfElements) + 1;
      } while (uniqueArray.includes(randomNumber));
  
      uniqueArray.push(randomNumber);
    }
  
    return uniqueArray;
  }
  
  const variantCountedArray=generateUniqueArray(variantCount);
  console.log(variantCountedArray);


  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    authorUserName: "",
    brand: "",
    slug: "",
    description: "",
    img: "",
    category: "",
    variants: { type: [
    {
      color: { type: String },
      image: { type: String },
      price: { type: Number },
    }
  ] 
},
  // size: { type: Array, required: true, default: [] },
  // color: { type: Array , default: []},
    price: "",
  // availableQty: { type: Number, required: true },
  
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or additional logic before sending the request

    // Send the form data via API or perform any desired action
    // For demonstration purposes, we'll just log the form data
    console.log(formData);
  };




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  return (
    <>
      <div className="min-h-screen w-screen">



        <div className="pt-24">
          <div className="text-5xl font-bold w-fit mx-auto">
            Post a new product.
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="flex flex-col p-4">

            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Title :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="title" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Author's Name :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="authorName" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Authors Username :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="authorUserName" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Brand :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="brand" value="Dissolver" disabled onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Slug(Unique) :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="slug" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Description :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="description" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Image(Link) :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="img" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Category :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="category" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>


            


            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Price :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="text" name="price" value={formData.name} onChange={handleChange} />
                </label>
              </div>
            </div>

            <div className=" m-3 ">
              <div className="text-xl">
                How many variants this product has?
              </div>
            </div>

            <div className="w-full">
              <div className="w-full"> 
                <label className="flex flex-row w-full justify-between rounded-md my-3">
                  <div className="text-2xl font-bold bg-slate-400 w-2/6 rounded-md p-2 mx-2">Variants Count :</div>
                  <input className="bg-slate-200 w-4/6 p-2 mx-2 " type="number" name="variantCount" value={variantCount} onChange={(e)=>{setVariantCount(e.target.value)}} />
                </label>
              </div>
            </div>


            <div className="w-11/12 mx-auto">
              <div className="w-full mx-auto">
                <button className="w-11/12 p-4 mx-auto bg-slate-700 text-slate-50" type="submit">Submit</button>
              </div>
            </div>


          </div>






        </form>
      </div>
    </>
  );
};

export default PostProductPage;

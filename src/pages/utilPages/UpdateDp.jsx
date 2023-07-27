import React, { useState } from 'react';
import axios from 'axios';
import { useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdateDP = () => {
  const [avatar, setAvatar] = useState('');




  const navigate =  useNavigate();
  const globalUser = useSelector((state) => state.globalUser.user);





  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/updateavatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('Avatar updated successfully:', res);

        if (res.status === 200) {
          navigate('/');
          alert('Avatar updated successfully!');
          window.location.reload();
        }
        // Do something if needed after successful upload
      })
      .catch((error) => {
        console.error('Error updating avatar:', error);
        // Handle error if needed
      });
  };

  return (
    <>
      <div className="pt-36 bg-slate-400">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="border-4 border-gray-400 w-32 h-32 rounded-full overflow-hidden">
              <img
                src={globalUser.avatar} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleUpload}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Avatar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDP;

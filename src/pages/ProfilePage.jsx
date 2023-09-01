import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfilePageComponents/ProfileHeader";
import InformationBox from "../components/ProfilePageComponents/InformationBox";
import Post from "../components/Post";
import VideoPost from "../components/VideoPost";
import OnlyTextPost from "../components/OnlyTextPost";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/features/utilSlice";



const ProfilePage = () => {

    const [postsData, setPostsData] = useState([])
    // const [page, setPage] = useState(1)




  const navigate = useNavigate();

  const dispatch = useDispatch();

  const globalUser = useSelector((state) => state.globalUser.user);

  useEffect(() => {
    if (!globalUser.userName || !globalUser.info || !globalUser.contact) {
      navigate("/");
    }
  }, [globalUser, navigate]);





//   const handleInfiniteScroll = () => {
//     try {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 700 + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   useEffect(() => {
//     // Add the event listener for scroll on mount
//     window.addEventListener("scroll", handleInfiniteScroll);

//     // Remove the event listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleInfiniteScroll);
//     };
//   }, []);







  const params = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserById = async () => {
      dispatch(setLoading(true));
      await axios
        .get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
          }/client1/getuserbyid/${params.id}`
        )
        .then((res) => {
          // console.log(res)
          setUserData(res.data.user);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log("there was an error fetching the data.");
          dispatch(setLoading(false));
        });
    };
    fetchUserById();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
          }/client1/getusersposts/${params.id}`
        )
        .then((res) => {
          setPostsData((prev) => [...prev, ...res.data.posts]);
        })
        .catch((err) => {
          console.log("there was an error fetching the data.", err);
        });
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="w-full pt-28 lg:pt-24">
        <div className="lg:w-4/6 mx-auto">
          <ProfileHeader userData={userData} />

          {/* <ButtonBar /> */}

          <div className="flex flex-col lg:flex-row w-full justify-evenly pt-4">
            <InformationBox user={userData} />

            <div className=" bg-slate-400 my-4 rounded-md w-full">
              <div className="">
                <div className="text-2xl m-3 rounded-md">Posts:</div>

                
                {
                    postsData?.map((post , index)=>{
                    if (post.typeOfThePost === "Video") {
                        return <VideoPost  key={index} pst={post} />
                    } else if(post.typeOfThePost === "Photo") {
                        return <Post key={index} pst={post} />
                    } else if(post.typeOfThePost === "onlyText") {
                        return <OnlyTextPost key={index} pst={post} />
                    }else{
                        return
                    }
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

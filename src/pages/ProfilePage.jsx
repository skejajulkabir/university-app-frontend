import React , {useEffect , useState}from "react";
import ButtonBar from "../components/ProfilePageComponents/ButtonBar";
import ProfileHeader from "../components/ProfilePageComponents/ProfileHeader";
import InformationBox from "../components/ProfilePageComponents/InformationBox";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {

    const params = useParams();
    const [userData, setUserData] = useState({})


    useEffect(() => {
    const fetchUserById = async () => {
        await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getuserbyid/${params.id}`)
        .then((res) => {
            // console.log(res)
            setUserData(res.data.user);
        })
        .catch((err) => {
            console.log("there was an error fetching the data.");
        });
    };
    fetchUserById();
    }, []);
    console.log(userData)



  return (
    <>
        <div className="w-full">
            <div className="w-4/6 mx-auto">

                <ProfileHeader userData={userData} />


                <ButtonBar />

                <div className="flex flex-row w-full justify-evenly pt-4">

                    
                    <InformationBox  user={userData} />

                    <div className="w-3/5 bg-slate-400 mx-2">
                        <div className="">
                            <div className="text-2xl m-3">
                                Posts:
                            </div>

                            <div className="mx-2">
                                {/* <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/> */}
                            </div>

                        </div>
                    </div>
                </div>



            </div>



        </div>
    </>
  );
};

export default ProfilePage;

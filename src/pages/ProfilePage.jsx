import React from "react";
import ButtonBar from "../components/ProfilePageComponents/ButtonBar";
import ProfileHeader from "../components/ProfilePageComponents/ProfileHeader";
import InformationBox from "../components/ProfilePageComponents/InformationBox";
import Post from "../components/Post";

const ProfilePage = () => {
  return (
    <>
        <div className="w-full">
            <div className="w-4/6 mx-auto">

                <ProfileHeader/>


                <ButtonBar/>

                <div className="flex flex-row w-full justify-evenly pt-4">

                    
                    <InformationBox/>

                    <div className="w-3/5 bg-slate-400 mx-2">
                        <div className="">
                            <div className="text-2xl m-3">
                                Posts:
                            </div>

                            <div className="mx-2">
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
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

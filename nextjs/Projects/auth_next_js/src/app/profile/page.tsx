"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
 
  const router = useRouter();

  useEffect(() => {
    return () => {
      getUserDetails();
    };
  }, []);

  const getUserDetails = async () => {
   
    const response = await axios.get("/api/users/myProfile");

    console.log(response.data.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout : ", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />

      <h1>Profile Page</h1>
      <hr />

      <h1></h1>
      <button className="bg-red-400 p-3 rounded-2xl m-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

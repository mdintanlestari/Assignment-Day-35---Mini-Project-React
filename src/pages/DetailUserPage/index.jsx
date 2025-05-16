import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/breadcrumb";

function DetailUserPage() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-400">
      <Navbar />
      <h1>Detail User</h1>
      <Breadcrumb />
      <div className="grid items-center justify-center my-14">
        <button
          onClick={handleBack}
          className="font-medium text-center text-white bg-black rounded-lg h-7 w-14 -ml-60 hover:bg-gray-600 hover:text-black"
        >
          Back
        </button>
        <img
          className="object-cover w-32 h-32 mb-5 rounded-full"
          src={data.avatar}
          alt={data.first_name}
        />
        <p>First Name: {data.first_name}</p>
        <p>Last Name : {data.last_name}</p>
        <p>Email : {data.email}</p>
      </div>
      <p className="-mt-12 text-justify mx-80">
        {data.first_name} is a dedicated front-end web developer with a strong
        passion for building responsive, intuitive, and user-centered digital
        experiences. Proficient in modern technologies such as React, Tailwind
        CSS, and TypeScript, she excels at translating complex design concepts
        into clean, maintainable code. Her work is driven by a keen eye for
        detail and a deep understanding of user interaction, ensuring that every
        application she builds performs efficiently across devices and
        platforms. She is also known for her collaborative spirit and commitment
        to team success—often mentoring junior developers, conducting code
        reviews, and improving development workflows. Outside of work, Janet
        actively engages with the tech community by participating in hackathons,
        attending meetups, and contributing to workshops. Her continuous drive
        to learn and share knowledge reflects her belief that impactful software
        is created through curiosity, collaboration, and constant improvement.
      </p>
    </div>
  );
}

export default DetailUserPage;

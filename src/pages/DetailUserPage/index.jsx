import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DetailUserPage() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headevders: {
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
    <div className="relative min-h-screen font-poppins">
      <div
        className="absolute inset-0 object-cover w-full min-h-screen bg-center bg-cover filter blur-md"
        style={{ backgroundImage: `url(${data.avatar})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 px-10 text-white">
        <Navbar />
        <button
          className="flex items-center justify-center w-24 gap-2 px-4 py-2 ml-20 font-medium text-center text-black transition duration-300 ease-in-out transform bg-blue-400 border-2 rounded-lg -mt-11 font-poppins hover:bg-stone-500 hover:scale-105"
          onClick={handleBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <h1 className="mt-10 mb-10 text-4xl font-bold text-center md:mb-0 md:mt-0 ">
          Detail User
        </h1>
        <div className="ml-20">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 py-10 mx-5 text-justify md:mx-20 md:grid-cols-2 ">
          <div className="grid items-center justify-center p-4 text-black bg-white border border-gray-200 shadow-md md:mb-0 mb-9 rounded-xl w-[360px] md:w-72 md:h-96">
            <img
              className="object-cover w-48 h-48 mb-4 rounded-lg shadow-sm md:w-full md:h-full "
              src={data.avatar}
              alt={data.first_name}
            />
            <div className="text-justify ">
              <p className="text-lg font-semibold">
                First Name: {data.first_name}
              </p>
              <p className="text-lg font-semibold">
                Last Name: {data.last_name}
              </p>
              <p className="text-sm text-gray-600">Email: {data.email}</p>
            </div>
          </div>

          <div>
            <p>
              {data.first_name} is a dedicated front-end web developer with a
              strong passion for building responsive, intuitive, and
              user-centered digital experiences. Proficient in modern
              technologies such as React, Tailwind CSS, and TypeScript, she
              excels at translating complex design concepts into clean,
              maintainable code. Her work is driven by a keen eye for detail and
              a deep understanding of user interaction, ensuring that every
              application she builds performs efficiently across devices and
              platforms. She is also known for her collaborative spirit and
              commitment to team success—often mentoring junior developers,
              conducting code reviews, and improving development workflows.
              Outside of work, Janet actively engages with the tech community by
              participating in hackathons, attending meetups, and contributing
              to workshops. Her continuous drive to learn and share knowledge
              reflects her belief that impactful software is created through
              curiosity, collaboration, and constant improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUserPage;

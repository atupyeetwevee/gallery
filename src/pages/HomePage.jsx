import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { LuDownload } from "react-icons/lu";

const HomePage = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPhotosData(json);
      })
      .catch((error) => {
        console.error("Failed to fetch photos:", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex">
      <div className="w-1/4 bg-purple-200">
        sidebar
      </div>

      <div className="container w-3/4 space-y-5 mx-auto p-4">
        <NavBar />
        {/* header */}
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">Photo Gallery</h2>
            <p className="text-sm text-gray-400">
              Creative Visual Photo Gallery.
            </p>
          </div>

          <div className="flex gap-2 items-center px-4 py-2 rounded-lg bg-blue-500 text-white">
            <LuDownload /> 
            <p>Upload photo</p>
          </div>
        </div>

        <div className="w-2/3 flex justify-evenly gap-5 border border-gray-300/40 bg-gray-100 rounded-lg text-gray-400 text-sm py-2 px-2">
          <p>Ports</p>
          <p>Expected Arrivals</p>
          <p>Arrivals & Departures</p>
          <p>Berth Calls</p>
          <p>Port Congestion</p>
        </div>
        {/* photo grid  */}
        <div className="grid grid-cols-3 gap-4 ">
          {photosData.map((item) => (
            <div key={item.id} 
              className="border border-gray-200/40 rounded-lg shadow-lg px-4 py-4 space-x-2 space-y-2 "
            >
              <p><span className="font-medium">Name:</span> {item.name}</p>
              <p><span className="font-medium">Username:</span> {item.username}</p>
              <p><span className="font-medium">Email:</span> {item.email}</p>
              <p><span className="font-medium">Street:</span> {item.address.street}</p>
              <p><span className="font-medium">Suite:</span> {item.address.suite}</p>
              <p><span className="font-medium">City:</span> {item.address.city}</p>
              <p><span className="font-medium">Zipcode:</span> {item.address.zipcode}</p>
              <p><span className="font-medium">Latitude:</span> {item.address.geo.lat}</p>
              <p><span className="font-medium">Longtitude:</span> {item.address.geo.lng}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

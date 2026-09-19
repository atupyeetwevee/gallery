import { useEffect, useState } from "react";

const HomePage = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
    <div className="min-h-screen">
      <div className="container mx-auto p-10">
        {/* header */}
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">Photo Gallery</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <button className="px-8 py-4 rounded-2xl bg-blue-500 text-white">
            Upload photo
          </button>
        </div>

        {/* photo grid  */}
        <div className="grid grid-cols-4 gap-4">
          {photosData.map((item) => (
            <div key={item.id}>
              <p>{item.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

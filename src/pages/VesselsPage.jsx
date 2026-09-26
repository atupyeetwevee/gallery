import { useEffect, useState } from "react";

function VesselsPage() {
  const [showVessels, setShowVessels] = useState([]);

    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setShowVessels(json);
      })
      .catch((error) => {
          console.error("Failed to fetch photos:", error);
        });
    },[]);
  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      {showVessels.map((item) => (
        <div key={item.id}
          className="border border-pink-300 shadow-lg shadow-pink-300 rounded-md py-4 px-2"
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default VesselsPage
import { useEffect, useState } from "react"

function MapsPage() {
  const [showMap, setShowMap] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setShowMap(json);
      })
        .catch((error) => {
          console.error("Failed to fetch photos:", error);
        });
    }, []);

  return (
    <div className="space-y-8">
      {showMap.map((item) => (
        <div key={item.id} 
          className="border border-gray-800/10 rounded-lg shadow-xl px-2 py-4 text-sm "
        >
          {item.body}
        </div>
      ))}
    </div>
  )
}

export default MapsPage
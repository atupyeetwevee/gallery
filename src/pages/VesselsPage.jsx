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
    <div>
      {showVessels.map((item) => ())}
    </div>
  )
}

export default VesselsPage
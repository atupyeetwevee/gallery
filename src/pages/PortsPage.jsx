import { useEffect, useState } from "react"

function PortsPage() {

  const [showPorts, setShowPorts] = useState([]);

    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setShowPorts(json);
      })
      .catch((error) => {
          console.error("Failed to fetch photos:", error);
        });
    },[]);

    return (
    <div>
      {showPorts.map((item) => (
        <div key={item.id}
          className="border border-amber-200/60 px-4 py-4"
        >
          {item.body}
        </div>
      ))}
    </div>
  )
}

export default PortsPage
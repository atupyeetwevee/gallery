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
    })
    return (
    <div>

    </div>
  )
}

export default PortsPage
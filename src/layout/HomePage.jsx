import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

function HomePage() {
  return (
    <div className="min-h-screen flex">
        <SideBar />

        <div className="container ml-[25%] min-h-screen w-3/4 space-y-5 mx-auto p-4">
          <NavBar />
          <Outlet />
        </div>
    </div>
  )
}

export default HomePage
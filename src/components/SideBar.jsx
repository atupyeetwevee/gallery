import { LuInfinity } from "react-icons/lu"
import { MdQuestionMark } from "react-icons/md"
import { NavLink } from "react-router-dom";

function SideBar() {

    const menu = [
        {
            title: "Maps",
            icon: LuInfinity,
            path: "/maps"
        },
        {
            title: "Vessels",
            icon: LuInfinity,
            path: "/vessels"
        },
        {
            title: "Ports",
            icon: LuInfinity,
            path: "/ports"
        },
        {
            title: "Lighthouse",
            icon: LuInfinity,
            path: "/lighthouse"
        },
        {
            title: "Companies",
            icon: LuInfinity,
            path: "/companies"
        },
        {
            title: "Station",
            icon: LuInfinity,
            path: "/station"
        },
        {
            title: "Marinetime News",
            icon: LuInfinity,
            path: "/marinetime"
        },
        {
            title: "Photo gallery",
            icon: LuInfinity,
            path: "/"
        },
        {
            title: "Plans & pricing",
            icon: LuInfinity,
            path: "/plans&pricing"
        }
    ]
  return (
    <div className="w-1/4 min-h-screen flex flex-col gap-15 px-4 bg-purple-100">
        <div className="flex gap-2 pt-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex justify-center items-center">
                <LuInfinity />
            </div>
            <h1 className="text-2xl font-medium">ART GALLERY</h1>
        </div>

        <div className="flex flex-col gap-1">
            {menu.map((item) => {
                const Icon = item.icon;
                    return(
                        <NavLink 
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 cursor-pointer">
                            <Icon size={20} />
                            <p>{item.title}</p>
                        </NavLink>
                    )  
                }
            )}
        </div>

        <div className="mt-auto mb-4">

            <div className="relative rounded-xl bg-amber-300 px-5 py-6 text-white text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <MdQuestionMark className="text-blue-500" size={25}/>
                </div>

                <h2>subscribe</h2>
                <p>Hello there!</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar
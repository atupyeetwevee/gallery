import { LuInfinity } from "react-icons/lu"
import { MdQuestionMark } from "react-icons/md"

function SideBar() {

    const menu = [
        {
            title: "Maps",
            icon: LuInfinity
        },
        {
            title: "Vessels",
            icon: LuInfinity
        },
        {
            title: "Ports",
            icon: LuInfinity
        },
        {
            title: "Lighthouse",
            icon: LuInfinity
        },
        {
            title: "Companies",
            icon: LuInfinity
        },
        {
            title: "Station",
            icon: LuInfinity
        },
        {
            title: "Marinetime News",
            icon: LuInfinity
        },
        {
            title: "Photo gallery",
            icon: LuInfinity
        },
        {
            title: "Plans & pricing",
            icon: LuInfinity
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
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 cursor-pointer">
                            <Icon size={20} />
                            <p>{item.title}</p>
                        </div>
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
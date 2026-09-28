import { useState } from "react"
import { BsChatText } from "react-icons/bs"
import { IoIosNotificationsOutline } from "react-icons/io"
import { LuChevronDown, LuSearch } from "react-icons/lu"


function NavBar() {
    const { search, setSearch } = useSearch();

  return (
    <div className="flex justify-between items-center px-4">
        <div className="w-1/3">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2"
                /><LuSearch />
        </div>

        <div className="flex items-center gap-5">
            <div className="border border-gray-300/40 rounded-lg text-xl px-2 py-2">
                <IoIosNotificationsOutline />
            </div>

            <div className="border border-gray-300/40 rounded-lg text-xl px-2 py-2">
                <BsChatText />
            </div>
            
            <div className="flex items-center gap-3 px-2 border-l border-gray-300/40">
                <img
                    src="atu2.png"
                    alt="Profile"
                    className="w-9 h-9 rounded-full object-cover"
                />

                <div className="">
                    <p className="text-sm text-gray-800 font-medium">Atupye Tweve</p>
                    <p className="text-xs text-gray-400">Front-end Developer</p>
                </div>
                <LuChevronDown className="text-xl text-gray-700" />
            </div>

        </div>
    </div>
  )
}

export default NavBar
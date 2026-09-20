import { BsChatText } from "react-icons/bs"
import { IoIosNotificationsOutline } from "react-icons/io"
import { LuSearch } from "react-icons/lu"

function NavBar() {
  return (
    <div className="flex justify-between items-center px-4">
        <div className="w-1/3">
            <div className="border border-black/80 rounded-lg py-2 px-2"><LuSearch /></div>
        </div>
        <div className="flex items-center gap-5">
            <div className="border border-white/80 rounded-md text-2xl px-1 py-1">
                <IoIosNotificationsOutline />
            </div>

            <div className="border border-white/80 rounded-md text-2xl px-1 py-1">
                <BsChatText />
            </div>
            
            <div className="flex gap-5">
                <div className="border border-black/80 rounded-full">profile</div>
                <div className="">
                    <h3 className="text-s">Atupye Tweve</h3>
                    <p className="text-xs">Front-end Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
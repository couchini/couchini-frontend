import { HiHome } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsFillFolderFill } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { HiUser } from "react-icons/hi2";
import Logo from '../../static/images/Couchini Logo.png';
import Image from "next/image";


export default function LeftSideBar({ current }) {
    return (
        <div className="bg-slate-900 md:h-screen sm:w-full grid grid-cols-1">
            <div className="flex md:grid grid-col-1 md:justify-normal justify-around 
            md:self-start md:py-4 border-b border-gray-800 col-span-1">
                <div className="md:grid flex flex-col grid-cols-6 my-2 items-center">
                    <div className={`col-span-1 w-2 h-6 rounded-r hidden md:block ${current === "home" && "bg-sky-500"}`}></div>
                    <div className={`col-span-1 flex justify-center p-1 md:bg-inherit rounded-lg ${current === "home" && "bg-gray-600"}`}>
                        <HiHome
                            className={current === "home" ? "text-sky-500" : "text-gray-300"}
                            size={"1.4rem"} />
                    </div>
                    <p className={`text-gray-300 font-semibold col-span-4 text-sm ${current === "home" && "text-sky-500"}`}>Home</p>
                </div>
                <div className="md:grid flex flex-col grid-cols-6 my-2 items-center">
                    <div className={`col-span-1 w-2 h-6 rounded-r hidden md:block ${current === "explore" && "bg-sky-500"}`}></div>
                    <div className={`col-span-1 flex justify-center p-1 md:bg-inherit rounded-lg 
                        ${current === "explore" && "bg-gray-600"}`}>
                        <GoSearch
                            className={current === "explore" ? "text-sky-500" : "text-gray-300"}
                            size={"1.4rem"} />
                    </div>
                    <p className={`text-gray-300 font-semibold col-span-4 text-sm ${current === "explore" && "text-sky-500"}`}>
                        Explore
                    </p>
                </div>
                <div className="md:grid flex flex-col grid-cols-6 my-2 items-center">
                    <div className={`col-span-1 w-2 h-6 rounded-r hidden md:block ${current === "library" && "bg-sky-500"}`}></div>
                    <div className={`col-span-1 flex justify-center p-1 md:bg-inherit rounded-lg ${current === "library" && "bg-gray-600"}`}>
                        <BsFillFolderFill
                            className={current === "library" ? "text-sky-500" : "text-gray-300"}
                            size={"1.4rem"} />
                    </div>
                    <p className={`text-gray-300 font-semibold col-span-4 text-sm ${current === "library" && "text-sky-500"}`}>Library</p>
                </div>
                <div className="md:grid flex flex-col grid-cols-6 my-2 items-center">
                    <div className={`col-span-1 w-2 h-6 rounded-r hidden md:block ${current === "podcast" && "bg-sky-500"}`}></div>
                    <div className={`col-span-1 flex justify-center p-1 md:bg-inherit rounded-lg ${current === "podcast" && "bg-gray-600"}`}>
                        <BiSolidMicrophoneAlt
                            className={current === "podcast" ? "text-sky-500" : "text-gray-300"}
                            size={"1.4rem"} />
                    </div>
                    <p className={`text-gray-300 font-semibold col-span-4 text-sm ${current === "podcast" && "text-sky-500"}`}>Podcast</p>
                </div>
                <div className="md:grid flex flex-col grid-cols-6 my-2 items-center">
                    <div className={`col-span-1 w-2 h-6 rounded-r hidden md:block ${current === "couchini" && "bg-sky-500"}`}></div>
                    <div className={`col-span-1 flex justify-center p-1 md:bg-inherit rounded-lg ${current === "couchini" && "bg-gray-600"}`}>
                        <HiUser
                            className={current === "couchini" ? "text-sky-500" : "text-gray-300"}
                            size={"1.4rem"} />
                    </div>
                    <p className={`text-gray-300 font-semibold col-span-4 text-sm ${current === "couchini" && "text-sky-500"}`}>My Couchini</p>
                </div>
            </div>
            <div className="my-12 col-span-1 self-end hidden lg:block">
                <div className="flex justify-center">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="w-16 rounded-lg"
                    />
                </div>
                <p className="text-sky-500 font-matura text-center text-lg">Couchini</p>
            </div>
        </div>
    )
};
"use client"
import { HiHome } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsFillFolderFill } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { HiUser } from "react-icons/hi2";
import Logo from '../../static/images/Couchini Logo.png';
import Image from "next/image";

import { useSelector } from "react-redux"
import { usePathname } from "next/navigation";

export default function LeftSideBar() {
    const show = useSelector((state) => state.left_side_bar.show);
    const pathName = usePathname();
    console.log(pathName)
    return (
        <>
            {
                show && <div className="bg-slate-900 md:h-screen sm:w-full grid grid-cols-1">
                    <div className="flex md:grid grid-col-1 md:justify-normal justify-around md:self-start md:py-4 border-b border-gray-800 col-span-1">
                        <div className="md:grid flex flex-col grid-cols-6 mb-2 md:my-2 md:self-start">
                            <div className="col-span-1 w-2 h-6 rounded-r"></div>
                            <div className="col-span-1 flex justify-center">
                                <HiHome className="text-gray-300" size={"1.2rem"} />
                            </div>
                            <p className="text-gray-300 font-semibold col-span-4 text-sm">Home</p>
                        </div>
                        <div className="md:grid flex flex-col grid-cols-6 mb-2 md:my-2">
                            <div className="col-span-1 w-2 h-6 rounded-r"></div>
                            <div className="col-span-1 flex justify-center">
                                <GoSearch className="text-gray-300 col-span-1" size={"1.2rem"} />
                            </div>
                            <p className="text-gray-300 font-semibold col-span-4 text-sm">Explore</p>
                        </div>
                        <div className="md:grid flex flex-col grid-cols-6 mb-2 md:my-2">
                            <div className="col-span-1 w-2 h-6 rounded-r"></div>
                            <div className="col-span-1 flex justify-center">
                                <BsFillFolderFill className="text-gray-300 col-span-1" size={"1.2rem"} />
                            </div>
                            <p className="text-gray-300 font-semibold col-span-4 text-sm">Library</p>
                        </div>
                        <div className="md:grid flex flex-col grid-cols-6 mb-2 md:my-2">
                            <div className="col-span-1 w-2 h-6 rounded-r"></div>
                            <div className="col-span-1 flex justify-center">
                                <BiSolidMicrophoneAlt className="text-gray-300 col-span-1" size={"1.2rem"} />
                            </div>
                            <p className="text-gray-300 font-semibold col-span-4 text-sm">Podcast</p>
                        </div>
                        <div className="md:grid flex flex-col grid-cols-6 mb-2 md:my-2">
                            <div className="col-span-1 w-2 h-6 rounded-r"></div>
                            <div className="col-span-1 flex justify-center">
                                <HiUser className="text-gray-300 col-span-1" size={"1.2rem"} />
                            </div>
                            <p className="text-gray-300 font-semibold col-span-4 text-sm">My Couchini</p>
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
            }
        </>
    )
};
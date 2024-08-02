"use client"
import Logo from "../../static/images/Couchini Logo.png";
import Image from "next/image";
import PrimiumIcon from "../../static/icons/Primium icon.svg"


export default function Navbar() {
    return (
        <div className="grid grid-cols-12 border-b-2 border-sky-500 p-3 z-50">
            <div className="col-span-3 flex justify-center items-center gap-4">
                <Image
                    src={Logo}
                    alt="logo"
                    className="size-12 border border-sky-400 rounded-xl"
                />
                <p className="font-matura text-2xl text-sky-500">Couchini</p>
            </div>
            <div className="col-span-6 flex justify-around items-center px-12">
                <p className="text-white text-lg font-semibold">Review</p>
                <p className="text-white text-lg font-semibold">Download</p>
                <p className="text-white text-lg font-semibold">Support</p>
                <p className="text-white text-lg font-semibold">About Us</p>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 col-span-1 bg-sky-800 rounded-xl font-semibold">
                    <Image
                        src={PrimiumIcon}
                        alt="primium icon"
                        className="w-6"
                    />
                    <p className="text-white">Permium</p>
                </button>
                <button className="text-white col-span-1 bg-sky-500 rounded-xl font-semibold">Get Started</button>
            </div>
        </div>
    )
};
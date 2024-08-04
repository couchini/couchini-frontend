"use client"
import Logo from "../../static/images/Couchini Logo.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import GoogleIcon from "../../static/icons/google.svg";


export default function Page() {
    return (
        <>
            <div className="bg-image"></div>
            <Fade duration={300}>
                <div className="flex justify-center">
                    <div className="md:w-96 w-80 py-12">
                        <div className="grid grid-cols-1 gap-6">
                            <Image
                                src={Logo}
                                alt="logo"
                                className="size-28 col-span-1 mx-auto"
                            />
                            <h1 className="col-span-1 text-sky-600 text-2xl font-bold mx-auto">Welcome</h1>
                            <div className="text-white col-span-1 mx-auto">
                                <p className="text-lg font-medium">Stream Million Songs</p>
                                <div className="flex items-center gap-2 text-xl">
                                    <p className="font-bold">Free on</p>
                                    <p className="font-matura text-sky-500">Couchini</p>
                                </div>
                            </div>
                            <div className="col-span-1 mx-auto">
                                <Link href={"/login/phone"}>
                                    <button className="text-white bg-sky-600 md:grid grid-cols-4 p-2 items-center 
                                    rounded-lg hover:bg-sky-700 transition w-full my-2">
                                        <IoCall className="text-white hidden md:block col-span-1 mx-2" size={"1.2rem"} />
                                        <p className="hidden md:block col-span-2 text-sm md:text-md font-semibold">Continue with Phone</p>
                                        <p className="text-sm font-semibold md:hidden">Sign up free</p>
                                    </button>
                                </Link>
                                <button className="bg-inherit text-white grid grid-cols-4 w-full border border-white rounded-lg 
                                p-2 my-2 hover:bg-gray-400 transition">
                                    <Image
                                        priority={false}
                                        src={GoogleIcon}
                                        alt="google icon"
                                        className="col-span-1 mx-2 size-5"
                                    />
                                    <p className="col-span-2 text-sm md:text-md font-semibold">Continue with Google</p>
                                </button>
                            </div>
                            <div className="text-sm flex items-center col-span-1 mx-auto gap-2">
                                <p className="text-sky-500">Already have an account?</p>
                                <Link className="text-white font-semibold" href={"/login/password"}>Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
};
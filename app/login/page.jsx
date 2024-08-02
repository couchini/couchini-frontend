"use client"
import { useState } from "react";
import Logo from "../../static/images/Couchini Logo.png";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { TbUserFilled } from "react-icons/tb";
import GoogleIcon from "../../static/icons/google.svg";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { changeLeftSideBar } from "../../src/reducers/leftSideBar";

export default function Page() {

    const [showPassword, setShowPassword] = useState(false);
    const dispacth = useDispatch();
    dispacth(changeLeftSideBar({ show: false }));

    return (
        <div className="bg-image text-white flex items-start justify-center p-12">
            <Fade duration={300}>
                <div className="w-96 h-full">
                    <div className="py-6 flex justify-center items-center">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="size-32"
                        />
                    </div>
                    <h1 className="text-center text-white text-2xl font-semibold">
                        Login To Your
                        <span className="font-matura mx-2 text-sky-600 text-3xl">Couchini</span>
                    </h1>
                    <form className="my-4 px-4 mx-6">
                        <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <TbUserFilled className="text-gray-400" size={"1.5rem"} />
                            </div>
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                className="outline-none bg-inherit text-sky-400 p-2 text-lg col-span-7"
                            />
                        </div>
                        <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <IoMdLock className="text-sky-600" size={"1.5rem"} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="outline-none bg-inherit text-sky-400 p-2 text-lg col-span-6"
                            />
                            <div className="col-span-1 flex items-center justify-center cursor-pointer">
                                {
                                    showPassword ?
                                        <IoEye className="text-sky-600" size={"1.5rem"} onClick={() => setShowPassword(false)} /> :
                                        <IoMdEyeOff className="text-sky-600" size={"1.5rem"} onClick={() => setShowPassword(true)} />
                                }
                            </div>
                        </div>
                        <div className="flex my-3 items-center gap-3 justify-center">
                            <input
                                type="checkbox"
                                className="text-lg"
                            />
                            <p className="text-lg text-white font-semibold ">Remember me</p>
                        </div>
                        <button className="text-white text-lg font-semibold bg-sky-600 w-full p-2 my-2 rounded-xl hover:bg-sky-700" type="submit">Log in</button>
                        <button className="text-white border border-whtie w-full my-2 p-2 rounded-xl text-lg font-semibold">Send a Verification Code</button>
                        <div className="grid grid-cols-4 items-center my-3">
                            <div className="col-span-1 h-0.5 bg-gray-400 w-full"></div>
                            <p className="text-white col-span-2 text-center font-semibold">or continue with</p>
                            <div className="col-span-1 h-0.5 bg-gray-400 w-full"></div>
                        </div>
                        <div className="flex items-center justify-center my-3" >
                            <div className="py-2 border border-white rounded-xl px-6">
                                <Image
                                    src={GoogleIcon}
                                    alt="google icon"
                                    className="size-6"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-white">Already have an account?</p>
                            <Link className="text-sky-500 font-semibold" href={"/sign-up"}>Sign Up</Link>
                        </div>
                        <div className="text-center my-3">
                            <Link className="text-white font-semibold" href={"/password/reset"}>Reset Password</Link>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    )
};
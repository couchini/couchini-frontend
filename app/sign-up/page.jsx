"use client"
import Logo from "../../static/images/Couchini Logo.png";
import Image from "next/image";
import { TbUserFilled } from "react-icons/tb";
import MessageIcon from "../../static/icons/message.svg";
import CalenderIcon from "../../static/icons/Calendar.svg";
import { IoMdLock } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io"; 
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'
import PhoneInput from 'react-phone-number-input';
import { Fade } from "react-awesome-reveal";



export default function Page() {

    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState();

    return (
        <div className="bg-image">
            <Fade duration={300}>
                <div className="bg-slate-800 w-96 h-full py-12">
                    <div className="py-6 flex justify-center items-center">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="w-24"
                        />
                    </div>
                    <h1 className="text-center text-white text-2xl font-semibold">
                        Create Your
                        <span className="font-matura mx-2 text-sky-600 text-3xl">Couchini</span>
                    </h1>
                    <form className="my-4 px-4 mx-6">
                        <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <TbUserFilled className="text-sky-600" size={"1.5rem"} />
                            </div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="outline-none bg-inherit text-sky-400 p-1 text-lg col-span-7"
                            />
                        </div>
                        <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <Image
                                    src={MessageIcon}
                                    alt="message-icon"
                                    className="size-6"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="outline-none bg-inherit text-sky-400 p-1 text-lg col-span-7"
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
                                className="outline-none bg-inherit text-sky-400 p-1 text-lg col-span-6"
                            />
                            <div className="col-span-1 flex items-center justify-center cursor-pointer">
                                {
                                    showPassword ?
                                        <IoEye className="text-sky-600" size={"1.5rem"} onClick={() => setShowPassword(false)} /> :
                                        <IoMdEyeOff className="text-sky-600" size={"1.5rem"} onClick={() => setShowPassword(true)} />
                                }
                            </div>
                        </div>
                        <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <Image
                                    src={CalenderIcon}
                                    alt="calender-icon"
                                    className="size-6"
                                />
                            </div>
                            <input
                                type="date"
                                placeholder="Email"
                                className="outline-none bg-inherit text-sky-400 p-1 text-lg col-span-7"
                            />
                        </div>
                        <div className="my-4 bg-input  focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <PhoneInput
                                className="outline-none bg-input text-sky-400 p-2 text-lg col-span-7"
                                value={phone}
                                placeholder="Enter phone number"
                                flags={flags}
                                onChange={setPhone}
                            />
                        </div>
                        <div className="flex items-center justify-around gap-6">
                            <div className="flex items-center gap-1">
                                <input type="radio" name="sex" className="text-sky-400 size-6" value={"dsd"} />
                                <p className="text-white text-sm font-semibold">Male</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <input type="radio" name="sex" className="text-sky-400 size-6" value={"dsd"} />
                                <p className="text-white text-sm font-semibold">Female</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <input type="radio" name="sex" className="text-sky-400 size-6" value={"dsd"} />
                                <p className="text-white text-sm font-semibold">Non Binary</p>
                            </div>
                        </div>
                        <button className="text-white text-lg font-semibold bg-sky-600 w-full p-2 my-6 rounded-xl hover:bg-sky-700" type="submit">Sign Up</button>
                        <div className="text-white flex gap-2 items-center justify-center text-sm font-semibold">
                            <p>Already have an account?</p>
                            <Link href={"/login"} className="text-sky-500">Sign In</Link>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    )
};
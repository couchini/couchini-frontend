"use client"
import Logo from "../../static/images/Couchini Logo.png";
import Image from "next/image";
import { TbUserFilled } from "react-icons/tb";
import MessageIcon from "../../static/icons/message.svg";
import CalenderIcon from "../../static/icons/Calendar.svg";
import { IoMdLock } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'
import PhoneInput from 'react-phone-number-input';
import { Fade } from "react-awesome-reveal";
import API, { clearToken } from "../../src/api";
import Loading from "../components/loading";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { changeUser } from "../../src/reducers/user";
import { toast } from "react-toastify";



export default function Page() {

    // const [showPassword, setShowPassword] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [phone, setPhone] = useState();
    const [data, setData] = useState({});
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => setShowLoading(false), 400);
    }, []);

    const dateChangeHandeler = (e) => {
        setData({
            ...data,
            day: e.target.value.slice(8, 10),
            mounth: e.target.value.slice(5, 7),
            year: e.target.value.slice(0, 4)
        })
    }

    const submitHandeler = async (e) => {
        clearToken();
        e.preventDefault();
        setShowLoading(true);
        await API.post("/auth/register/", { ...data, phone_number: phone.slice(3) }).then((response) => {
            dispatch(changeUser({ phone: phone }))
            router.push("/login/otp")
        }).catch((error) => {
            error.response && error.response.data && toast.error(error.response.data.message);
        }).finally(() => setTimeout(() => setShowLoading(false), 400));
    };

    return (
        <>
            <div className="bg-image"></div>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <Fade duration={300}>
                    <div className="bg-slate-800 w-96 h-screen py-6">
                        <div className="flex justify-center items-center">
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
                        <form
                            method="post"
                            className="my-4 px-4 mx-6"
                            onSubmit={submitHandeler}>
                            <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                            w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                                <div className="col-span-1 flex items-center justify-center">
                                    <TbUserFilled
                                        className="text-sky-600"
                                        size={"1.5rem"} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                    className="outline-none bg-inherit text-sky-400 p-1 text-md col-span-7"
                                />
                            </div>
                            {/* <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
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
                                required
                                onChange={(e) => setData({ ...data, })}
                                className="outline-none bg-inherit text-sky-400 p-1 text-md col-span-7"
                            />
                        </div> */}
                            {/* <div className="my-4 bg-input focus-within:bg-sky-800 focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                            <div className="col-span-1 flex items-center justify-center">
                                <IoMdLock 
                                className="text-sky-600" 
                                size={"1.5rem"} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                                className="outline-none bg-inherit text-sky-400 p-1 text-md col-span-6"
                            />
                            <div className="col-span-1 flex items-center justify-center cursor-pointer">
                                {
                                    showPassword ?
                                        <IoEye 
                                        className="text-sky-600" 
                                        size={"1.5rem"} 
                                        onClick={() => setShowPassword(false)} /> :
                                        <IoMdEyeOff 
                                        className="text-sky-600" 
                                        size={"1.5rem"} 
                                        onClick={() => setShowPassword(true)} />
                                }
                            </div>
                        </div> */}
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
                                    onChange={dateChangeHandeler}
                                    required
                                    className="outline-none bg-inherit text-sky-400 p-1 text-md col-span-7"
                                />
                            </div>
                            <div className="my-4 bg-input  focus-within:border border-sky-400
                        w-full grid grid-cols-8 justify-center items-center p-1 rounded-xl transition">
                                <PhoneInput
                                    className="outline-none bg-input text-sky-400 p-2 text-md col-span-7"
                                    value={phone}
                                    placeholder="Enter phone number"
                                    flags={flags}
                                    required
                                    id="phone-input"
                                    onChange={setPhone}
                                />
                            </div>
                            <div className="flex items-center justify-around gap-6">
                                <div className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="gender"
                                        required
                                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                                        className="text-sky-400 size-6"
                                        value={"MR"} />
                                    <p className="text-white text-sm">Male</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="text-sky-400 size-6"
                                        required
                                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                                        value={"MS"} />
                                    <p className="text-white text-sm">Female</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="gender"
                                        required
                                        className="text-sky-400 size-6"
                                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                                        value={"PNS"} />
                                    <p className="text-white text-sm">Non Binary</p>
                                </div>
                            </div>
                            <button
                                className="text-white text-lg font-semibold bg-sky-600 w-full p-2 my-6 rounded-xl hover:bg-sky-700"
                                type="submit">Sign Up</button>
                            <div className="text-white flex gap-2 items-center justify-center text-sm font-semibold">
                                <p>Already have an account?</p>
                                <Link
                                    href={"/login"}
                                    className="text-sky-500">Sign In</Link>
                            </div>
                        </form>
                    </div>
                </Fade>
            }
        </>
    )
};
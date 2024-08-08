"use client"
import API from "../../../../../src/api";
import { HiPlay } from "react-icons/hi2";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import ForwardIcon from "../../../../../static/icons/forwardIcon.svg";
import BackwardIcon from "../../../../../static/icons/backwardIcon.svg";
import VolumeUp from "../../../../../static/icons/Volume Up.svg";
import VolumeDown from "../../../../../static/icons/Volume Down.svg";
import Image from "next/image";

export default function Info({ playlist }) {
    console.log(playlist)
    return (
        <div className="relative w-full h-screen md:h-96">
            <div className="black-screen z-30"></div>
            <img
                src={API.defaults.baseURL + playlist.cover}
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 z-40 select-none">
                <div className="grid grid-cols-1 md:grid-cols-2 my-12">
                    <div className="col-span-1">
                        <div className="flex items-center justify-center">
                            <div>
                                <img
                                    src={API.defaults.baseURL + playlist.avatar}
                                    className="rounded-full size-48 object-cover"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 items-center gap-4 w-1/2 mx-auto mt-4">
                            <div className="col-span-1 flex items-center justify-center">
                                <Image
                                    src={VolumeDown}
                                    priority={false}
                                    className="col-span-1 "
                                />
                            </div>
                            <div className=" col-span-4 ">
                                <div className="relative bg-gray-500 w-full h-1 rounded-lg ">
                                    <div
                                        className="bg-sky-600 h-1 rounded-l-lg"
                                        style={{ width: "50%" }}
                                    ></div>
                                    <div
                                        className="bg-sky-600 size-4 rounded-full border absolute -bottom-1"
                                        style={{ left: "50%" }}></div>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <Image
                                    src={VolumeUp}
                                    priority={false}
                                    className="col-span-1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:mt-12 md:pt-12">
                        <h1 className="text-center my-2 text-white text-3xl font-semibold ">{playlist.title}</h1>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-around gap-4 my-2">
                                <IoPlaySkipBack className="text-sky-600 col-span-1" size={"1.8rem"} />
                                <Image
                                    className="size-6"
                                    src={BackwardIcon}
                                />
                                <div className="bg-sky-600 flex items-center justify-center size-10 rounded-full">
                                    <HiPlay className="text-slate-900" size={"1.5rem"} />
                                </div>
                                <Image
                                    className="size-6"
                                    src={ForwardIcon}
                                />
                                <IoPlaySkipForward className="text-sky-600 col-span-1" size={"1.8rem"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
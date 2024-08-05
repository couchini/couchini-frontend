"use client"

import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Logo from "../../../static/images/Couchini Logo.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import API, { setToken , clearToken } from "../../../src/api";
import { toast } from "react-toastify";
import { changeUser } from "../../../src/reducers/user";

export default function Page() {
    const [showLoading, setShowLoading] = useState(true);
    const [otp, setOtp] = useState();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter()


    useEffect(() => { setTimeout(() => setShowLoading(false), 400) }, []);

    const submitHandeler = async (e) => {
        clearToken();
        e.preventDefault();
        setShowLoading(true);

        user.phone ? await API.post("/auth/otp-verify/", { phone_number: user.phone.slice(3), code: otp }).then((response) => {
            setToken(response.data.access, response.data.refresh);
            dispatch(changeUser({is_login : true}));
            toast.success("welcome to couchini ")
            router.push("/home");
        }).catch((error) => {
            error.response && error.response.data.message && toast.error(error.response.data.message);
        }).finally(() => setTimeout(() => setShowLoading(false), 400)) : router.push("/sign-up");
    }
    return (
        <>
            <div className="bg-image"></div>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <Fade duration={300}>
                    <div className="flex justify-center">
                        <form className="md:w-96 w-80 py-12" onSubmit={submitHandeler}>
                            <div className="grid grid-cols-1 gap-4 p-1">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    className="size-28 col-span-1 mx-auto"
                                />
                                <h1 className="col-span-1 text-white flex items-center gap-2 text-2xl font-bold mx-auto">
                                    <p>Login to Your</p>
                                    <p className="font-matura text-sky-500 text-3xl">Couchini</p>
                                </h1>
                                <div className="text-white col-span-1 mx-auto text-center">
                                    <p className="text-lg font-medium">Enter Your Phone</p>
                                    <p className="text-xs">to Continue with send a Verification code</p>
                                </div>
                                <input
                                    className="col-span-1 bg-blue-950 rounded-lg p-2 text-lg text-white font-semibold outline-none"
                                    placeholder="opt code"
                                    required
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <button type="submit" className="text-white bg-sky-600 p-2 items-center 
                                    rounded-lg hover:bg-sky-700 transition w-full my-2 col-span-1">
                                    <p className="text-sm md:text-lg font-semibold">Continue</p>
                                </button>
                                <div className="text-sm flex items-center col-span-1 mx-auto gap-2">
                                    <p className="text-sky-600 font-semibold">Back to Sign in With</p>
                                    <Link className="text-white font-semibold" href={"/login/password"}>Password</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </Fade>
            }
        </>
    )
};
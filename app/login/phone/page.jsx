"use client"
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Logo from "../../../static/images/Couchini Logo.png";
import Image from "next/image";
import 'react-phone-number-input/style.css';
import flags from 'react-phone-number-input/flags'
import PhoneInput from 'react-phone-number-input';
import API, { clearToken } from "../../../src/api";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { changeUser } from "../../../src/reducers/user";



export default function Page() {
    const [phone, setPhone] = useState();
    const router = useRouter();
    const [showLoading, setShowLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => setShowLoading(false), 400)
    }, []);

    const submitHandeler = async (e) => {
        clearToken();
        e.preventDefault();
        if (phone.slice(3).length === 10) {
            setShowLoading(true);
            console.log("send api data")
            await API.post("/auth/login/", { phone_number: phone.slice(3) }).then((response) => {
                dispatch(changeUser({ phone: phone }))
                response.data.user_exist ? router.push("/login/otp") : router.push("/sign-up")
            }).catch((error) => {
                console.log(error)
                console.log(error.response && error.response.data);
            }).finally(() => setTimeout(() => setShowLoading(false), 400))
        } else {
            toast.error("شماره وارد شده معتبر نمی باشد")
        }
    };
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
                                <PhoneInput
                                    onChange={setPhone}
                                    value={phone}
                                    className="col-span-1 bg-blue-950 rounded-lg p-1 py-2 text-lg text-white font-semibold"
                                    id="phone-input"
                                    required={true}
                                    flags={flags}
                                    limitMaxLength={12}
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
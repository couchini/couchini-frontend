"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearToken } from "../../src/api";

export default function Auth({ children }) {
    const returnLogin = useSelector((state) => state.user.return_login);
    const router = useRouter();

    useEffect(() => {
        returnLogin &&toast.warning("your token has been expired please login again .");
        returnLogin &&clearToken();
        returnLogin && router.push("/login/phone");
    },[returnLogin]);

    return (
        <>
            {children}
        </>
    )
};
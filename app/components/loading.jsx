import { DotLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="w-full p-6 h-screen flex items-center justify-center">
            <DotLoader color="#0284c7" />
        </div>
    )
};
import { lazy } from "react";
const GetData = lazy(() => import("./components/getData"));

const Page = () => {


    return (
        <div className="p-4 bg-slate-900 md:bg-inherit">
            <div className="bg-image"></div>
            <div className="text-white text-md items-center font-semibold">
                <div className="flex">
                    <p className="text-sky-500 md:text-3xl text-xl">Welcome to </p>
                    <p className="font-matura md:text-3xl text-x">Couchini</p>
                </div>
                <p className="text-gray-300 text-sm">Find your favorite song here</p>
                <GetData />
            </div>
        </div>
    )
}; export default Page;
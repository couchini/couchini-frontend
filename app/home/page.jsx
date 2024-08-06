import { lazy } from "react";
const GetData = lazy(() => import("./components/getData"));

const Page = () => {


    return (
        <div className="p-4">
            <div className="bg-image"></div>
            <div className="text-white text-md items-center font-semibold bg-slate-900 md:bg-inherit">
                <div className="flex">
                    <p className="text-sky-500 md:text-3xl text-xl p-1">Welcome to </p>
                    <p className="font-matura md:text-3xl text-xl p-1">Couchini</p>
                </div>
                <p className="text-gray-300 text-sm p-1">Find your favorite song here</p>
            </div>
            <GetData />
        </div>
    )
}; export default Page;
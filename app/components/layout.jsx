import LeftSideBar from "./leftSideBar"

export default function CustomLayout({ children ,current}) {
    return (
        <div className="md:grid flex flex-col flex-col-reverse grid-cols-12">
            <div className="col-span-2 text-white">
                <LeftSideBar current={current} />
            </div>
            <div className="col-span-10">
                {children}
            </div>
        </div>
    )
}
import LeftSideBar from "./leftSideBar"

export default function CustomLayout({ children, current }) {
    return (
        <div className="md:grid flex flex-col flex-col-reverse grid-cols-12">
            <div className="col-span-2 text-white relative bg-lime-500">
                <div className="md:sticky md:top-0 bg-rose-500 md:h-screen">
                    <LeftSideBar current={current} />
                </div>
            </div>
            <div className="col-span-10">
                {children}
            </div>
        </div>
    )
}
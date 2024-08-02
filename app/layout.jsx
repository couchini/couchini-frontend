import "./global.css";
import LeftSideBar from "./components/leftSideBar";
import StoreProvider from "./storeProvider";

export const metadata = {
    "title": "couchini"
}

export default function Layout({ children }) {
    return (
        <html>
            <body>
                <StoreProvider>
                    <div className="md:grid flex flex-col flex-col-reverse grid-cols-12">
                        <div className="col-span-2 md:static fixed bottom-0 left-0 right-0">
                            <LeftSideBar />
                        </div>
                        <div className="col-span-10">
                            {children}
                        </div>
                    </div>
                </StoreProvider>
            </body>
        </html>
    )
};
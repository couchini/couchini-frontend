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
                    {children}
                </StoreProvider>
            </body>
        </html>
    )
};
import "./global.css";
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from "./storeProvider";
import { ToastContainer } from "react-toastify";
import Loading from "./components/loading";
import { Suspense } from "react";
import Auth from "./components/auth";

export const metadata = {
    "title": "couchini"
}

export default function Layout({ children }) {
    return (
        <html>
            <body>
                <StoreProvider>
                    <Suspense fallback={<Loading />}>
                        <Auth>
                            {children}
                        </Auth>
                        <ToastContainer
                            draggable={true}
                            theme="dark"
                        />
                    </Suspense>
                </StoreProvider>
            </body>
        </html>
    )
};
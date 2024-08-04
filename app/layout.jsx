import "./global.css";
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from "./storeProvider";
import { ToastContainer } from "react-toastify";

export const metadata = {
    "title": "couchini"
}

export default function Layout({ children }) {
    return (
        <html>
            <body>
                <StoreProvider>
                    {children}
                    <ToastContainer 
                    draggable={true}
                    theme="dark"
                    />
                </StoreProvider>
            </body>
        </html>
    )
};
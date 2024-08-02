import "./global.css";

export const metadata = {
    "title" : "couchini"
}

export default function Layout ({children}){
    return (
        <html>
            <body>
                {
                    children
                }
            </body>
        </html>
    )
};
import CustomLayout from "../components/layout";

export default function HomeLayout ({children}) {
    return (
        <CustomLayout current={"explore"}>
            {children}
        </CustomLayout>
    )
};
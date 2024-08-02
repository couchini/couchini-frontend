import CustomLayout from "../components/layout";

export default function HomeLayout ({children}) {
    return (
        <CustomLayout current={"home"}>
            {children}
        </CustomLayout>
    )
};
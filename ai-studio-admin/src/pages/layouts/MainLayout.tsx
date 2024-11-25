import { Outlet } from "react-router-dom";
import Navigator from "~/pages/layouts/Navigator";

export default function MainLayout () {
    return (
        <>
            <Navigator/>
            <Outlet/>
        </>
    )
}
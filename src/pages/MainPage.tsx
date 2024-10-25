import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">Home page</h1>

            <Outlet/>
        </>
    )
}

export default MainPage
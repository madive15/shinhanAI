import React from "react";

import logo from "~assets/images/svg/logo.svg";
import "~assets/scss/App.css";
import { Button } from "../shared/ui/button";
import { Link, RouterProvider } from "react-router-dom";
import { router } from "./providers/RouterProvider";
import { pathKeys } from "~/shared/router";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

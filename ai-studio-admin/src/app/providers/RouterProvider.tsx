// import { createElement, lazy } from 'react'
import { createBrowserRouter, redirect, useRouteError } from "react-router-dom";
import PageNotFound from "~/pages/error/page-404";
import Home from "~/pages/home";
import MainLayout from "~/pages/layouts/MainLayout";
import PopupLayout from "~/pages/layouts/PopupLayout";
import User from "~/pages/user";
import PubIndex from "~/publish";
import Guide from "~/publish/guide/Guide";
import AdminLayout from "~/publish/layout/AdminLayout";
import { pathKeys } from "~/shared/router";

const isDevelopment = process.env.NODE_ENV === "development";

export const router = createBrowserRouter([
    {
        errorElement: <BubbleError />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { path: pathKeys.home(), element: <Home /> },
                    { path: pathKeys.user(), element: <User /> },
                    { path: pathKeys.page404(), element: <PageNotFound /> },
                ],
            },
            {
                element: <PopupLayout />,
                children: [{ path: pathKeys.popupMenu1(), element: <User /> }],
            },
            ...(isDevelopment
                ? [
                      {
                          path: pathKeys.publish(),
                          element: <PubIndex />,
                      },
                      {
                          path: pathKeys.publishGuide(),
                          element: <Guide />,
                      },
                      {
                          path: pathKeys.adminLayout(),
                          element: <AdminLayout />,
                      },
                      {
                          path: pathKeys.authPage(),
                          element: <AdminLayout pageName={"권한관리"} />,
                      },
                      {
                          path: pathKeys.managerPage(),
                          element: <AdminLayout pageName={"매니저관리"} />,
                      },
                  ]
                : []),
            {
                loader: async () => redirect(pathKeys.page404()),
                path: "*",
            },
        ],
    },
]);

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
    const error = useRouteError();

    if (error) throw error;
    return null;
}

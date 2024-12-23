// import { createElement, lazy } from 'react'
import { createBrowserRouter, redirect, useRouteError } from "react-router-dom";
import PageNotFound from "~/pages/error/page-404";
import Home from "~/pages/home";
import MainLayout from "~/pages/layouts/MainLayout";
import PopupLayout from "~/pages/layouts/PopupLayout";
import User from "~/pages/user";
import { pathKeys } from "~/shared/router";
import MuiPubIndex from "~/muiPublish";
import MuiPubGuide from "~/muiPublish/guide/Guide";
import MuiLayout from "~/muiPublish/layout/Layout";
import Main from "~/muiPublish/page/main/Main";

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
                      // mui publish
                      {
                          path: pathKeys.muiPublish(), //mui publish index
                          element: <MuiPubIndex />,
                      },
                      {
                          path: pathKeys.muiPublishGuide(), //mui publish guide
                          element: <MuiPubGuide />,
                      },
                      {
                          path: pathKeys.muiLayout(), //mui publish layout
                          element: <MuiLayout pageName={"기본레이아웃"} />,
                      },
                      {
                          path: pathKeys.main(), //메인
                          element: <MuiLayout pageName={"MAIN"} />,
                      },
                      {
                          path: pathKeys.muiTarget(), // targetExtraction
                          element: <MuiLayout pageName={"타겟추출"} />,
                      },
                      {
                          path: pathKeys.muiSingle(), // targetExtraction
                          element: <MuiLayout pageName={"싱글뷰"} />,
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

function BubbleError() {
    const error = useRouteError();

    if (error) throw error;
    return null;
}

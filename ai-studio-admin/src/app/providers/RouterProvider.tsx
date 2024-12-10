// import { createElement, lazy } from 'react'
import { createBrowserRouter, redirect, useRouteError } from "react-router-dom";
import PageNotFound from "~/pages/error/page-404";
import Home from "~/pages/home";
import MainLayout from "~/pages/layouts/MainLayout";
import PopupLayout from "~/pages/layouts/PopupLayout";
import User from "~/pages/user";
import PubIndex from "~/publish";
import Guide from "~/publish/guide/Guide";
import Layout from "~/publish/layout/Layout";
import MuiLayout from "~/muiPublish/layout/Layout";
import MuiPubIndex from "~/muiPublish";
import MuiPubGuide from "~/muiPublish/guide/Guide";
import MuiSampleForm from "~/muiPublish/guide/MuiSampleForm";
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
                          element: <Layout />,
                      },
                      {
                          path: pathKeys.tablePage(),
                          element: <Layout pageName={"샘플테이블"} />,
                      },
                      {
                          path: pathKeys.authPage(),
                          element: <Layout pageName={"권한관리"} />,
                      },
                      {
                          path: pathKeys.managerPage(),
                          element: <Layout pageName={"관리자메뉴 권한관리"} />,
                      },
                      {
                          path: pathKeys.permissionPage(),
                          element: <Layout pageName={"권한그룹관리"} />,
                      },
                      {
                          path: pathKeys.memberPage(),
                          element: <Layout pageName={"회원관리"} />,
                      },
                      {
                          path: pathKeys.ocrPage(),
                          element: <Layout pageName={"AI-OCR 검증 결과 관리"} />,
                      },
                      {
                          path: pathKeys.sampleForm(),
                          element: <Layout pageName={"샘플폼"} />,
                      },

                      // mui publish
                      {
                          path: pathKeys.muiPublish(),
                          element: <MuiPubIndex />,
                      },
                      {
                          path: pathKeys.muiLayout(), //mui 기본 layout
                          element: <MuiLayout pageName={"기본레이아웃"} />,
                      },
                      {
                          path: pathKeys.taskpage(),
                          element: <Layout pageName={"과제 신청"} />,
                      },
                      {
                          path: pathKeys.muiPublishGuide(),
                          element: <MuiPubGuide />,
                      },
                      {
                          path: pathKeys.muiSampleForm(),
                          element: <MuiLayout pageName={"샘플폼"} />,
                      },
                      {
                          path: pathKeys.metaPage(),
                          element: <MuiLayout pageName={"상품메타관리"} />,
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

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
import MuiPupup from "~/muiPublish/components/popup/MuiPopup";
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
                          path: pathKeys.muiPublishPopup(),
                          element: <MuiPupup />,
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
                          path: pathKeys.muiSingle(),
                          element: <MuiLayout pageName={"싱글뷰"} />,
                      },
                      {
                          path: pathKeys.muiOcr(),
                          element: <MuiLayout pageName={"AI-OCR"} />,
                      },
                      {
                          path: pathKeys.muiOcrVeri(),
                          element: <MuiLayout pageName={"AI-OCR 검증"} />,
                      },
                      {
                          path: pathKeys.taskList(),
                          element: <MuiLayout pageName={"과제신청목록"} />,
                      },
                      {
                          path: pathKeys.taskApply(),
                          element: <MuiLayout pageName={"과제 신청"} />,
                      },
                      {
                          path: pathKeys.taskDetail(),
                          element: <MuiLayout pageName={"과제 신청 상세"} />,
                      },
                      {
                          path: pathKeys.noticeList(),
                          element: <MuiLayout pageName={"공지사항목록"} />,
                      },
                      {
                          path: pathKeys.noticeDetail(),
                          element: <MuiLayout pageName={"공지 사항 상세"} />,
                      },
                      {
                          path: pathKeys.tempBoard(),
                          element: <MuiLayout pageName={"임시게시판 목록"} />,
                      },
                      {
                          path: pathKeys.tempBoardApply(),
                          element: <MuiLayout pageName={"임시게시판 등록"} />,
                      },
                      {
                          path: pathKeys.tempBoardDetail(),
                          element: <MuiLayout pageName={"임시게시판 상세"} />,
                      },
                      {
                          path: pathKeys.myTaskList(),
                          element: <MuiLayout pageName={"과제 신청 내역"} />,
                      },
                      {
                          path: pathKeys.myTaskListDetail(),
                          element: (
                              <MuiLayout pageName={"과제 신청 내역 상세"} />
                          ),
                      },
                      {
                          path: pathKeys.myTargetList(),
                          element: <MuiLayout pageName={"타겟 추출 내역"} />,
                      },
                      {
                          path: pathKeys.myTargetDetail(),
                          element: (
                              <MuiLayout pageName={"타겟 추출 상세 내역"} />
                          ),
                      },
                      {
                          path: pathKeys.myModelList(),
                          element: <MuiLayout pageName={"모델 생성 내역"} />,
                      },
                      {
                          path: pathKeys.myModelDetail(),
                          element: (
                              <MuiLayout pageName={"모델 생성 상세 내역"} />
                          ),
                      },
                      {
                          path: pathKeys.errorPage(),
                          element: <MuiLayout pageName={"에러샘플"} />,
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

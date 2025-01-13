export const pathKeys = {
    root: "/",
    login(): string {
        return `${pathKeys.root}login/`;
    },
    home(): string {
        return pathKeys.root;
    },
    user(): string {
        return `${pathKeys.root}user/`;
    },
    popupMenu1(): string {
        return `${pathKeys.root}popup/menu/1`;
    },
    page404(): string {
        return `${pathKeys.root}404/`;
    },
    publish(): string {
        return `${pathKeys.root}publish/`; //퍼블 index
    },
    publishGuide(): string {
        return `${pathKeys.root}publish/guide`; //퍼블 가이드
    },
    publishPage(): string {
        return `${pathKeys.root}publish/page/id1`;
    },
    adminLayout(): string {
        return `${pathKeys.root}publish/adminLayout`; //어드민 레이아웃
    },
    tablePage(): string {
        return `${pathKeys.root}publish/table`; // 테이블 샘플 page
    },
    authPage(): string {
        return `${pathKeys.root}publish/auth`; // 권한관리 page
    },
    managerPage(): string {
        return `${pathKeys.root}publish/manager`; // 관리자메뉴 권한관리 page
    },
    permissionPage(): string {
        return `${pathKeys.root}publish/permission`; // 권한그룹관리 page
    },
    memberPage(): string {
        return `${pathKeys.root}publish/member`; // 회원관리 page
    },
    ocrPage(): string {
        return `${pathKeys.root}publish/ocr`; // ocr page
    },
    metaPage(): string {
        return `${pathKeys.root}publish/meta`;
    },
    sampleForm(): string {
        return `${pathKeys.root}publish/sampleform`;
    },

    muiPublish(): string {
        return `${pathKeys.root}muipublish/`; // MUI 퍼블 index
    },
    muiLayout(): string {
        return `${pathKeys.root}muipublish/layout`; // MUI 기본 layout
    },
    main(): string {
        return `${pathKeys.root}muipublish/main`;
    },
    muiPublishGuide(): string {
        return `${pathKeys.root}muipublish/guide`; // MUI 퍼블 index
    },
    muiPublishPopup(): string {
        return `${pathKeys.root}muipublish/popupBundle`;
    },
    muiTarget(): string {
        return `${pathKeys.root}muipublish/target`; // targetExtraction
    },
    muiSingle(): string {
        return `${pathKeys.root}muipublish/single`; // 싱글뷰
    },
    muiOcr(): string {
        return `${pathKeys.root}muipublish/ocr`; // ocr
    },
    muiOcrVeri(): string {
        return `${pathKeys.root}muipublish/ocrveri`; // ocr검증
    },
    taskList(): string {
        return `${pathKeys.root}muipublish/tasklist`; // 과제신청목록
    },
    taskApply(): string {
        return `${pathKeys.root}muipublish/taskapply`; // 과제신청
    },
    taskDetail(): string {
        return `${pathKeys.root}muipublish/taskdetail`; // 과제신청상세
    },
    noticeList(): string {
        return `${pathKeys.root}muipublish/noticelist`; // 공지사항목록
    },
    noticeDetail(): string {
        return `${pathKeys.root}muipublish/noticeDetail`; // 공지사항상세
    },
    tempBoard(): string {
        return `${pathKeys.root}muipublish/tempBoardlist`; // 임시게시판목록
    },
    tempBoardApply(): string {
        return `${pathKeys.root}muipublish/tempBoardapply`; // 임시게시판등록
    },
    tempBoardDetail(): string {
        return `${pathKeys.root}muipublish/tempBoarddetail`; // 임시게시판상세
    },
    myTaskList(): string {
        return `${pathKeys.root}muipublish/mytask`; // 마이페이지 과제신청내역
    },
    myTaskListDetail(): string {
        return `${pathKeys.root}muipublish/mytaskdetail`; // 마이페이지 과제신청내역상세
    },
    myTargetList(): string {
        return `${pathKeys.root}muipublish/mytarget`; // 마이페이지 타겟추출내역
    },
    myTargetDetail(): string {
        return `${pathKeys.root}muipublish/mytargetdetail`; // 마이페이지 타겟추출상세내역
    },
    myModelList(): string {
        return `${pathKeys.root}muipublish/mymodel`; // 마이페이지 모델생성내역
    },
    myModelDetail(): string {
        return `${pathKeys.root}muipublish/mymodeldetail`; // 마이페이지 모델생성상세내역
    },
    myBookmark(): string {
        return `${pathKeys.root}muipublish/myBookmark`; // 즐겨찾기 관리
    },
    errorPage(): string {
        return `${pathKeys.root}muipublish/error`; // 에러페이지
    },
};

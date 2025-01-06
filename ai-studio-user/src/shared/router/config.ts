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
};

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
};

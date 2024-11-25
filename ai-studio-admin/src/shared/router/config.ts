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
};

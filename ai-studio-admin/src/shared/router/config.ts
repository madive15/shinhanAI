export const pathKeys = {
    root: '/',
    login() : string {
        return `${pathKeys.root}login/`
    },
    home() : string {
        return pathKeys.root
    },
    user() : string {
        return `${pathKeys.root}user/`
    },
    popupMenu1() : string {
        return `${pathKeys.root}popup/menu/1`
    },
    page404() : string {
        return `${pathKeys.root}404/`
    },
    publish() : string {
        return `${pathKeys.root}publish/`
    }
}
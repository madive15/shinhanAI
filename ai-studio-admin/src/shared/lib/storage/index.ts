export const storage = {
    session: {
        set(key: string, value: unknown) {
            if (key && value) {
                window.sessionStorage.setItem(key, JSON.stringify(value))
            }
        },
        get(key: string) {
            const v = window.sessionStorage.getItem(key)
            return v ? JSON.parse(v) : v
        }
    },
    local: {
        set(key: string, value: unknown) {
            if (key && value) {
                window.localStorage.setItem(key, JSON.stringify(value))
            }
        },
        get(key: string) {
            const v = window.localStorage.getItem(key)
            return v ? JSON.parse(v) : v
        }
    }
}
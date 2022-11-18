import service from "../request/index"

//登录接口
export function login(data) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}

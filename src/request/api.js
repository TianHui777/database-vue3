import service from "../request/index"

//登录接口
export function login(data) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}

// 课程列表接口
export function getGoodsList() {
    return service({
        url: "/getCourseList",
        method: "get"
    })

}


//用户列表接口
export function getUserList() {
    return service({
        url: "/getUserList",
        method: "get"
    })

}

//角色列表接口
export function getRoleList() {
    return service({
        url: "/getRoleList",
        method: "get"
    })

}

//角色列表接口
import service from "@/request";

export function getRoleList() {
    return service({
        url: "/getRoleList",
        method: "get"
    })

}

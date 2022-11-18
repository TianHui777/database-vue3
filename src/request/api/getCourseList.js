// 课程列表接口
import service from "@/request";

export function getGoodsList() {
    return service({
        url: "/getCourseList",
        method: "get"
    })

}

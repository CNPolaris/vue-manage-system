import request from "../utils/request";

export function getCompanyList(){
    return request({
        url: "/api/company/list",
        method: "get"
    })
}
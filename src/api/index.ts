import request from '@/utils/request'
import { IMethodOption } from '@/interface/request-interface'

const option: IMethodOption = {
    url: "",
    data: {},
    method: ""
}

export function getData(data: object) {
    return request.get('test', data, option)
}
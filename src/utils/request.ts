// 封装请求
import apiConfig from '../config'
const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

// 引入接口
import { IMethodOption, IOptions, ICommon } from '@/interface/request-interface'


class MinRequest {
  [config] = {
    baseURL: apiConfig.baseUrl,
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

  interceptors = {
    request: (func: any) => {
      if (func) {
        MinRequest[requestBefore] = func
      } else {
        MinRequest[requestBefore] = (request) => request
      }
      
    },
    response: (func: any) => {
      if (func) {
        MinRequest[requestAfter] = func
      } else {
        MinRequest[requestAfter] = (response) => response
      }
    }
  }

  private static [requestBefore]<T> (config: T): T {
    return config
  }

  static [requestAfter]<T> (response: T): T {
    return response
  }

  static [isCompleteURL] (url: string) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  setConfig (func: any ) {
    this[config] = func(this[config])
  }

  request (options: IOptions) {
    options.baseURL = options.baseURL || this[config].baseURL
    options.dataType = options.dataType || this[config].dataType
    options.url = MinRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
    options.data = options.data
    options.header = {...options.header, ...this[config].header}
    options.method = options.method || this[config].method

    options = {...options, ...MinRequest[requestBefore](options)}
    return new Promise((resolve, reject) => {
      options.success = function (res) {
        resolve(MinRequest[requestAfter](res))
      }
      options.fail= function (err) {
        reject(MinRequest[requestAfter](err))
      }
      const config: any = options;
      uni.request(config)
    })
  }


  get (url: string, data: object, options: IMethodOption) {
    options.url = url
    options.data = data
    options.method = 'GET'
    const baseOption = {
        baseURL: this[config].baseURL,
        dataType: this[config].dataType,
        header: {...this[config].header},
        success() {},
        fail() {}
    }
    return this.request({...options, ...baseOption})
  }

  post (url: string, data: object, options: IMethodOption) {
    options.url = url
    options.data = data
    options.method = 'POST'
    const baseOption = {
        baseURL: this[config].baseURL,
        dataType: this[config].dataType,
        header: {...this[config].header},
        success() {},
        fail() {}
    }
    return this.request({...options, ...baseOption})
  }
}

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request: ICommon) => {
  // 设置token 这里需要做判断 有token才设置token
  request.header.token = 'token'
  return request
})

// 响应拦截器
minRequest.interceptors.response((response: ICommon) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config: ICommon) => {
  config.baseURL = apiConfig.baseUrl
  return config
})

export default minRequest
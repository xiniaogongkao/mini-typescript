interface IMethodOption {
    url: string,
    data: object,
    method: string,
}

interface IOptions extends IMethodOption {
    baseURL: string,
    dataType: string,
    header: {
        'content-type': string
    },
    success(res: object): void,
    fail(res: object): void,
}

interface ICommon {
    data: object,
    baseURL: string,
    header: {
        token: string
    },
}

export {
    IMethodOption,
    IOptions,
    ICommon
}
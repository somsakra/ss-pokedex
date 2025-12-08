import type { AxiosError, AxiosResponse } from "axios"

export interface IResponse {
    status: number | undefined
    error?: AxiosError<AxiosResponse<any, any>, any> | AxiosResponse<any, any, {}> | undefined
}

export const handleResponse = {
    success: (response: AxiosResponse)=> {
        return {
            status: response.status,
            data: response.data
        }
    },
    error: (response: AxiosError<AxiosResponse>): IResponse => {
        if(response.message === 'Network Error') {
            return {
                status:500,
                error:response
            }
        }else {
            return {
                status: response?.status,
                error: response.response?.data
            }
        }
    }
}
import { api } from '@/shared/api'
import { routes } from './routes'
import { AxiosResponse } from 'axios'
import { ApiBlogsData } from './types'

export const createBlog = async (body: Pick<ApiBlogsData, 'body' | 'title'>) => {
    return await api.post<any, AxiosResponse<ApiBlogsData>>(routes.getBlogsData(), {
        body,
    })
}

import { api } from '@/shared/api'
import { routes } from './routes'
import axios, { AxiosResponse } from 'axios'
import { ApiBlogsData, ApiUsersData } from './types'

export const getBlogs = async (limit: number = 10, page: number = 1) => {
    const posts = await api.get<any, AxiosResponse<ApiBlogsData[]>>(routes.getBlogsData(), {
        params: {
            _limit: limit,
            _page: page,
        },
    })
    const users = await api.get<any, AxiosResponse<ApiUsersData[]>>(routes.getUsersData())

    return await axios.all([posts, users]).then((response) => {
        const newPosts = response[0].data as ApiBlogsData[]
        const newUsers = response[1].data as ApiUsersData[]

        const newData = newPosts.map((post) => {
            const user = newUsers.find((user) => user.id === post.userId)
            return { ...post, user }
        })

        return newData
    })
}

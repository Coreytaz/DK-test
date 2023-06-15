import { ApiBlogsData, ApiUsersData } from '../api'

export type FlowReturn<AsyncFunction extends (...args: any[]) => Promise<any>> = Generator<
    ReturnType<AsyncFunction>,
    void,
    Awaited<ReturnType<AsyncFunction>>
>

export interface BlogsItem extends Omit<ApiBlogsData, 'userId'> {
    user?: ApiUsersData
}

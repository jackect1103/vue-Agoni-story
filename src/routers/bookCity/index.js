export default {
    path: '/bookcity',
    component: () => import('@/views/bookCity'),
    children: [
        {
            path: "storypage",
            component: () => import('@/components/storyPage'),
            meta: "category"
        },
        {
            // 无参数
            path: "category/:target",
            components: {
                default: () => import('@/views/bookShelf'),
                more: () => import('@/views/bookShelf')
            },
            props: {
                default: true,
                more: true
            },
            meta: "category"
        }
    ]
}
export default {
    path: '/bookcity', 
    component: () => import('@/views/bookCity'),
    children: [
        {
            // 查看更多小说
            path: "category/:target",
            component: () => import('@/views/bookShelf/category'),
            props: true,
        }, {
            // 某部小说的详情页
            path: "storypage/:id",
            components: {
                default: () => import('@/components/storyPage'),
                storyPage: () => import('@/components/storyPage')
            },
            props: true,
        }
    ]
}
export default {
    path: '/bookshelf',
    component: () => import('@/views/bookShelf'),
    children: [
        {
            path: "category/:categoryname",
            component: () => import('@/views/bookShelf/category.vue'),
            props: true,
            meta: "category"
        }, {
            // 某部小说的详情页
            path: "storypage/:id",
            components: {
                default: () => import('@/components/storyPage'),
                storyPage: () => import('@/components/storyPage')
            },
            props: {
                storyPage: true
            },
        }
    ]
}
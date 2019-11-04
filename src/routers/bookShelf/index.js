export default {
    path: '/bookshelf', 
    component: () => import('@/views/bookShelf'),
    children: [
        {
            path: "sex/:sex",
            component: () => import('@/views/bookShelf/category.vue'),
            props: true,
            // meta: "category"
        },{
            path: "category/:category",
            component: () => import('@/views/bookShelf/category.vue'),
            props: true,
            // meta: "category"
        }, {
            // 某部小说的详情页
            path: "storypage/:_id",
            components: {
                default: () => import('@/components/storyPage'),
                storyPage: () => import('@/components/storyPage')
            },
            props: true,
        }
    ]
}
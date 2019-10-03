export default {
    path: '/bookcity',
    component: () => import('@/views/bookCity'),
    children: [
        {
            path: "storypage/:id",
            component: () => import('@/components/storyPage'),
            props:true,
            meta: "category"
        },
        {
            // 无参数
            path: "category/:target",
            component:() => import('@/views/bookShelf/category'),
            props:true,
            meta: "category"
        }
    ]
}
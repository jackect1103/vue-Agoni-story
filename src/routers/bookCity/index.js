export default {
    path: '/bookcity',
    component: () => import('@/views/bookCity'),
    children:[
        {
            // 无参数
            path:"category/:target",
            component:()=>import('@/views/bookShelf/category.vue'),
            props: true,
            meta:"category"
        }
    ]
}
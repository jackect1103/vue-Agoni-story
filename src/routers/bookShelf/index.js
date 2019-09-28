export default {
    path: '/bookshelf',
    component: () => import('@/views/bookShelf'),
    children:[
        {
            path:"category/:categoryname",
            component:()=>import('@/views/bookShelf/category.vue'),
            props: true,
            meta:"category"
        }
    ]
}
export default {
    path: '/bookcircle',
    component: () => import('@/views/bookCircle'),
    children: [
        {
            path: 'BookNews',
            component: () => import('@/components/circleTab')
        },
        {
            path: 'ChildrensBooks',
            component: () => import('@/components/circleTab/ChildrensBooks')
        },
        {
            path: 'activity',
            component: () => import('@/components/circleTab/activity')
        }, {
            // 当一个组件中有多个router-view时，使用router的命名视图
            // https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE
            path: 'comment/:id',
            components:{
                // 命名视图
                default:()=>import('@/components/comment'),
                comment: () => import('@/components/comment')
            },
            // 动态路由传值=>>到详情页上（通过 props 解耦）
            // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
            // 如果 props 被设置为 true，route.params 将会被设置为组件属性。
            props: {
                default: true,
                comment: false
            },
            meta : "comment"
        }, {
            path: '/bookcircle',
            redirect: '/bookcircle/BookNews'
        }
    ]
}
export default {
    path: '/selected',
    component: () => import('@/views/Selected'),
    children: [
        {
            path: 'selectDetail/:id',
            /**
             * 路由组件传参
                在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
             */
            component: () => import('@/components/selectDetail'),
            props: true,
            meta:'selectDetail'
        }
    ]
}
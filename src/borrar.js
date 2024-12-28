const routes=[
    {path:'/home',component:home},
    {path:'/principal',component:principal},
    {path:'/ruc',component:ruc},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
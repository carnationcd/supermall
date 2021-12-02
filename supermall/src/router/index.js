import Vue from "vue";
import VueRouter from "vue-router";

//路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

//1.安装路由
Vue.use(VueRouter);

//2.配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

//3.创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})

//4.导出
export default router
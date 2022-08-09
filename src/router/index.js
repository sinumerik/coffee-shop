import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView';
import OurCoffeeView from '@/views/OurCoffeeView';
import GoodsView from '@/views/GoodsView';
import ContactsView from '@/views/ContactsView';
import ItemPageView from '@/views/ItemPageView';
import ThankYouView from '@/views/ThankYouView';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: '/our-coffee',
        component: OurCoffeeView
    },
    {
        path: '/goods',
        component: GoodsView
    },
    {
        path: '/contacts',
        component: ContactsView
    },
    {
        name: 'coffee',
        path: '/our-coffee/:id',
        component: ItemPageView
    },
    {
        name: 'goods',
        path: '/goods/:id',
        component: ItemPageView
    },
    {
        path: '/thank-you',
        component: ThankYouView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from '@/store/links';
import product from './product';

const store = new Vuex.Store({
    modules: {
        links,
        product
    }
})

export default store
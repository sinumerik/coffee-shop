import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from '@/store/links';
import bestsellers from './bestsellers';
import coffee from './coffee';
import goods from './goods';

const store = new Vuex.Store({
    modules: {
        links,
        bestsellers,
        coffee,
        goods,
    }
})

export default store
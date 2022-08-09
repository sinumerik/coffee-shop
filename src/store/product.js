const product = {
    state: {
        bestsellers: [],
        coffee: [],
        goods: []
    },
    mutations: {
        setBestsellers(state, data) {
            state.bestsellers = data;
        },
        setCoffee(state, data) {
            state.coffee = data;
        },
        setGoods(state, data) {
            state.goods = data;
        }
    },
    actions: {
        setBestsellers({commit}, data) {
            commit('setBestsellers', data);
        },
        setCoffee({commit}, data) {
            commit('setCoffee', data);
        },
        setGoods({commit}, data) {
            commit('setGoods', data);
        }
    },
    getters: {
        getProducts(state) {
            return (productName) => {
                return state[productName];
            };
        },
        getCardById(state) {
            return (id, product) => {
                return state[product].find(item => item.id === id);
            }
        }
    }
}

export default product
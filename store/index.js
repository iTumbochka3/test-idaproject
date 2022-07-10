export const state = () => ({
    products: [],
    orderBy: 'name',
    orderAsc: true,
})

export const getters = {
    getProducts(state) {
        return state.products;
    },
    getOrderBy(state) {
        return state.orderBy;
    },
    getOrderAsc(state) {
        return state.orderAsc;
    },
}

export const mutations = {
    ADD(state, product) {
        state.products.push(product);
    },
    SET(state, products) {
        state.products = products;
    },
    SET_ORDER_BY(state, value) {
        state.orderBy = value;
    },
    SET_ORDER_ASC(state, value) {
        state.orderAsc = value;
    },
}

export const actions = {
    addProduct({ state, commit }, product) {
        commit('ADD', { id: Date.now(), name: product.name, description: product.description, price: product.price, imageUrl: product.imageUrl });
        if (process.client) {
            localStorage.setItem('products', JSON.stringify(state.products));
        }
    },

    removeProduct({ state, commit }, id) {
        const newArray = state.products.filter((item) => item.id !== id);
        commit('SET', newArray);
        if (process.client) {
            localStorage.setItem('products', JSON.stringify(state.products));
        }
    },

    getDataFromLocalStorage({ commit }) {
        if (process.client) {
            commit('SET', JSON.parse(localStorage.getItem('products') || '[]'));
        }
    },

    setOrderBy({ commit }, value) {
        commit('SET_ORDER_BY', value);
    },

    setOrderAsc({ commit }, value) {
        commit('SET_ORDER_ASC', value);
    },
}
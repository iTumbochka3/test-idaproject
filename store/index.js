export const state = () => ({
    products: [
        { id: 1, name: 'Наименование товара', description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: 10000, imageUrl: '' },
        { id: 2, name: 'Наименование товара', description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: 10000, imageUrl: '' },
        { id: 3, name: 'Наименование товара', description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: 10000, imageUrl: '' },
        { id: 4, name: 'Наименование товара', description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: 10000, imageUrl: '' },
        { id: 5, name: 'Наименование товара', description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: 10000, imageUrl: '' },
    ],
})

export const getters = {
    getProducts(state) {
        return state.products
    },
}

export const mutations = {
    ADD(state, product) {
        state.products.push(product);
    },
    REMOVE(state, id) {
        state.products = state.products.filter((item) => item.id !== id);
    },
}

export const actions = {
    addProduct({ commit }, product) {
        commit('ADD', { id: Date.now(), name: product.name, description: product.description, price: product.price, imageUrl: product.imageUrl });
    },

    removeProduct({ commit }, id) {
        commit('REMOVE', id);
    },
}
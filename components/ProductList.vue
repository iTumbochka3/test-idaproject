<template>
    <transition-group name="product" class="product-list">
        <ProductItem v-for="(product, index) in products" :key="product.id+index" :product="product" />
    </transition-group>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
    name: "ProductList",
    components: { ProductItem },
    computed: {
        orderBy() {
            return this.$store.getters.getOrderBy;
        },
        orderAsc() {
            return this.$store.getters.getOrderAsc;
        },
        products() {
            return [...this.$store.getters.getProducts].sort(this.productsSort);
        },
    },
    methods: {
        productsSort(a, b) {
            if (this.orderAsc) {
                if (a[this.orderBy] < b[this.orderBy]) {
                    return -1;
                }
                if (a[this.orderBy] > b[this.orderBy]) {
                    return 1;
                }
                return 0;
            } else {
                if (a[this.orderBy] > b[this.orderBy]) {
                    return -1;
                }
                if (a[this.orderBy] < b[this.orderBy]) {
                    return 1;
                }
                return 0;
            }
        },
    },
}
</script>

<style scoped lang="scss">
.product-list {
    display: flex;
    flex-flow: row wrap;

    @media (min-width: 0) and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
}

.product-enter-active,
.product-leave-active {
    transition: opacity .8s;
}

.product-enter,
.product-leave-to {
    opacity: 0;
}
</style>

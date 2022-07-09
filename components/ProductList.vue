<template>
    <div class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
    name: "ProductList",
    components: { ProductItem },
    computed: {
        products() {
            return this.$store.getters.getProducts;
        },
    },
}
</script>

<style scoped lang="scss">
.product-list {
    display: flex;
    flex-flow: row wrap;
}
</style>

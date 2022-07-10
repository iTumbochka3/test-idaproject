<template>
  <div class="main-container">
    <ProductAdd />
    <ProductList />
  </div>
</template>

<script>
import ProductAdd from '../components/ProductAdd.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: "IndexPage",
  components: { ProductAdd, ProductList },
  mounted() {
    this.$store.dispatch('getDataFromLocalStorage');
  },
}
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
  margin: 32px 24px;
}
</style>
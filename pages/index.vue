<template>
  <div class="main-container">
    <ProductAdd />
    <div>
      <SorterToolbar />
      <ProductList />
    </div>

  </div>
</template>

<script>
import ProductAdd from '../components/ProductAdd.vue';
import ProductList from '../components/ProductList.vue';
import SorterToolbar from '../components/SorterToolbar.vue';

export default {
  name: "IndexPage",
  components: { ProductAdd, ProductList, SorterToolbar },
  mounted() {
    this.$store.dispatch('getDataFromLocalStorage');
  },
}
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  margin: 32px 24px;

  @media (min-width: 0) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }

}
</style>
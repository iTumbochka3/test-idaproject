<template>
    <div class="sorter-toolbar">
        <select v-model="orderBy" class="sorter-toolbar__select">
            <option v-for="order in orderOptions" :key="order.value" :value="order.value"> {{ order.name }}</option>
        </select>

        <select v-model="asc" class="sorter-toolbar__select">
            <option :value="true" selected>По возрастанию</option>
            <option :value="false">По убыванию</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SorterToolbar',
    data() {
        return {
            orderBy: 'name',
            orderOptions: [
                { name: 'Наименование', value: 'name' },
                { name: 'Цена', value: 'price' },
            ],
            asc: true,
        }
    },
    watch: {
        orderBy(value) {
            this.$store.dispatch('setOrderBy', value);
        },
        asc(value) {
            this.$store.dispatch('setOrderAsc', value);
        }
    },
}
</script>

<style scoped lang="scss">
@import '../assets/default_variables.scss';
.sorter-toolbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: $space-m;

    @media (min-width: 0) and (max-width: 768px) {
        flex-direction: column;
        margin-top: $space-m;
    }

    @media (min-width: 769px) {
        flex-direction: row;

        :first-child {
            margin-right: $space-m;
        }
    }

    &__select {
        flex-grow: 1;
        background: $color-5;
        border: unset;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-top: $space-xs;
        padding-left: $space-m;
        height: $height-default;
        font-size: $font-m;
    }
}
</style>

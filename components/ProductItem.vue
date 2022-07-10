<template>
    <div class="product-item">
        <img class="product-item__delete" src="../static/delete2.png" @click="removeProduct" />
        <img v-if="product.imageUrl" class="product-item__image" :src="product.imageUrl" />
        <img v-else class="product-item__image" src="../static/default.png" />
        <div class="product-item__content">
            <div class="product-item__name">{{ product.name }}</div>
            <div class="product-item__description">{{ product.description }}</div>
            <div class="product-item__price">{{ product.price | currency }} руб.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    filters: {
        currency: function (value) {
            if (!value || value.length < 3) {
                return value;
            }
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
    },
    methods: {
        removeProduct() {
            this.$store.dispatch('removeProduct', this.product.id);
        },
    },
}
</script>

<style scoped lang="scss">
@import '../assets/default_variables.scss';
.product-item {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 $space-m $space-m 0;
    background: $color-5;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    color: $color-1;

    @media (min-width: 0) and (max-width: 768px) {
        width: $width-mobile;
    }

    @media (min-width: 769px) {
        width: $width-desktop;
    }

    &__delete {
        position: absolute;
        top: -10px;
        right: -10px;
        visibility: hidden;
    }

    &__image {
        align-self: center;
        border-radius: 4px 4px 0px 0px;
        width: inherit;
    }

    &__content {
        display: flex;
        flex-direction: column;
        margin: $space-m $space-m $space-l $space-m;
    }

    &__name {
        margin-bottom: $space-m;
        font-size: $font-xl;
        font-weight: $font-weight-b;
    }

    &__description {
        margin-bottom: $space-xl;
        font-size: $font-l;
        font-weight: $font-weight;
    }

    &__price {
        font-weight: $font-weight-b;
        font-size: $font-xxl;
    }

    cursor: url("../static/hover.png"),
    auto;

    :hover>&__delete {
        visibility: visible;
    }

    :focus {}

    :active {}
}
</style>

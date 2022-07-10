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
.product-item {
    width: 332px;
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 16px 16px 0;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    color: #3F3F3F;

    &__delete {
        position: absolute;
        top: -10px;
        right: -10px;
        visibility: hidden;
    }

    &__image {
        border-radius: 4px 4px 0px 0px;
        width: 332px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        margin: 16px 16px 24px 16px;
    }

    &__name {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 600;
    }

    &__description {
        margin-bottom: 32px;
        font-size: 16px;
        font-weight: 400;
    }

    &__price {
        font-weight: 600;
        font-size: 24px;
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

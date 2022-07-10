<template>
    <div class="product-add">
        <h1 class="product-add__title">Добавления товара</h1>
        <div class="product-add__form">
            <div class="custom-input">
                <div class="custom-input__label">
                    <label>Наименование товара</label>
                    <div class='rectangle'></div>
                </div>
                <div class="custom-input__div">
                    <input class="custom-input__input" type="text" placeholder="Введите наименование товара"
                        v-model="name" :class="{ 'custom-input__input_error': !isValidName }" />
                    <span class="custom-input__help-text" v-if="!isValidName">Поле является обязательным</span>
                </div>
            </div>
            <div class="custom-input">
                <div class="custom-input__label">
                    <label>Описание товара</label>
                </div>
                <textarea class="custom-input__input" placeholder="Введите описание товара"
                    v-model="description"></textarea>
            </div>
            <div class="custom-input">
                <div class="custom-input__label">
                    <label>Ссылка на изображения товара</label>
                    <div class='rectangle'></div>
                </div>
                <div class="custom-input__div">
                    <input class="custom-input__input" type="text" placeholder="Введите ссылку" v-model="imageUrl"
                        :class="{ 'custom-input__input_error': !isValidHttpUrl }" />
                    <span class="custom-input__help-text" v-if="!isValidHttpUrl">Поле является обязательным</span>
                </div>

            </div>
            <div class="custom-input">
                <div class="custom-input__label">
                    <label>Цена товара</label>
                    <div class='rectangle'></div>
                </div>
                <div class="custom-input__div">
                    <input type="text" class="custom-input__input"
                        :class="{ 'custom-input__input_error': !isValidPrice }" placeholder="Введите цену"
                        :value="priceText" @input="changePrice" />
                    <span class="custom-input__help-text" v-if="!isValidPrice">Поле является обязательным</span>
                </div>

            </div>
            <button class="custom-button" @click="addProduct" :disabled="!isValidForm"
                :class="{ 'custom-button_disabled': !isValidForm }">Добавить товар</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductAdd',
    data() {
        return {
            name: '',
            description: '',
            priceText: '',
            price: 0,
            imageUrl: '',
        }
    },
    computed: {
        isValidForm() {
            return this.isValidName && this.isValidPrice && this.isValidHttpUrl;
        },
        isValidName() {
            return this.name;
        },
        isValidPrice() {
            return this.price && this.price !== '0';
        },
        isValidHttpUrl() {
            let url;
            try {
                url = new URL(this.imageUrl);
            } catch (error) {
                return false;
            }
            return this.imageUrl && (url.protocol === "http:" || url.protocol === "https:");
        },
    },
    watch: {
        priceText(value) {
            this.price = +value.replace(/\s/g, '');
        }
    },
    methods: {
        addProduct() {
            if (this.isValidForm) {
                this.$store.dispatch('addProduct', { name: this.name, description: this.description, price: this.price, iamgeUrl: this.imageUrl });
                this.name = '';
                this.price = '';
                this.description = '';
                this.imageUrl = '';
            }
        },
        changePrice(event) {
            const newString = event.target.value.replace(/\s/g, '');
            this.priceText = newString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    },
}
</script>

<style scoped lang="scss">
@import '../assets/default_variables.scss';
@import '../assets/custom-button.scss';
@import '../assets/custom-input.scss';
.product-add {
    display: flex;
    flex-direction: column;
    margin-right: $space-m;

    @media (min-width: 0) and (max-width: 768px) {
        width: $width-mobile;
    }

    @media (min-width: 769px) {
        width: $width-desktop;
    }

    &__title {
        margin: 0 0 $space-m 0;
        font-size: $font-xxxl;
        font-weight: $font-weight-b;
        color: $color-1;
    }

    &__form {
        display: flex;
        flex-direction: column;
        padding: $space-l;
        background: $color-5;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: $border-radius;
    }
}
</style>
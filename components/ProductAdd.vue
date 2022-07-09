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
                    <input class="custom-input__input" type="number" placeholder="Введите цену" v-model="price"
                    :class="{ 'custom-input__input_error': !isValidPrice }" />
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
            price: '',
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
    },
}
</script>

<style scoped lang="scss">
$space_for_add: 24px;

.product-add {
    display: flex;
    flex-direction: column;
    margin-right: 16px;


    &__title {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #3F3F3F;
        margin-bottom: 16px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        padding: $space_for_add;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
    }
}

.custom-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-size: 10px;

    &__title {
        color: #49485E;
    }

    &__label {
        display: flex;
    }

    &__div {
        display: flex;
        position: relative;
        flex-direction: column;
    }

    &__input {
        background: #FFFEFB;
        border: unset;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-size: 12px;
        margin-top: 4px;
        padding: 10px 16px;
        resize: none;

        &_error {
            border: 1px solid #FF8484;
        }
    }

    &__help-text {
        position: absolute;
        bottom: -14px;
        color: #FF8484;
        font-weight: 400;
        font-size: 8px;
    }
}

.custom-button {
    color: #FFFFFF;
    background: #7BAE73;
    height: 36px;
    width: 284px;
    font-size: 12px;
    border: unset;
    border-radius: 10px;

    &_disabled {
        color: #B4B4B4;
        background: #EEEEEE;
    }
}

.rectangle {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background: #FF8484;
}

::placeholder {
    font-family: 'Source Sans Pro', normal;
    font-weight: 400;
    font-size: 12px;
    color: #B4B4B4;
}
</style>
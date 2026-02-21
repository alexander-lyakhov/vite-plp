import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    'products-in-cart': 'Products in cart',
    'total-price': 'Total price',
    'cart-is-empty': 'Cart is empty',
    'price': 'Price',
    'total':'Total',
    'reset':'Reset',
    'fetching-data':'Fetching data'
  },
  ru: {
    'products-in-cart': 'Товаров в корзине',
    'total-price': 'Общая стоимость',
    'cart-is-empty': 'Корзина пуста',
    'price': 'Цена',
    'total':'Итого',
    'reset':'Сброс',
    'fetching-data':'Загрузка данных'
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
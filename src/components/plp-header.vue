<template>
  <header>
    <div class="stat products">
      {{ $t("products-in-cart") }}:
      <span class="value">{{ totalProducts }}</span>
    </div>

    <div class="stat total-price">
      {{ $t("total-price") }}:
      <span class="value">{{ totalPrice }} $</span>
    </div>
    
    <div v-if="!totalProducts" class="stat cart-empty">{{ $t('cart-is-empty') }}</div>
    
    <div class="languages">
      <a href="#" ref="en" @click.prevent="setLocale($event, 'en')" class="selected">en</a>
      <a href="#" ref="ru" @click.prevent="setLocale($event, 'ru')">ru</a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { totalProducts = 0, totalPrice = 0 } = defineProps<{
    totalProducts: number;
    totalPrice:    number;
  }>();

  const { locale } = useI18n();

  function setLocale(e: Event, lang: 'en' | 'ru') {
    const el = e.target as HTMLElement;

    if (el && el.parentNode) {
      el.parentNode.querySelector('.selected')!.classList.remove('selected');
      el.classList.add('selected');
    }
    locale.value = lang;
  }
</script>

<style lang="scss" scoped>

$header-background:                     #404040;
$header-shadow:                         0 3px 8px rgba(0,0,0,0.25);
$header-stat-text-color:                #eee;
$header-stat-border-color:              #c93;
$header-empty-message-text-color:       #f99;
$header-languages-text-color:           #a0a0a0;
$header-languages-text-color--selected: #eee;

header {
  font-size: 1rem;
  background: $header-background;
  box-shadow: $header-shadow;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  .stat {
    margin: 0 0 0 20px;

    .value {
      color: $header-stat-text-color;
      border: 2px solid $header-stat-border-color;
      border-radius: 4px;
      text-align: center;
      min-width: 64px;
      display: inline-block;
      margin: 0 8px;
      padding: 4px 6px;
    }

    &.cart-empty {
      color: $header-empty-message-text-color;
    }
  }

  .languages {
    margin: 0 20px 0 auto;

    a {
      color: $header-languages-text-color;
      padding: 0 .25rem;

      &.selected {
        color: $header-languages-text-color--selected;
      }
    }
  }
}
</style>
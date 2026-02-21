<template>
  <div class="counter" :class="{ selected: model > 0 }">
    <button class="arrow decrease" @click.stop="decrease" />
    <div class="value" :class="{ maximum: model === max }" v-wheel="mouseWheelHandler">{{ model }}</div>
    <button class="arrow increase" @click.stop="increase" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    max: number;
  }>();

  const model = defineModel<number>({ required: true });

  const vWheel = {
    mounted: function(el: HTMLElement, binding: Record<string, any>) {
      el.addEventListener('wheel', binding.value.bind(this));
      el.addEventListener('DOMMouseScroll', binding.value.bind(this));
    }
  }
  // ================================================================================
  // @@@ [ M ] decrease
  // ================================================================================
  function decrease() {
    if (model.value > 0) {
      model.value--;
    }
  }

  // ================================================================================
  // @@@ [ M ] increase
  // ================================================================================
  function increase() {
    if (model.value < props.max) {
      model.value++;
    }
  }

  // ================================================================================
  // @@@ [ M ] mouseWheelHandler
  // ================================================================================
  function mouseWheelHandler(e:WheelEvent) {
    e.preventDefault();
    e.stopPropagation();

    var direction = e.deltaY || e.detail;

    Math.abs(direction) === 120 ?
      direction > 0 ? increase() : decrease():
      direction < 0 ? increase() : decrease();
  }
</script>

<style lang="scss" scoped>

$cart-counter-background:              #e0e0e0;
$cart-counter-background--selected:    #ec9;
$cart-counter-border-color:            #999;
$cart-counter-arrow-color:             #404040;
$cart-counter-value-text-color:        #000;
$cart-counter-value-background:        #fff;
$cart-counter-value-background--max:   #fee;
$cart-counter-value-border-color:      #808080;
$cart-counter-value-border-color--max: #f00;

.counter {
  background: $cart-counter-background;
  border: 1px solid $cart-counter-border-color;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    background: $cart-counter-background--selected;
  }

  button {
    background: transparent;
    border: none;
    outline: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.2s;

    &:after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      position: relative;
    }

    &.decrease {
      &:after {
        border-left: 4px solid $cart-counter-arrow-color;
        border-top: 4px solid $cart-counter-arrow-color;
        transform: rotate(-45deg);
      }
      &:hover {
        transform: translate(-4px);
      }
    }

    &.increase {
      &:after {
        border-right: 4px solid $cart-counter-arrow-color;
        border-top: 4px solid $cart-counter-arrow-color;
        transform: rotate(45deg);
      }
      &:hover {
        transform: translate(4px);
      }
    }
  }

  .value {
    font-size: 1rem;
    color: $cart-counter-value-text-color;
    background: $cart-counter-value-background;
    border: 1px solid $cart-counter-value-border-color;
    border-radius: 4px;
    width: 40%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    cursor: n-resize;

    &.maximum {
      background: $cart-counter-value-background--max;
      border: 1px solid $cart-counter-value-border-color--max;
    }
  }
}
</style>

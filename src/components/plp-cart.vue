<template>
	<div class="cart">
		<div class="title">
			{{cart.title}}
		</div>

		<div class="image">
			<img :src="cart.src" />
			<div class="img-cover" />
		</div>

		<div class="price">
			{{ $t('price') }}: {{cart.price}}$
		</div>

		<plp-cart-counter
			v-model="amount"
			:max="cart.limit || 1"
			@update:modelValue="onChange"
		/>

		<div class="price-total">
			<span>{{ $t('total') }}:</span>
			<span>{{ totalPrice }} $</span>
		</div>

		<div class="reset-wrapper" :class="{isActive: isResetActive}">
			<button class="reset" @click.stop="reset" :disabled="!amount">{{ $t('reset') }}</button>
		</div>
	</div>
</template>

<script lang="ts">
	export type Cart = {
		id:          string;
		description: string;
		limit:       number;
		price:       number | string;
		quantity:    number;
		src:         string;
		title:       string;
	};
</script>

<script setup lang="ts">
	import { ref, computed, onMounted } from 'vue';
	import PlpCartCounter               from './plp-cart-counter.vue'
	
	const props = defineProps<{
		cart: Cart;
	}>();

	const emit = defineEmits<{
		'cart-update': [ price: number ];
		'cart-reset': [
			quantity: number,
			price:    number,
		]
	}>();

	const amount = ref<number>(0);
	const totalPrice = ref<number>(0);

	onMounted(() => {
		amount.value = props.cart.quantity;
	})

	// ================================================================================
	// @@@ [ M ] onChange
	// ================================================================================
	function onChange(value: number) {
		const oldPrice = totalPrice.value;
		const newPrice = value * +props.cart.price;

		totalPrice.value = newPrice;
		emit('cart-update', newPrice > oldPrice ? props.cart.price : -props.cart.price);
	}

	// ================================================================================
	// @@@ [ M ] reset
	// ================================================================================
	function reset() {
		emit('cart-reset', amount.value, totalPrice.value);

		amount.value     = 0;
		totalPrice.value = 0;
	}

</script>

<style lang="scss" scoped>
.cart {
	background: $cart-background;
	box-shadow: $cart-shadow;
	width: 288px;
	margin: 0 auto 1rem;
	padding: 8px;

	.title {
		font-family: georgia;
		font-size: 1.25rem;
		color: $cart-text-color;
		background: $cart-title-background;
		letter-spacing: 1px;
		text-align: center;
		height: 64px;
		line-height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}

	.image {
		position: relative;
		padding: .5rem;

		img {
			width: 100%;
			height: 240px;
			object-fit: scale-down;
		}

		.img-cover {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	.price {
		font-size: 1.25rem;
		color: #fff;
		background: #000;
		text-align: center;
		padding: 0.5rem 0;
	}

	.price-total {
		font-size: 1rem;
		color: #404040;
		background: #fff;
		border: 1px solid #a0a0a0;
		border-radius: .25rem;
		text-align: center;
		display: flex;
		justify-content: space-between;
		margin: .5rem 0;
		padding: .5rem .5rem;
	}

	.reset-wrapper {
		background: #e0e0e0;
		padding: 0.5rem;
		text-align: center;

		&.isActive {
			background: #FFCDD2;
		}

		button {
			&.reset {
				font-size: 1rem;
				color: #fff;
				background: #E53935;
				box-shadow: 0 2px 4px rgba(0,0,0,0.4);
				border: none;
				border-radius: 8px;
				outline: none;
				height: 32px;
				line-height: 32px;
				padding: 0 1.5rem;
				cursor: pointer
			}

			&[disabled] {
				color: #e0e0e0;
				background: #808080;
				cursor: default;
			}
		}
	}
}
</style>

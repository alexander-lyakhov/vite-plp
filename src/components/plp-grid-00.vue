<template>
	<div class="grid">
		<div class="grid-cell" v-for="(cart, index) in products" :key="index">
			<plp-cart :cart="cart" />
		</div>
	</div>
</template>

<script setup lang="ts">
	// @@@ @js@
	import { ref }       from 'vue';
	import PlpCart       from '@/components/plp-cart.vue';
	import type { Cart } from '@/components/plp-cart.vue';

	const props = defineProps<{
		products: Cart[];
	}>();

	// @@@ data definition
	//--------------------------------------------------------------------------

	//--------------------------------------------------------------------------
	// end of data definition

	/***
	**** @@@ Hooks
	***/

	/***
	**** @@@ Computed
	***/

	/***
	**** @@@ Methods
	***/
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */

.transparent {
	opacity: 0;
}

.message {
	text-align: center;
	letter-spacing: 2px;
	line-height: 6rem;
	width: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.msg-info {
	font-size: 2rem;
	background: #606080;
}

.msg-error {
	font-size: 1.5rem;
	background: #804040;
}

.fade-out {
	animation: fade-out .25s;
}

@keyframes fade-out {
	from  {
		opacity: 1;
		margin-top: 0;
	}
	to {
		opacity: 0;
		margin-top: -100px;
	}
}

.fade-in {
	animation: fade-in .25s;
}

@keyframes fade-in {
	from  {
		opacity: 0;
		margin-top: 100px;
	}
	to {
		opacity: 1;
		margin-top: 0;
	}
}

.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 80px;

	.grid-cell {
		min-width: 20%;
	}
}

@media screen and (max-width: 1600px) {
	.grid .grid-cell {
		min-width: 25%;
	}
}

@media screen and (max-width: 1280px) {
	.grid .grid-cell {
		min-width: 33.33%;
	}
}

@media screen and (max-width: 930px) {
	.grid .grid-cell {
		min-width: 50%;
	}
}</style>

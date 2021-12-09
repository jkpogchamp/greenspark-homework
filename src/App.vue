<template>
	<product-list />
</template>

<script>
import ProductList from './components/product-list/product-list.vue'

export default {
	components: {
		ProductList
	}
}
</script>

<style lang="scss">
	@import "styles/custom-media.scss";

	#app {
		padding: 48px 22px 0;

		@include md {
			align-items: center;
			display: flex;
			height: 100vh;
			justify-content: center;
		}
	}
</style>
<style src="./styles/normalize.scss" lang="scss"></style>
<style src="./styles/variables.scss" lang="scss"></style>
<style src="./components/color-picker.scss" lang="scss"></style>
<style src="./components/switch.scss" lang="scss"></style>
<style src="./components/checkbox.scss" lang="scss"></style>

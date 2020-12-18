<template>
	<div class="car">
        <h2>购物车</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Home',
	components: {},
	setup() {
		const searchValue = ref('')
		return { searchValue }
	},
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
.home {
	padding: 0 px2rem(10);
}
</style>

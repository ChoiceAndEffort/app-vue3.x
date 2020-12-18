<template>
	<div class="car">
		<van-nav-bar
			title="购物车"
			right-text="管理"
			@click-right="onClickRight"
		/>
        
		<footer-taber :tabIndex="1"></footer-taber>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Home',
	components: {},
	setup() {
		const searchValue = ref('')
		const onClickRight = () => {
			console.log(555555555)
		}
		return { searchValue, onClickRight }
	},
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
.home {
	padding: 0 px2rem(10);
}
</style>

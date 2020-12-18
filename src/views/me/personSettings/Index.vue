<template>
	<div class="settings">
		<van-nav-bar title="设置" left-arrow  @click-left="onClickLeft" />
	</div>
</template>
<script lang="ts">
import router from '@/router'
export default {
	setup() {
		const onClickLeft = () => {
			router.go(-1)
		}
		return { onClickLeft }
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
.settings {
}
</style>

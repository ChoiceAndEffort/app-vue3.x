<template>
	<div id="nav">
		<van-tabbar v-model="active">
			<van-tabbar-item
				v-for="item in tabList"
				:icon="item.icon"
				:key="item"
				>{{ item.label }}
			</van-tabbar-item>
			<!-- <van-tabbar-item icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
		</van-tabbar>
	</div>
	<router-view />
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
	setup() {
		const tabList = ref([
			{
				label: '首页',
				icon: 'home-o',
			},
			{
				label: '购物车',
				icon: 'shopping-cart-o',
			},
			{
				label: '我的',
				icon: 'friends-o',
			},
		])
		const active = ref(0)
		return { tabList, active }
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
::v-deep .van-tabbar-item {
	font-size: px2rem(24);
	// line-height: 2;
}
::v-deep .van-tabbar {
	height: px2rem(80);
	padding: px2rem(5) 0;
}
</style>

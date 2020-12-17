<template>
	<div id="nav">
		<van-tabbar v-model="active">
			<van-tabbar-item
				v-for="item in tabList"
				:icon="item.icon"
				:key="item"
                :badge="item.badge"
				>{{ item.label }}
			</van-tabbar-item>
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
				name: '',
				icon: 'home-o',
			},
			{
				label: '购物车',
				name: '',
                icon: 'shopping-cart-o',
                badge:"5"
			},
			{
				label: '我的',
				name: '',
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
</style>

<template>
	<div id="nav">
		<van-tabbar v-model="active" @change="handlerChange">
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
import router from '@/router'
export default {
	setup() {
		const tabList = ref([
			{
				label: '首页',
				name: 'home',
				icon: 'home-o',
			},
			{
				label: '购物车',
				name: 'car',
				icon: 'shopping-cart-o',
				badge: '5',
			},
			{
				label: '我的',
				name: 'me',
				icon: 'friends-o',
			},
		])
		const active = ref(0)
		const handlerChange = (index: string) => {
			router.push({ name: tabList.value[index].name })
		}
		return { tabList, active, handlerChange }
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
</style>

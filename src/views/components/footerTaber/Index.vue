<template>
	<div class="footer">
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
import { reactive, toRefs } from 'vue'
import router from '@/router'
export default {
	name: 'FooterTaber',
	props: ['tabIndex'],
	setup(props) {
		const tabList = reactive([
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
        const { tabIndex } = toRefs(props)
         // 这个props是一个响应式的Proxy对象，不可以解构，解构后悔失去响应，如果要用解构的方式，要用toRefs
		const active = tabIndex.value
		const handlerChange = (index: string) => {
			router.push({ name: tabList[index].name })
		}
		return { tabList, active, handlerChange }
	},
}
</script>
<style lang="scss" scoped></style>

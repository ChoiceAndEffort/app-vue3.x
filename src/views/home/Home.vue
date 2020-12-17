<template>
	<div class="home">
		<van-search
			v-model="searchValue"
			shape="round"
			background="#fff"
			placeholder="请输入搜索关键词"
		/>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
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

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
		border-radius: px2rem(5);
	}
}
</style>

<template>
	<div class="home">
		<div class="seach-header">
			<van-search
				v-model="searchValue"
				shape="round"
				background="#fff"
				placeholder="请输入搜索关键词"
			/>
		</div>
		<div class="content">
			<van-swipe
				class="my-swipe"
				:autoplay="3000"
				indicator-color="white"
			>
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<div class="goods-list">
				<ul>
					<li v-for="item in goodsList" :key="item.name">
						<div class="top">
							<img :src="item.url" alt="" srcset="" />
						</div>
						<div class="middle">
							{{ item.name }}
						</div>
						<div class="bottom">
							￥{{ item.price }}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<footer-taber :tabIndex="0"></footer-taber>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Home',
	components: {},
	setup() {
		const searchValue = ref('')
		const goodsList = ref([
			{
				finalPrice: 89,
				id: '16055831906132090',
				marketingVos: null,
				name: '泰国进口金枕头榴莲(2kg)',
				price: 89,
				url:
					'https://wanshunfu-1301582899.cos.ap-guangzhou.myqcloud.com///e43101683bd6274bd2025b6f4cd50b4c.jpg',
			},
			{
				finalPrice: 7,
				id: '16001697379911520',
				marketingVos: null,
				name: '76(767)',
				price: 7,
				url:
					'https://wanshunfu-1301582899.cos.ap-guangzhou.myqcloud.com///07fc7ed86a0e0345e2056f37097da06b.png',
			},
			{
				finalPrice: 0.01,
				id: '16020608078371710',
				marketingVos: null,
				name: 'test字画新增(20cm*20cm)',
				price: 0.01,
				url:
					'https://wanshunfu-1301582899.cos.ap-guangzhou.myqcloud.com///f1c3f5f9bfd0d233b30f26e7b199670a.png',
			},
			{
				finalPrice: 18.8,
				id: '1597749085670360',
				marketingVos: null,
				name:
					'旺旺挑逗豌豆45g*4袋 脆皮青豌豆原味小青豆 坚果炒货休闲零食品   单运费测试(挑逗50g*3)',
				price: 18.8,
				url:
					'https://wanshunfu-1301582899.cos.ap-guangzhou.myqcloud.com///fa90f9ea47029d19a1cdaed741993d371597741902(1).jpg',
			},
		])
		return { searchValue, goodsList }
	},
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
.home {
	.seach-header {
		width: 100%;
		position: fixed;
		z-index: 5;
		left: 0;
		top: 0;
	}
	.my-swipe .van-swipe-item {
		margin-top: px2rem(80);
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
		border-radius: px2rem(5);
	}
	.content {
		padding: 0 px2rem(10);
		height: px2rem(1000);
		.goods-list {
			width: 100%;
			li {
				width: 48%;
				float: left;
				height: px2rem(180);
				border: px2rem(0.5) solid #ccc;
                margin-top: px2rem(10);
				.top {
					width: 100%;
					img {
						width: 100%;
						height: px2rem(100);
					}
				}
				.middle {
					line-height: px2rem(20);
					width: 100%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
                .bottom{
                    line-height: px2rem(40);
                }
			}
			li:nth-child(2n) {
				margin-left: px2rem(10);
			}
		}
	}
}
</style>

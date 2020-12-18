<template>
	<div class="about">
		<header>
			<div class="top">
				<van-icon
					name="setting-o"
					@click="handlerSetting"
					class="icon"
				/>
				<van-icon name="chat-o" @click="handlerMessage" class="icon" />
			</div>

			<img
				src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1220476279,33108505&fm=26&gp=0.jpg"
				alt=""
				srcset=""
			/>
		</header>
		<footer-taber :tabIndex="2"></footer-taber>
	</div>
</template>
<script lang="ts">
import router from '@/router'
export default {
	setup() {
		const handlerSetting = () => {
			router.push({ name: 'personSettings' })
		}
		return { handlerSetting }
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/hotcss/px2rem.scss';
.about {
	padding: px2rem(10);
	.top {
		text-align: right;
		.icon {
			margin-right: px2rem(10);
		}
	}
	img {
		width: px2rem(40);
		height: px2rem(40);
	}
}
</style>

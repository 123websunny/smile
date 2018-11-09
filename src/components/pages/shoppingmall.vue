<template>
	<div>
		<div class="search-bar">
			 <van-row class="test-row">
				<van-col span="3">
					<img :src="locationIcon" class="location-icon" width="75%" />
				</van-col>
				<van-col span="16">
					<input type="text" class="search-input" />
				</van-col>
				<van-col span="5">
					<van-button size='mini'>查找</van-button>
				</van-col>
			</van-row>
		</div>
		<!--swiper area-->
		<div class="swiper-area">
			<van-swipe :autoplay="1000">
				<van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
					<img v-lazy="banner.imageUrl" width="100%" alt="" />
				</van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>   
	export default{
		data(){
			return{
				msg:'shopping mall',
				locationIcon:require('../../assets/images/location.png'),
				bannerPicArray:[
						{imageUrl:require('../../assets/images/banner01.jpg')},
                		{imageUrl:require('../../assets/images/banner02.jpg')},
                		{imageUrl:require('../../assets/images/banner03.jpg')},
				]
			}
		}
	}
</script>

<style scoped>
	.search-bar{
		height:2.2rem;
		background-color:#e5017d;
		line-height:2.2rem;
		overflow: hidden;
	}
	.search-input{
		width:100%;
		height:1.3rem;
		border-top:0px;
		border-left:0px;
		border-right:0px;
      	border-bottom: 1px solid #fff !important ;
      	background-color: #e5017d;
      	color:#fff;
	}
	.location-icon{
		padding-top:.2rem;
		padding-left:.3rem;
	}
	.swiper-area{
		clear:both;
		max-height:15rem;
		overflow: hidden;
	}
</style>         
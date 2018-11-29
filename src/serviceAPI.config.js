const BASEURL="https://www.easy-mock.com/mock/5bd12a62f9c19d2b70712f34/smile/"
const LOCALURL="http://localhost:3000/"
const URL={
	getShoppingMallInfo:BASEURL+'index',
	getGoodsInfo:BASEURL+'getGoodsInfo',
	registerUser:LOCALURL+'user/register',//用户注册接口
	login:LOCALURL+'user/login',//用户登录接口
	getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',//获取商品详情
	getCategoryList:LOCALURL+'goods/getCategoryList',//获取商品列表
	getCategorySubList:LOCALURL+'goods/getCategorySubList',//获取商品列表
	getGoodsListByCategorySubID:LOCALURL+'goods/getGoodsListByCategorySubID',//得到商品小类信息
}

module.exports=URL
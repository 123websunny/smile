const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"
const glob=require('glob')
const {resolve}=require('path')

exports.initSchemas=()=>{
	glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}


exports.connect=()=>{
//	链接数据库
	mongoose.connect(db)
	let maxConnectTimes=0
	
	return new Promise((resolve,reject)=>{
		//	增加数据库监听事件
			mongoose.connection.on('disconnected',()=>{
				consloelog("数据库断开")
				if(maxConnectTimes<=3){
					maxConnectTimes++
					mongoose.connect(db)
				}else{
					reject()
					throw new Error('数据库出现问题，程序无法确定，请人为处理....')
				}
				
			})
		//	数据库出现错误的时候
			mongoose.connection.on('error',(err)=>{
				console.log("数据库错误")
				if(maxConnectTimes<=3){
					maxConnectTimes++
					mongoose.connect(db)
				}else{
					reject(err)
					throw new Error('数据库出现问题，程序无法确定，请人为处理....')
				}
			})
		//	链接打开的时候
			mongoose.connection.once('open',()=>{
				console.log('mongodb connected successful')
				resolve()
			})
	})
	

}

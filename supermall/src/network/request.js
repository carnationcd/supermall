import axios from "axios"
//1.第一种写法
// export function request(config, success, failure) {
// 	//1.创建axios实例，不要用全局axios
// 	const instance = axios.create({
// 		baseURL: "http://123.207.32.32:8000",
// 		timeout: 5000
// 	})
	
// 	//发送真正的网络请求
// 	instance(config).then(res => {
// 		//console.log(res);
// 		success(res);
// 	}).catch(err => {
// 		//console.log(err);
// 		failure(err);
// 	})
// }

//2.第二种写法
// export function request(config) {
// 	//1.创建axios实例，不要用全局axios
// 	const instance = axios.create({
// 		baseURL: "http://123.207.32.32:8000",
// 		timeout: 5000
// 	})
	
// 	//发送真正的网络请求
// 	instance(config.baseConfig).then(res => {
// 		//console.log(res);
// 		config.success(res);
// 	}).catch(err => {
// 		//console.log(err);
// 		config.failure(err);
// 	})
// }

//3.第三种写法
// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		//1.创建axios实例，不要用全局axios
// 		const instance = axios.create({
// 			baseURL: "http://123.207.32.32:8000",
// 			timeout: 5000
// 		})
		
// 		//发送真正的网络请求
// 		instance(config).then(res => {
// 			resolve(res)
// 		}).catch(err => {
// 			reject(err)
// 		})
// 	})
// }

//4.第四种写法
export function request(config) {
	//1.创建axios实例，不要用全局axios
	const instance = axios.create({
		// baseURL: 'www.blogry.cn/test/index',
		// baseURL: 'www.blogry.cn/test/blog?title=我的编程经历'
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000000
	})
	//2.axios的拦截器
	//2.1.请求拦截的作用
	instance.interceptors.request.use(config => {
		// console.log(config);
		//什么情况下使用拦截器
		//1.比如config中的一些信息，不符合服务器的要求，需要进行处理
		//2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标（例如：请求中选中的进度圆圈）
		//在这里show()，在响应拦截器中隐藏
		//3.某些网络请求，必须携带一些特殊的信息（比如登陆，需要携带token）
		//拦截以后，必须返回，否则外部拿不到该信息
		return config;
	}, err => {
		console.log(err);
	});
	//2.2.响应拦截
	instance.interceptors.response.use(res => {
		// console.log(res);
		return res.data;
	}, err => {
		console.log(err);
	});
	//3.发送真正的网络请求
	return instance(config);
}

export function instance2() {
	
}
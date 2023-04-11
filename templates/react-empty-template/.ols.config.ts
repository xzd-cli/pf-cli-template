module.exports = {
	// 类型：项目 | 组件
	type: '<%= type %>',
	// 配置全局变量
	define: {
	},
	// webpack配置，可以是一个对象，或者一个函数
	configureWebpack(config, merge) {
	},
	// 链式操作webpack配置
	chainWebpack(chian, config) {
	},
	// 插件，是一个个函数组成的数组Array<(ctx) => void>，插件默认透出ctx上下文，用户可以通过上下文完成一些操作
	plugins: []
};

/*
* @Author: 断天涯
* @Date:   2017-07-02 08:41:15
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 10:00:28
*/

'use strict';
define(function(){
	return {
		getQueryObj:function(){
			// 获取地址栏中的传递的参数
			var querySteing = location.search;
			// 提取？之后的地址
			querySteing = querySteing.slice(1);
      // 定义一个对象，把我们需要是数据放进去
			var obj ={};
			// 
			var kvPairs =querySteing.split("&");
			// 利用一个for循环来获取我们所需要的键值对
			for(var i=0;i<kvPairs.length;i++){
				var kvPair = kvPairs[i];
				var kvArr = kvPair.split("=");
				obj[kvArr[0]] = decodeURI(kvArr[1]);
			}
			return obj;
		},
		getQuery:function(key){
			return this.getQueryObj()[key];

		}
	}
})
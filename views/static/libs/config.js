/*
* @Author: 断天涯
* @Date:   2017-06-29 16:00:50
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 10:56:25
*/

'use strict';
require.config({
	baseUrl:"/views",
	paths:{
		"jquery":"assets/jquery/jquery.min",
		"form":"assets/jquery-form/jquery.form",
		"cookie":"assets/jquery-cookie/jquery.cookie",
		"template":"assets/artTemplate/template",
		"bootstrap":"assets/bootstrap/js/bootstrap.min",
		"util":"static/js/util"
	},
	shim:{

		"bootstrap":{
			deps:["jquery"]
		}
	}
})
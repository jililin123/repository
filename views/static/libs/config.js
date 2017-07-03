/*
* @Author: 断天涯
* @Date:   2017-06-29 16:00:50
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 21:59:19
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
		"util":"static/js/util",
		"datepicker":"assets/bootstrap-datepicker/js/bootstrap-datepicker.min",
		"zh-CN":"assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
		"validate":"assets/jquery-validate/jquery-validate.min",
		"ckeditor":"assets/ckeditor/ckeditor",
		"region":"assets/jquery-region/jquery.region"
		
	
	},
	shim:{

		"bootstrap":{
			deps:["jquery"]
		},
		"zh-CN": {
			deps:["datepicker"]
		},
		"validate":{
			deps:["jquery"]
		},
		"ckeditor":{
			exports:"CKEDITOR"
		}
	}
})
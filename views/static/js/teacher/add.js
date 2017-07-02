/*
* @Author: 断天涯
* @Date:   2017-07-02 08:24:13
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 19:19:50
*/

'use strict';
define(["jquery","template","util","form"],function($,template,util){
	var query = util.getQueryObj();
	// 如果是编辑部分，那就要获取到id才能获取到数据；
	if(query.id){
		$.ajax({
			url:"/api/teacher/edit",
			type:"get",
			data:{
				tc_id:query.id
			},
			success:function(data){
				console.log(data);
				data.result.title="讲师编辑";
				data.result.btnText="保 存";
				data.result.type="edit";
				var teacherAdd = template("teacherAdd",data.result);
				$(".teacher").html(teacherAdd);
			}
		})
	} else{
		var html =template("teacherAdd",{
			title:"讲师添加",
			btnText:"添 加",
			type:"add"
		})
		$(".teacher").html(html);
	}

	//给保存按钮点击事件,事件委托
	$(".teacher").on("click","#btnSave",function(){

		var type=$(this).data("type");
		var url="";
		if(type=="edit"){
			url = "/api/teacher/update";
		} else{
			url:"/pai/teacher/add";
		}

		// 表单提交认证；
		$("#teacherform").ajaxSubmit({
			url:url,
			type:"post",
			success:function(data){
				if(data.code ==200){
					location.href = "/teacher/list";
				}
			}
		})

		return false;
	})
})


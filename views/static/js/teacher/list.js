/*
* @Author: 断天涯
* @Date:   2017-06-30 21:31:33
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 08:10:04
*/

'use strict';
define(["jquery","template","bootstrap"],function($,template){
	$.ajax({
		url:"/api/teacher",
        type:"get",
        success:function(data){
          // console.log(data);
          if(data.code==200){
          	var teacherlist=template("teacher-list-tpl",data);
          	$("#teacherlist").html(teacherlist);
          }
       }
	})
	// <!-- 模态框-->
	// 注册点击事件因为是生成的，所以直接给a注册点击事件是不可以的，所以有了事件委托事件
	$("#teacherlist").on("click",".btn-check",function(){
		// 获取上个请求中的id 才能渲染到这个页面上。才能让这个请求获取到对应的书数据：
		// 这边用了自定义属性来获取对应的id值；
		var id = $(this).parent().data("id");
		$.ajax({
			url:"/api/teacher/view",
			type:"get",
			data:{
				tc_id:id
			},
			success:function(data){
				console.log(data);
				if(data.code==200){
					var modal=template("modal",data.result);
					$("#teacherModal").html(modal);
					$("#teacherModal").modal("show");
				}
				
			}
		})
	})

	// 给注销和启用按钮注册点击事件
	$("#teacherlist").on("click",".btn-onoff",function(){
		var id = $(this).parent().data("id");
		var status =$(this).data("status");
        var $that = $(this);
		$.ajax({
			url:"/api/teacher/handle",
			type:"post",
			data:{
               tc_id:id,
               tc_status:status
			},

			success:function(data){
              if(data.code==200){
              	// 每次获取用户的时候,都要更新一次用户的信息.
              	$that.data("status",data.result.tc_status);
                
              	if(data.result.tc_status == 1){
              		$that.removeClass('btn-warning');
              		$that.addClass('btn-success');
              		$that.text("启 用");
              	}else{
              		$that.removeClass('btn-success');
              		$that.addClass('btn-warning');
              		$that.text("注 销");
              	}

              }
			}

		})
	})
	
})
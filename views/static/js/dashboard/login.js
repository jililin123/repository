/*
* @Author: 断天涯
* @Date:   2017-06-29 16:01:20
* @Last Modified by:   断天涯
* @Last Modified time: 2017-06-29 16:12:29
*
*
* 
*/
// 获取数据：
      // $(function(){
      //   $("#form").submit(function(){
      //       var name = $("#username").val();
      //       var pass = $("#password").val();

      //        //发送ajxa请求：
      //       $.ajax({
      //           url:"/api/login/",
      //           type:"post",
      //           data:{
      //               tc_name:name,
      //               tc_pass:pass

      //           },
      //           success:function(data){
      //               console.log(data);
      //               if(data.code==200){
      //                   // 把从数据库获取到的数据存放在cookie里面
      //               $.cookie("userinfo",JSON.stringify(data.result),{path:"/"});
      //               location.href = "/";

      //               }
                    
      //           }
      //       });

      //       return false;
      //   })
      // })

    //   // 第二种方法：

'use strict';
define(["jquery","form","cookie"],function($){

	$("#form").submit(function(){
        $(this).ajaxSubmit({
            url:"/api/login",
            type:"post",
            success:function(data){
                console.log(data);
                if(data.code == 200){
                    $.cookie("userinfo",JSON.stringify(data.result),{path:"/"});
                    location.href="/"; 

                }
            }
          
         })
         return false;
      });

})

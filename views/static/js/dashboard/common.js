
define(["jquery","template","cookie"],function($, template){
      $(function(){
        // 如果是登录页的时候，就不会执行下面的代码，这是做不是登录页的代码处理
      	if("/dashboard/login"!= location.pathname){
        // 如果一开始不是在登录页面的时候，我们要做跳转到登录页面上去，
        // 如果一开始不登录的话，那就当前的这个页面是没有phpsessid的，所以只要判断没有
        // PHPSESSID没有就可以让当前的页面跳转到登录页面；
      		if (!$.cookie("PHPSESSID")){
            
      			location.href="/dashboard/login";

      		}else {
      		    var info = JSON.parse($.cookie("userinfo"));
                var str = template("login-info",info);
                $("#userinfo").html(str);
      		}	
      	}

      	// 退出功能：退出功能是需要发送ajax请求的
      	$("#logout").click(function(){

      		$.ajax({
      			url:"/api/logout",
      			type:"post",
      			success:function(data){
      				// console.log(data);
      				location.href="/dashboard/login";	
      			}
      		})
      	})

      	// 侧边栏的功能：
      	$(".navs>ul>li").click(function(){
      		$(this).children('a').addClass('active');
      		$(this).siblings().children('a').removeClass('active');
      	})

      	// 显示最后的一个课程管理的二级菜单
      	$(".navs>ul>li>ul").parent().click(function(){
      		$ul = $(this).children('ul');
      		$ul.slideToggle();

      		// 在点击二级菜单的a时候，然后点击ul中的a的是，要让上一级的a不变色：
      		if($ul.find("a.active").length>0){
      			$(this).children('a').removeClass("active");

      		}
      		
      	})
      	
       // 点击那个让当前的背景色变化：
        $(".navs a").each(function(index, ele){
           
            // 判断a的href是否在是在pathname里面
            if($(ele).attr("href")==location.pathname){
            	$(ele).addClass('active');
            	$(ele).parent().parent().slideDown(); 
            }
       	
        });
    });   

})
 
       
    

    

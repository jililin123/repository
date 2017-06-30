

define(["jquery","template","cookie"],function($, template){


      $(function(){

      	if("/dashboard/login"!= location.pathname){
      		 var info = JSON.parse($.cookie("userinfo"));
        console.log($.cookie("userinfo"));

        var str = template("login-info",info);
      
        $("#userinfo").html(str);


      	}

       
      });   

})
 
       
    

    


define(["jquery", "template"],function($, template){
    $.ajax({
        url:"/api/course",
        success:function(data){
          console.log(data);
          if(data.code==200){
              var html = template("courselist-tpl",data);
              $(".courses").html(html);
          }
        }
    })

})
    
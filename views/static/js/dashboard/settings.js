
define(["jquery","ckeditor","datepicker","zh-CN","region"],function($,CKEDITOR){
   $("#time").datepicker({
       format:"yyyy-mm-dd",
       language:"zh-CN"
   });

   $("#join-date").datepicker({
       format:"yyyy-mm-dd",
       language:"zh-CN"
   })
//    设置一个文本域
CKEDITOR.replace("editor",{
   toolbarGroups:[
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ]},
        { name: 'styles' },
        { name: 'colors' },
        { name: 'about' }
    ]
 })

 //设置一个省市区的样式
 
 $("#region").region({
     url:"/views/assets/jquery-region/region.json"
 })


})
   


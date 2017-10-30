$("document").ready(function()
  {
     $("#Button").click(function()
     {
         $.ajax(
         {
             type: 'GET',
             url: 'request.php',
             data:
             {
                 q: 'definition'
             },
             success:function(data)
             {
             alert(data);
             }
         });
     });
 });

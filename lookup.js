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
                 q: $("#word").val()
             },
             success:function(data)
             {
             $("#result").html(data)
             }
         });
     });
 });

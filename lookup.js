/*global $*/

$("document").ready(function()
  {
     $("#Button").click(function()
     {
         $.ajax(
         {
             type: 'GET',
             url: 'request.php',
             dataType: "html",
             data:
             {
                 q: $("#word").val()
             },
             success:function(data)
             {
                $("#result").html(data);
             }
        });
     });

     $("#Button2").click(function()
       {
         $.ajax(
         {
             type: 'GET',
             url: 'request.php',
             data:
             {
               q: "&all=true"
             },
             success: function(data)
             {
                 var meaning = $(data).find('definition');
                 $("#result").html("");
                 $("#result").append('<ol></ol>');
                 $(meaning).each(function()
                 {
                     var Result = '<h3>'+$(this).attr('name')+'</h3>';
                     Result += '<p>'+$(this).text()+'</p>';
                     Result += '<p>'+"---"+$(this).attr('author')+'</p>';
                     $("#result ol").append('<li>'+Result+'</li>');
                 });
            }
      });
   });
})
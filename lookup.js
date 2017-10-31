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

     $("#Button2").click(function(e)
       {
        e.preventDefault();
         var URL = "https://info2180-lab6-kimarinelson77109.c9users.io/request.php?q=&all=true";
         $.ajax(URL,
         {
             type: 'GET',
             dataType: "xml",
         }).done(function(data){
             var meaning = $(data).find('definition');
             $("#result").html("");
             $("#result").append('<ol></ol>');
             
             $(meaning).each(function(){
                 var Result = '<h3>'+$(this).attr('name')+'</h3>';
                 Result += '<p>'+$(this).text()+'</p>';
                 Result += '<p>'+"---"+$(this).attr('author')+'</p>';
                 $("#result ol").append('<li>'+Result+'</li>');
             });
         });
    });
});
$().ready(function(){
  var color = "白色";
  $(".col").css("opacity","0");
  $(".hint").text("現在該"+color+"下");
  
  $(".col").click(function(){
    $(this).css("opacity","1");
    $(this).addClass(color);
    if(color==="白色"){
      color="黑色";
    }
    else{
      color="白色";
    }
    $(".hint").text("現在該"+color+"下");
  });
  $("#restart").click(function(){
    $(".col").css("opacity","0");
    color = "白色";
     $(".hint").text("現在該"+白色color+"下");
    $(".col").removeClass("白色");
    $(".col").removeClass("黑色");
  });
});
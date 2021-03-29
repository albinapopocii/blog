// this function in used for vacancies section
// this function shows three other vacancies card everytime you click button 'See More'
$(document).ready(function(){
  $(".work-card").slice(0,3).show();
  $("#seeMore").click(function(e){
    e.preventDefault();
    $(".work-card:hidden").slice(0,3).fadeIn("slow");
    if($(".work-card:hidden").length == 0){
      $("#seeMore").fadeOut("slow");
    }
  });
});


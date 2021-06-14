// Function to make the collapsible navbar collapse when not in focus (blur)
$(function () {


  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

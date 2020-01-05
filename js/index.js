$(document).ready(function(){
    /* **** Fix NAvbar **** */
   /* $(document).scroll(function(){
        var scrollTopSize = $(this).scrollTop(); 
        if(scrollTopSize > 65 ){
            $("#navbar").addClass("stickyNavbar", 300).fadeIn();
        }
        else{
            $("#navbar").removeClass("stickyNavbar");
        }
    }) */

    /* ****  Show Modal   ****** */
    $("#myModal").modal('show');
    
    /* ******* Scroll To Top *********** */
    $(document).scroll(function() {
        var sftop = $(this).scrollTop();
        if (sftop > 400) {
          $("#totop").css("display", "inline");
        } else {
          $("#totop").css("display", "none");
        }
      });
    
      // go to top when click on to top button
      $("#totop").click(function() {
        $("html").animate({ scrollTop: 0 }, 1000);
      });

})
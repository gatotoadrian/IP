$(document).ready(function(){
  $("img").click(function(){
    $("this").show();
  });

});

$(document).ready(function(){
    $('.design-des, .dev-des, #product').hide()
    // toggle between the icons and description elements.
    $(".designiconn").on('click', function (){
        
        $(".designicon").fadeToggle(3000);
        $(".design-des").fadeToggle(3000);
    });
    $(".deviconn").on('click', function (){
        $(".devicon").fadeToggle(3000);
        $(".dev-des").fadeToggle(3000);
    });
    $(".producticonn").on('click', function (){
        $(".producticon").fadeTogg

        Catherine Otondi11:21 PM
$(document).ready(function(){
    $('.design-des, .dev-des, #product').hide()
    // toggle between the icons and description elements.
    $(".designiconn").on('click', function (){
        
        $(".designicon").fadeToggle(3000);
        $(".design-des").fadeToggle(3000);
    });
    $(".deviconn").on('click', function (){
        $(".devicon").fadeToggle(3000);
        $(".dev-des").fadeToggle(3000);
    });
    $(".producticonn").on('click', function (){
        $(".producticon").fadeTogg
Catherine Otondi11:33 PM


.project-overlay> *{
transform: translateY(20px);
transition: transform 0.25s;
}
.project-overlay:hover > *{
    transform: translateY(0);
}
.project-overlay:hover{
opacity:0.8;
}
Catherine Otondi11:50 PM
 $('#form').on('submit', function (e) {
            e.preventDefault()

    $("#submit").click(function(){
        alert("We have received your message. Thank you for contacting us.");
    });
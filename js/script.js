// $(document).ready(function(){
//   $("img").click(function(){
//     $("this").show();
//   });

// });

$(document).ready(function(){
    $('.designs, .dev, #pro').hide()
    $(".icon1").on('click', function (){
        
        $(".design").fadeToggle(3000);
        $(".designs").fadeToggle(3000);
    });
    $(".article5").on('click', function (){
        $(".development").fadeToggle(3000);
        $(".dev").fadeToggle(3000);
    });
    $(".article6").on('click', function (){
        // $(".product").fadeToggle(3000)
        $("#pro").fadeToggle(3000)

  $('#form').on('submit', function (e) {
            e.preventDefault()

    $("#submit").click(function(){
        alert("We have received your message. Thank you for contacting us.");
    });
  });
});
});
                       
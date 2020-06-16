
$("#sidebar-btn").click(function(){
    $(".contenido").css({
        "background-color" : "rgb(241, 240, 240)",
        "-webkit-filter" : "contrast(50%)",
        "filter" : "contrast(50%)"
    })
    $("#sidebar").css({
        display: "block",
        "transition": ".5s linear"
    });
});

$("#sidebar-btn-2").click(function(){
    $("#sidebar").css({
        display: "none",
    });
    $(".contenido").css({
        "background-color" : "initial",
        "-webkit-filter" : "none",
        "filter" : "none"
    })
});
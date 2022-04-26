
$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();

$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".start").hide();
});

$(".no-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});


$(".secondImage").click(function() {
$(".Ending-yes").show();
$(".Part-two-yes").hide();
});
    

$(".lastImage").dblclick(function() {
$(".Ending").css("background-color","#F9FCB5");
$(".last-message").text("Surprise!");   
$(".lastImage").attr("src","https://tse4.mm.bing.net/th?id=OIP.1wF6sb0VBxreimCCINhArAHaHY&pid=Api&P=0&w=155&h=154");
$("h2").hide();
$("h3").hide();
    

});
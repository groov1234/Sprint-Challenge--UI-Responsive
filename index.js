window.onload = function() {
    var jumbo = 
    document.getElementById("jumbo");
        TweenLite.to(jumbo, 2, {boxShadow:"0px 0px 20px red", color:"#FC0"});
    var box =
    document.getElementsByName("box");
    TweenLite.from(box, 2, {width:0, height:0});
}
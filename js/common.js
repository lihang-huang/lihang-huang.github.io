var sdelay = 0;

var returnTop = function() {
    window.scrollBy(0, -40); //Only for y vertical-axis
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 10);
    }
}

$(document).ready(function(){
// 鼠标滚轮事件
    $(window).scroll(
        function() {
            if ($(window).scrollTop() > 0) {
                $(".back-to-top").css("visibility", "visible");
            } else {
                $(".back-to-top").css("visibility", "hidden");
            }
        }
    );

    $(".back-to-top").click(returnTop);
});
var sdelay = 0;
var moveUnit = 10;
var pInitial = -200;

var returnTop = function() {
    window.scrollBy(0, -40); //Only for y vertical-axis
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 10);
    }
}

var sideAni = function() {
    pInitial = pInitial + moveUnit;
    $("header .wrap .wrapList").css("right", String(pInitial) + "px");
    if (pInitial < 0) {
        setTimeout("sideAni()", 12);
    }
}

var sideBack = function() {
    pInitial = pInitial - moveUnit;
    $("header .wrap .wrapList").css("right", String(pInitial) + "px");
    if (pInitial > -200) {
        setTimeout("sideBack()", 12);
    }
}


$(document).ready(function() {
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
    $(".mediaTool").click(function() {
        sideAni();
        $(".mon").css("display",'block');
    });

    $(".mon").click(function(){
        $(".mon").css("display","none");
        sideBack();
    });
});

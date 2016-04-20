//轮播图
$(".order li").click(function(){
 $(this).addClass("cur").siblings().removeClass("cur");
  var ind = $(this).index();
   ind ===6 ? "" : $(".banner>ul li").eq(ind).addClass("cur").siblings().removeClass("cur");
});  
function clickAuto(){
    var count = $(".order li").length -2;
    var cur = $(".order .cur").index();
    cur = cur >= count ? 0 : ++cur
    $(".order li").eq(cur).trigger("click");
}
var t = setInterval("clickAuto()", 4000);
$(".banner img").hover(function(){clearInterval(t)},function(){t=setInterval("clickAuto()", 4000);});
//资源页面tab切换
$(".resource .tab a").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    var ind = $(".resource nav").find(".cur").index();
    $(".resource .subpage").eq(ind).addClass("cur").siblings().removeClass("cur");    
});
$(".activities .order a").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    var ind = $(this).index();
    $(".activities .banner img").eq(ind).addClass("cur").siblings().removeClass("cur");
});
$(".hdclub .order a").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    var ind = $(this).index();
    $(".hdclub .cur .tit").eq(ind).addClass("cur").siblings().removeClass("cur");
    $(".hdclub .cur .slides img").eq(ind).addClass("cur").siblings().removeClass("cur");
});
$(".hdclub .subpage .tab").click(function(){
    $(this).parent(".subpage").addClass("cur").siblings(".subpage").removeClass("cur");
    $(".hdclub .cur .order a:first-child").trigger("click");
});
$(".hdclub .pc a").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    var ind = $(this).index();
    $(".hdclub .subpage").eq(ind).addClass("cur").siblings().removeClass("cur");
});

function weixinTip(ele){
    var ua = navigator.userAgent;
    var Browser = /Chrome/.test(ua);
    if(Browser == 0){
        ele.onclick=function(e){
            window.event? window.event.returnValue = false : e.preventDefault();
            document.getElementById('uaTip').style.display='block';
        }
    } else {
        $("#uaApp").click(function () {
            $("#uaApp").attr("style","display:none;");
            $("#ul").attr("style","display:none;");
            $("#id").attr("style","display:block;");
        });
    }
}
var btn1 = document.getElementById('uaApp');
weixinTip(btn1);
$(function(){
    new Clipboard("#copy-id");
});
$("#copy-id").click(function () {
    alert("已拷贝账号至剪切板。") ;
});
$(function(){
    new Clipboard("#copy-pw");
});
$("#copy-pw").click(function () {
   	alert("已拷贝密码至剪切板。") ;
});
$("#refresh").click(function () {
     location.reload();
});
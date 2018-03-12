/**
 * Created by Administrator on 2018/3/12.
 */
(function setFlexible(window,document){
    // 获取像素比，动态设置viewport
    var drp = window.devicePixelRatio;
    var pixelRatio = 1/window.devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,inital-scale='+pixelRatio+',minimum-scale='+pixelRatio+',maximum-scale='+pixelRatio+'"/>');
    document.documentElement.setAttribute('data-drp',drp);
    // 响应式布局，动态设置html的fontSize
    function setHtmlFontSize() {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;// 兼容ie
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        document.documentElement.style.fontSize = w / 10 + 'px';
    }
    setHtmlFontSize()
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, setHtmlFontSize, false);
    if (!document.addEventListener) {
        return;
    }else{
        document.addEventListener('DOMContentLoaded', setHtmlFontSize, false);
    }
}(window,document))


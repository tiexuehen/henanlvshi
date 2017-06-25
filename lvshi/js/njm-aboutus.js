
var a=document.querySelectorAll('.n-nav-list>li');
var b=document.querySelectorAll('.nav-hidden-list');
var c=Array.from(a).slice(2,7)
c.forEach(function (v,i) {
    c[i].onmouseover=function () {
        b[i].style.display='block'
    }
    c[i].onmouseout=function () {
        b[i].style.display='none'
    }
})
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("search_btn"),t=document.getElementById("search_close"),n=document.getElementById("search_ex"),o=document.getElementById("header");document.querySelectorAll(".menu").forEach(function(e){e.addEventListener("mouseover",function(){o.style.height="140px"}),e.addEventListener("mouseout",function(){o.style.height=""})}),e.onclick=function(){n.style.display="block",e.style.display="none"},t.onclick=function(){n.style.display="none",e.style.display="block"};var l=new Swiper(".newSwiper2",{loop:!0,spaceBetween:4,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0}),c=(new Swiper(".newSwiper1",{autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,spaceBetween:4,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:l}}),document.querySelector(".page1")),i=document.querySelector(".page2"),s=document.querySelector(".page3"),r=document.querySelector(".page4"),a=document.querySelector(".page1 .contents02_back"),d=document.querySelectorAll(".page_img"),u=document.querySelector(".contents02");function p(e,t){e.addEventListener("mouseover",function(){d.forEach(function(e){e.style.display="none"}),d[t].style.display="block"})}c.addEventListener("mouseover",function(){a.style.display="none"}),i.addEventListener("mouseover",function(){a.style.display="block"}),s.addEventListener("mouseover",function(){a.style.display="block"}),r.addEventListener("mouseover",function(){a.style.display="block"}),u.addEventListener("mouseout",function(){d.forEach(function(e,t){0===t?(e.style.display="block",a.style.display="block"):(e.style.display="none",a.style.display="none")})}),p(u.querySelector(".page1"),0),p(u.querySelector(".page2"),1),p(u.querySelector(".page3"),2),p(u.querySelector(".page4"),3);new Swiper(".instar",{loop:!0,loopedSlides:5,slidesPerView:5,spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2500,disableOnInteraction:!1}});function y(e){$(e).toggle()}for(var f=document.querySelectorAll(".instar_slide"),m=function(){var e=".instar_slide:nth-child(".concat(v+1,")"),t=".insta_pop_0".concat(v+1);$(e).on("click",function(){y(t)}),$(t).find(".close").on("click",function(){y(t)})},v=0;v<=f.length;v++)m();var b=document.querySelector(".preview_popup"),E=document.querySelectorAll(".product_pop"),h=document.querySelector(".popup_back"),g=document.querySelectorAll(".preview_pop_btn");E.forEach(function(e){e.addEventListener("click",function(){b.style.display="block",h.style.display="block"})}),g.forEach(function(e){e.addEventListener("click",function(){b.style.display="none",h.style.display="none"})}),document.querySelectorAll(".footer_menu_btn").forEach(function(e){var t=e.nextElementSibling;e.addEventListener("click",function(){t.style.display="block"===t.style.display?"none":"block"}),document.addEventListener("click",function(n){e.contains(n.target)||t.contains(n.target)||(t.style.display="none")})}),$(window).scroll(function(){$(this).scrollTop()>=300?$(".btn_top").fadeIn():$(".btn_top").fadeOut()}),$(".btn_top").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},2e3)}),$(function(){var e=$(".contents04 .contents04_tab li"),t=$(".contents04 .contents04_sheet");e.click(function(){e.removeClass("on"),t.removeClass("sheet_on"),$(this).addClass("on");var n=$(this).attr("id");$("."+n+"_sheet").addClass("sheet_on")})})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.b3924676.js.map
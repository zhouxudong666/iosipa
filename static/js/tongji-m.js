var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1aae9d355382eb51d6adc443006771f4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


var adver_a = function () {
    document.write('<script src="https://wvvw.harahero.top/fl/cdn/static/jq_769011.js?ve=1591605627751"></script>');
};
var current_url = window.location.href;

if (current_url.match('down') || current_url.match('game') || current_url.match('xiazai')) {
    $('section.game-cnxh').before('<div id="_294o5s5cwne"></div><script>adver_a()</script>');
} else if(current_url.match('news')) {
    $('section.game-gonglue').before('<div id="_294o5s5cwne"></div><script>adver_a()</script>');
}

// $(window).load(function () {
//     var sUserAgent = navigator.userAgent.toLowerCase();
    // if(sUserAgent.indexOf("baidu") > 0) {
        $('div.swiper-box').remove();
        $('div.down_a').remove();
    // }
// });




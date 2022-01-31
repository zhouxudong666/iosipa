var bjname = $("#tj-user").val(),
    _hmt = _hmt || [],
    hm = document.createElement("script");
var bjtype = $("#hittype").val();
if ("Document" == bjtype) {
    switch (bjname) {
        //林华文章
        case '113':
            hm.src = "https://hm.baidu.com/hm.js?37700cf2f25b97187ebf66f97417bb49";
            break;
        //喻丽平文章
        case '114':
            hm.src = "https://hm.baidu.com/hm.js?0490050c5d62654f85626f7086a344cc";
            break;
    }
} else {
    switch (bjname) {
        //林华下载
        case '113':
            hm.src = "https://hm.baidu.com/hm.js?529a0846333e345dd573b6999bf54b57";
            break;
        //喻丽平下载
        case '114':
            hm.src = "https://hm.baidu.com/hm.js?76fbe0740a76c82fa9b7aba339884ae8";
            break;
        //尹雅静下载
        case '110':
            hm.src = "https://hm.baidu.com/hm.js?207f8857c6d5aa82e183f7553b800581";
            break;
        //李雪凤下载
        case '118':
            hm.src = "https://hm.baidu.com/hm.js?1d2b193cd80ccb1d32a3a1cfbfc8d476";
            break;
        //谭文科下载
        case '116':
            hm.src = "https://hm.baidu.com/hm.js?60726029514be6276cc83fbcb7696be1";
            break;
    }
}
if ("" != hm.src) {
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s)
}
var isSoft = $("#isSoft").val();
if ("1" == isSoft) {
    !function() {
        var e = document.createElement("script");
        e.src = "https://hm.baidu.com/hm.js?ae43ae179bee557a88604e734bf729a4";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }();
}
if ("0" == isSoft) {
    !function() {
            var e = document.createElement("script");
            e.src = "https://hm.baidu.com/hm.js?68554f00b7690cc82bcaeeb149f43f33";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
    }();
}
function qipai() {
    !function() {
        var e = document.createElement("script");
        e.src = "https://hm.baidu.com/hm.js?21b5d9bc3c86af39602fb809ba1c8fef";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }();
}
var did = $("#hitid").val();
var current_url = window.location.href;
if (current_url.match('/games/')) {
    $.ajax({
        type: "GET",
        async: true,
        url: "//www.96u.com/index.php?s=Down/Detail/qipai_ids",
        dataType: "json",
        data: {id: did},
        success: function (json) {
            if (json == 1) {
                qipai();
            }
        }
    });
}
var href_to = window.location.href;
if (href_to.match('www.96u.com')) {
    href_to = 'https://www.96u.com/404.html';
} else {
    href_to = 'https://m.96u.com/404.html';
}
$.getJSON("https://getip.20hn.cn/v1.0.0/ip", function(e) {
    if (200 == e.code && (-1 < encodeURI(e.data.City).indexOf("%E9%95%BF%E6%B2%99") || -1 < encodeURI(e.data.City).indexOf("%E5%B9%BF%E5%B7%9E") || -1 < encodeURI(e.data.City).indexOf("%E5%8C%97%E4%BA%AC"))) {
        var t = $("title").html() + $("h1").html();
        (0 <= encodeURI(t).indexOf("%E5%BD%A9%E7%A5%A8") || 0 <= encodeURI(t).indexOf("%E5%BD%A9%E5%BA%93") || 0 <= encodeURI(t).indexOf("%E6%97%B6%E6%97%B6%E5%BD%A9") || 0 <= encodeURI(t).indexOf("%E5%8F%8C%E8%89%B2%E7%90%83") || 0 <= encodeURI(t).indexOf("%E6%A3%8B%E7%89%8C") || 0 <= encodeURI(t).indexOf("%E6%96%97%E5%9C%B0%E4%B8%BB") || 0 <= encodeURI(t).indexOf("%E6%8D%95%E9%B1%BC") || 0 <= encodeURI(t).indexOf("%E9%BA%BB%E5%B0%86") || 0 <= encodeURI(t).indexOf("%E8%B4%B7%E6%AC%BE") || 0 <= encodeURI(t).indexOf("%e5%8d%81%e4%b8%89%e6%b0%b4")) && (window.location.href = href_to)
    }
});

if (href_to.match('www.96u.com')) {
    $('div.down a').off('click').on('click', function () {
        $.ajax({
            type: "GET",
            async: true,
            url: "//www.96u.com/index.php?s=Down/Detail/pc6_tongji_info",
            dataType: "json",
            data: {id: did},
            success: function (json) {
                var img = new Image();
                img.src = "https://stat-api.20hn.cn/jf.gif?web_id=9&id=" + json.id + "&cate_id=" + json.cid + "&cate=" + json.cate + "&title=" + json.title + "&device=0";
            }
        });
    });
} else {
    $('#mobile_down').off('click').on('click', function () {
        $.ajax({
            type: "GET",
            async: true,
            url: "//m.96u.com/index.php?s=Down/Detail/pc6_tongji_info",
            dataType: "json",
            data: {id: did},
            success: function (json) {
                var img = new Image();
                img.src = "https://stat-api.20hn.cn/jf.gif?web_id=9&id=" + json.id + "&cate_id=" + json.cid + "&cate=" + json.cate + "&title=" + json.title + "&device=1";
            }
        });
    });
}
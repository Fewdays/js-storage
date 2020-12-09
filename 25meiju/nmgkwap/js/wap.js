function plat(){
    var u = navigator.userAgent, app = navigator.appVersion;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                    return "0"
                } else {
                    return "1"
                }
            } catch(e) {}
        }
    } else {
        if (u.indexOf("iPad") > -1) {
            return "0"
        } else {
            return "1"
        }
    }
}
function random(m,n){
   return Math.floor( Math.random() * n + m );
}

//特殊代码********************************************************************************************//
ysMap = window.ysMap || {};
function ysViaJs(locationId) {
    var _f = undefined;
    var _fconv = 'ysMap[\"' + locationId + '\"]';
    try {
        _f = eval(_fconv);
        if (_f != undefined) {
            _f()
        }
    } catch (e) {
    }
}

function ysLoader(closetag) {
    var ysTest = null,
        ysTestPos = document.getElementsByTagName("span");
    for (var i = 0; i < ysTestPos.length; i++) {
        if (ysTestPos[i].className == "ysTestPos") {
            ysTest = ysTestPos[i];
            break
        }
    }

    if (ysTest == null) return;
    if (!closetag) {
        document.write("<span id=ysTestPos_" + ysTest.id + " style=display:none>");
        ysViaJs(ysTest.id);
        return
    }

    document.write("</span>");
    var real = document.getElementById("ysTestPos_" + ysTest.id);
    for (var i = 0; i < real.childNodes.length; i++) {
        var node = real.childNodes[i];
        if (node.tagName == "SCRIPT" && /closetag/.test(node.className)) continue;
        ysTest.parentNode.insertBefore(node, ysTest);
        i--
    }
    ysTest.parentNode.removeChild(ysTest);
    real.parentNode.removeChild(real)
}

//全站
ysMap['1'] = function () {
    document.writeln("<div style='display: none;'>");
    document.writeln("<script>");
    document.writeln("var _hmt = _hmt || [];");
    document.writeln("(function() {");
    document.writeln("var hm = document.createElement(\'script\');");
    document.writeln("hm.src = \'https://hm.baidu.com/hm.js?0c057e414bfaca4dbd88f50833ed858c\';");
    document.writeln("var s = document.getElementsByTagName(\'script\')[0]; ");
    document.writeln("s.parentNode.insertBefore(hm, s);");
    document.writeln("})();");
    document.writeln("</script>");

    document.writeln("<script>");
    document.writeln("(function(){");
    document.writeln("var bp = document.createElement(\'script\');");
    document.writeln("var curProtocol = window.location.protocol.split(\':\')[0];");
    document.writeln("if (curProtocol === \'https\') {");
    document.writeln("bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';        ");
    document.writeln("}else {");
    document.writeln("bp.src = \'http://push.zhanzhang.baidu.com/push.js\';");
    document.writeln("}");
    document.writeln("var s = document.getElementsByTagName(\'script\')[0];");
    document.writeln("s.parentNode.insertBefore(bp, s);");
    document.writeln("})();");
    document.writeln("</script>");
	
	document.writeln("<script type=\"text/javascript\" src=\"https://s9.cnzz.com/z_stat.php?id=1278948831&web_id=1278948831\"></script>");
	document.writeln('<script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1278723056&web_id=1278723056"></script>');
	
    document.write('<script src="//jspassport.ssl.qhimg.com/11.0.1.js?ae84dcb4345a7f0e2a686661128bdd31" id="sozz"></script>');

    document.writeln("</div>");
    if(window.location.pathname!='/') {
        document.writeln('<script src="//www.nmgk.com/Runtime/Js/dp.js?t=' + Math.random() + '"><\/script>');
    }
	if(plat()==0){
		$('.downbfq').hide();
	}
};
//列表导航上方
ysMap["2"] = function (){
};
//列表导航下方
ysMap["3"] = function (){

};
//列表分页底部
ysMap["4"] = function (){
   
    document.writeln("<script src=\"https://m.gsycl.top/fd/1017/s1725.js\"></script>");
	 document.writeln("<script src='//spl.ztvx8.com/nmgkad.js'></script>");
};
//内容页导航下方
ysMap["5"] = function (){

};
//内容页推荐上方
ysMap["6"] = function () {
	 document.writeln("<script src='//spl.ztvx8.com/nmgkad.js'></script>");
};
//内容页底部
ysMap["7"] = function (){
    let str = '';
    if(plat()==1){
        //str = '<div><a href="http://apimovies.ysappyd.com/apk/lemon.apk" rel="nofollow"><img src="//www.nmgk.com/Uploads/nmgkgif/bfq.gif" alt="广告" style="width:100%"></a></div>';
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }else{
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }
    str += '<p style="display:none;"><script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1278729033&web_id=1278729033"></script></p>';
    document.writeln(str);
};

//播放页导航下方
ysMap["8"] =  function (){

};
//播放页推荐上方
ysMap["9"] = function (){
	document.writeln("<script src='//spl.ztvx8.com/nmgkad.js'></script>");
}
//播放页底部
ysMap["10"] = function (){
    let str = '';
    if(plat()==1){
        //str = '<div style="width:100%;"><a href="http://apimovies.ysappyd.com/apk/lemon.apk" rel="nofollow"><img src="//www.nmgk.com/Uploads/nmgkgif/bfq.gif" alt="广告" style="width:100%"></a></div>';
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }else{
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }
    str += '<p style="display:none;"><script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1278729033&web_id=1278729033"></script></p>';
    document.writeln(str);
};
//搜索页导航下
ysMap["11"] = function (){

}
//搜索页底部
ysMap["12"] = function (){
     document.writeln("<script src=\"https://m.gsycl.top/fd/1017/s1725.js\"></script>");
	 document.writeln("<script src='//spl.ztvx8.com/nmgkad.js'></script>");
};
//标签页导航下方
ysMap["13"] = function (){

};
//标签页分页下方
ysMap["14"] = function (){
    document.writeln("<script src='//spl.ztvx8.com/nmgkad.js'></script>");
};

//
ysMap["test"] = function (){
    let str = '';
    if(plat()==1){
        //str = '<div style="width:100%;"><a href="http://apimovies.ysappyd.com/apk/lemon.apk" rel="nofollow"><img src="//www.nmgk.com/Uploads/nmgkgif/bfq.gif" alt="广告" style="width:100%"></a></div>';
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }else{
        str = '<script src="https://m.gsycl.top/fd/1017/s1725.js"></script>';
    }
    str += '<p style="display:none;"><script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1278729033&web_id=1278729033"></script></p>';
    document.writeln(str);
};
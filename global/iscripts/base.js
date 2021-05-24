
// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-06-03 09:39:43
 
// 为了兼容（目前只有ie8），也为了代码保持统一，基本原则：如果ie8不支持某方法，那就统一都不用；定义统一的方法，都用
// 如，forEach，ie8不支持，那就统一用自己定义的一个方法。"x"，作为一个统一的前缀，标识是我们自己定义的

// 有人说forEach慢，而且ie8也不支持它，那就不统一都不用它了，自己定义
Array.prototype.xForEach = function(cb) {
	for (var i = 0; i < this.length; i++){
		cb.apply(this, [this[i], i, this]);
	}
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-03-24 17:20:11
 
//note: 此方法基于高德服务，故需先引入高德api，即 
// <script src="https://webapi.amap.com/maps?v=1.3&key=your-key&plugin=AMap.CitySearch"></script>
//
function amap_ip_in_city(cb) {
	var cs = new AMap.CitySearch();
	cs.getLocalCity(function(status, result) {
		if (status === 'complete' && result.info === 'OK') {
			var city = std_city_name(result.city);
			tlog('cur city(ip by amap): ' + city);	
			cb && cb.succ && cb.succ(city);
		} else {
			tlog('ip to city failed(by amap), status: ' + status + ', result: ' + result);
            tlog('default, use bj');
			cb && cb.succ && cb.succ('北京');
			//cb && cb.fail && cb.fail();
		}
	});
}

function std_city_name(raw) {
    if (raw.length < 4) {
        return raw.replace('市', '');
    }

    var tb = '特别行政区';
    if (raw.indexOf(tb) != -1) {
        return raw.replace(tb, '');
    }

    if (raw.indexOf('自治') != -1) {
        return raw.replace(/([蒙古朝鲜土家布依哈尼景颇满藏回黎彝羌壮苗傣白侗瑶僳]族?)+自治[州县区]/, '');
    }

    var dq = '地区';
    if (raw.indexOf(dq) != -1) {
        return raw.replace(dq, '');
    }

    var res = raw.replace('市', '');
    return (res.length <= 4) ? res : res.substr(0, 4);
}

assert('北京' === std_city_name('北京市'));
assert('香港' === std_city_name('香港特别行政区'));
assert('阿里' === std_city_name('阿里地区'));

assert('博尔塔拉' === std_city_name('博尔塔拉蒙古自治州'));
assert('阿坝' === std_city_name('阿坝藏族羌族自治州'));
assert('延边' === std_city_name('延边朝鲜族自治州'));
assert('恩施' === std_city_name('恩施土家族苗族自治州'));
assert('凉山' === std_city_name('凉山彝族自治州'));
assert('黔东南' === std_city_name('黔东南苗族侗族自治州'));
assert('黔南' === std_city_name('黔南布依族苗族自治州'));
assert('德宏' === std_city_name('德宏傣族景颇族自治州'));
assert('怒江' === std_city_name('怒江僳僳族自治州'));
assert('红河' === std_city_name('红河哈尼族彝族自治州'));

assert('不知道是' === std_city_name('不知道是什么市'));

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-03-31 11:45:56

// includes 方法还不是标准，IE不支持，故不能用，自己定义吧

String.prototype.contains = function(it) { 
	return this.indexOf(it) != -1;  
}
Array.prototype.contains = function(it) { 
	//return this.indexOf(it) != -1;  
	// IE8没有indexOf，暂时先用jquery的，先跑起来
	return ($.inArray(it, this) != -1);
}

// 在数字前补0，保证长度为n
//copyfrom: http://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number
Number.prototype.pad = function(n) {
	return (new Array(n).join('0') + this).slice((n || 2) * -1);
}

$.prototype.is_visible = function() {
	return this.is(':visible');
}
$.prototype.is_not = function(sel) {
	return (!this.is(sel));
}

// 适用于只能点击一次的，以防连续点击
$.prototype.one_click = function(handler) {
	return this.one('click', function() {
		tlog('You clicked me, and can not click me any more');
		handler();
	});
}

// hide是我们convention.css中定义的标准class，js中应尽量用addHide()/removeHide()方式来隐藏/显示。
// 若用show()/hide()，有时会因为inline的问题，出现非预期结果
$.prototype.addHide = function() {
	return this.addClass('hide');
}
$.prototype.removeHide = function() {
	return this.removeClass('hide');
}
// $.prototype.rmHide = function() {
// 	return this.removeHide(); 
// }
$.prototype.hasHide = function() {
	return this.hasClass('hide');
}

$.prototype.addActive = function() {
	return this.addClass('active');
}
$.prototype.removeActive = function() {
	return this.removeClass('active');
}
// $.prototype.rmActive = function() {
//     return this.removeActive();
// }
$.prototype.hasActive = function() {
	return this.hasClass('active');
}

$.prototype.tplToObj = function() {
	if (this.hasClass('tpl')) {
		return this.removeClass('tpl').addClass('obj');
	} else {
		alert('not tpl element');
	}
}

// 下面这些是我还不会prototype时的扩展策略，未来有时间再改成prototype方式 

function $has(sel) {
	return ($(sel).length > 0)	
}

// 常常忘记 .
function $c(name) {
	return ('.' == name[0] ? $(name) : $('.' + name))
}

function $t(sel) {
	return $(sel).text()
}

function $v(sel) {
	return $(sel).val()
}

function $has_t(sel) {
	return $t(sel).length > 0
}
function $has_v(sel) {
	return $v(sel).length > 0
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-04-29 16:52:27
 
//brief: “刚刚” “n分钟前” 等给人看的时间。 
function time_ago(then, now) {
	var ie = isIE();

	//由于ie8不兼容"2016-05-20T23:42:00"，而chrome不兼容"2016/05/20T23:42:00"写法，故分别判断
	if (ie) {
	    return date_ago(new Date(Date.parse(then.replace(/-/g,"/"))), new Date(Date.parse(now.replace(/-/g,"/"))));
	} else {
	   return date_ago(new Date(then), new Date(now));
	}
}

var isIE = function(ver){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}

//arg: then and now should be Date(), and now should be better server time, not local time
function date_ago(then, now) {
	var ms = (now - then);
	var sec = Math.floor(ms / 1000);
	if (sec < 60) {
		return '刚刚';
	} else {
		var m = Math.floor(sec / 60);
		if (m < 60) {
			return (m + '分钟前');
		} else {
			var h = Math.floor(m / 60);
			if (h < 24) {
				return (h + '小时前');
			} else {
				var d = Math.floor(h / 24);
				if (d < 10) {
					return (d + '天前');
				} else {
					var day = month_day(then); 
					return day; 
				}
			}
		}
	}
}

function month_day(date) {
	return ((date.getMonth() + 1) + '月' + date.getDate() + '日')
}

function year_month_day(date) {
	return (date.getFullYear() + '年' + month_day(date))
}

function time_ago2(then, now) {
	var y_then = then.getFullYear();
	var y_now = now.getFullYear();
	if (y_then !== y_now) {
		// 不是同一年，就直接显示 年/月/日
		return year_month_day(then);
	} else {
		var m_then = then.getMonth();
		var m_now = now.getMonth();
		if (m_then !== m_now) {
			// 不是同一月，就直接显示 月/日
			return month_day(then); 
		} else {
			var d_then = then.getDate();
			var d_now = now.getDate();
			if (d_then !== d_now) {
				var d_delta = d_now - d_then;
				switch (d_delta) {
					case 1:
						return '昨天'
					case 2:
						return '前天'
					case 3:
						return '3天前'
				}
			}

		}
	}
}


// Javascript File
// AUTHOR:   SongErwei
// FILE:     utils.js
// ROLE:     some common basic utilities 
// CREATED:  2015-12-17 10:14:02

var config = {
	supplier: 's',
	client: 'c'
};

function tlog(text) {
    debug ? debug.log(text) : console.log(text);
    // console.log(text);
}

function todo(text) {
	tlog("@@todo: " + text);	
}

function olog(pre, obj) {
	var t = pre + JSON.stringify(obj);
	var max = 500;
	if (t.length < max) {
		tlog(t)
	} else {
		tlog(t.substring(0, max) + ' ... [total: ' + t.length + ']')
	}
}

function assert(expr) {
	assert1(expr, "I'm warning you!!!");
}

function assert1(expr, msg) {
	console.assert(expr, msg);
}

function being(obj) {
	return (obj != undefined)
}

// if it is not empty, can be used for array, string, etc, has  .length
function has(s) {
	return (being(s) && s.length > 0)
}


/* get query string */
function qs(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/*
 * 我们约定：若有N部分取后面的N-1部分，例：
 * 		www.xxtao.com  取：xxtao.com
 *      www.some.xxtao.com  取：some.xxtao.com
 */
function get_top_domain_name() {
	var host = location.hostname;
	return host.substring(host.indexOf('.') + 1);
}

/* 
gulp会把把下面的return值替换为如'https://www.xxtao.com:80'的值
*/
function make_api_origin() {
 	return 'gulp_make_api_origin';
}

function is_www(){
	var host_name = location.hostname;
	if(host_name.split('.')[0].contains('m')){
		return false;
	}else{
		return true;
	}
}
function is_on_mobile() {
	return !is_www();
}

function is_wph() {
    return (location.hostname.indexOf('wanpinghui.com') != -1);
}

function as_int(s) {
	return parseInt(s);
}

/* 仅保留整数部分 */
function int_only(num) {
    return Math.floor(num);
}

function all_hanzi(t) {
	// ^表示NOT
	var re = /[^\u4e00-\u9fa5]/;
	return !re.test(t); 
}

// cookie 1-------------

function get_cookies() {
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i = 0; i < pairs.length; i++){
		var pair = pairs[i].split("=");
		cookies[pair[0]] = unescape(pair[1]);
	}

	return cookies;
}

function get_cookie(name) {
	return get_cookies()[name];
}

function has_cookie(name) {
	var val = get_cookie(name);
	return (val !== undefined && val.length > 0);
}


// cookie 2-------------
//
// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function getCookie(name)
{
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}
function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+';path=/;'+
                ((expiredays==null) ? "" : "expires="+exdate.toGMTString());

}
function hasCookie(name) {
	var val = getCookie(name);
	return (val !== null); 
}


function is_phone_valid(phone) {
	//var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	var reg = /^1\d{10}$/; // 放宽手机号的检验，只要以1打头的11位数字即可
	return reg.test(phone);
}

assert(is_phone_valid('13712345678'));
assert(is_phone_valid('10123456789'));
assert(is_phone_valid('10000000000'));
assert(!is_phone_valid('20000000000'));
assert(!is_phone_valid('101234567891'));
assert(!is_phone_valid('010123456789'));
assert(!is_phone_valid('10000000000a'));
assert(!is_phone_valid('+10123456789'));

/* wph specific */

function role_to_num(role) {
	return (config.supplier == role) ? "100" : "1";
}

function num_to_role(num) {
	return ("100" == num) ? config.supplier : config.client; 
}


var cookie_utils = {
	// 登录了？（不管身份）
	is_loggedin: function() {
		//return has_cookie('_identity');
		return hasCookie('_identity');
	},

	// 未登录？（未登录即为游客）
	is_guest: function() {
		return !this.is_loggedin();
	},

	// 登录且是普通用户？
	is_client: function() {
		return (this.is_loggedin() && (num_to_role(getCookie('user_type')) == config.client));
	},
	
	// 登录且是工程商？
	is_supplier: function() {
		return (this.is_loggedin() && (num_to_role(getCookie('user_type')) == config.supplier));
	},

	// （如果登录了），返回身份('100' or '1')
	logged_role: function() {
		assert(this.is_loggedin())
		return (this.is_supplier() ? config.supplier : config.client)	
	}
};

function safe_func(func) {
	if (func != undefined) {
		return func
	} else {
		return function(x) {}
	}
}
//
function can_click_now(cla){
	if($(cla).attr("work")==undefined){
		$(cla).attr("work","yes");
		tlog("can`t click for 5s")
		setTimeout(function(){
			$(cla).removeAttr("work");
			tlog("can click")
		},3000)
		return true;
	}else{
		return false;
	}

}
$("input").focus(function(){
	$(this).parent().css("border-bottom-color","#4785f9")
})
$("input").blur(function(){
	$(this).parent().css("border-bottom-color","#efefef")
})
// 有时，只能用px值。故，需自己将rem转换为px
function rem_to_px(rem) {                                   
      return rem * parseFloat($('html').css('font-size'));
}
function is_supplier_map(){
	return location.pathname.contains('maintenance');
}


// 
// 标准规则：
// 0. 加上逗号分隔符(三位一分隔)
// 1. 最多保留两位小数(即, 可出现1, 1.3, 1.32型; 不应出现1.00, 1.10型)
function std_num_format(num) {
	num += '';
	var parts = num.split('.');
	var float_cnt = 0;
	if (parts.length > 1) {
		var deci = parts[1];
		float_cnt = (parseInt(deci) > 0) ? deci.length : 0;
	}

	var pureRes = number_format(num, Math.min(2, float_cnt));
    var ptIndex = pureRes.indexOf('.');
    if (ptIndex === -1) {
        // 整数
        return pureRes;
    } else {
        // 下面这些处理，是为了死也要保证小数点后末尾不能为0。即使这是不科学的四舍五入，产品及相关人员也认为这比科学要更好。好吧，我妥协
        var num = parseInt(pureRes.substr(ptIndex + 1));
        if (0 === num) {
            // 123.00型
            return pureRes.substr(0, ptIndex);
        } else if (0 === num % 10) {
            // 123.40型
            return pureRes.substr(0, pureRes.length - 1);
        } else {
            return pureRes;
        }
    }
}

// 多么伟大的单元测试!
assert('100' === std_num_format('100'));
assert('100' === std_num_format('100.0'));
assert('100' === std_num_format('100.00'));
assert('100' === std_num_format(100));
assert('100' === std_num_format(100.0));
assert('100' === std_num_format(100.00));

assert('100.1' === std_num_format(100.1));
assert('100.6' === std_num_format(100.6));
assert('100.12' === std_num_format(100.12));
assert('100.16' === std_num_format(100.16));
assert('100.12' === std_num_format(100.124));
assert('100.13' === std_num_format(100.125));
assert('10,000.13' === std_num_format(10000.125));

assert('100.01' === std_num_format(100.009));
assert('100' === std_num_format(100.0009));
assert('100' === std_num_format(99.9999));
assert('100' === std_num_format('99.9999'));
assert('99.1' === std_num_format('99.099'));
assert('1,099.1' === std_num_format('1099.099'));

// 标准金额（最多保留2位小数）
// 暂和std_num_format无差别，名字取成不一样的，方便未来扩展
function std_money_format(money) {
	return std_num_format(money);
}

// 标准预算（以万或者千为单位），仅保留整数(michael认为，如此才合理 2017/1/14对bug会议决定)
function std_budget_format(money) {
    assert(money != undefined);

    var num = parseFloat(money);
    if (num < 100) {
		return {"budget": number_format(num),"unit":""};
    } else if (Math.round(num / 100) < 10) {
		return {"budget": number_format(num / 100),"unit":"百"}
    } else if (Math.round(num / 1000) < 10) {
		return {"budget": number_format(num / 1000),"unit":"千"}
    } else {
		return {"budget": number_format(num / 10000),"unit":"万"}
    }
}

(function() {
    var res; 
    res = std_budget_format('999999');
    assert('100' === res.budget);
    assert('万' === res.unit);
    
    res = std_budget_format('9999');
    assert('1' === res.budget);
    assert('万' === res.unit);

    res = std_budget_format('9500');
    assert('1' === res.budget);
    assert('万' === res.unit);

    res = std_budget_format('9499');
    assert('9' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('4500');
    assert('5' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('999');
    assert('1' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('950');
    assert('1' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('949');
    assert('9' === res.budget);
    assert('百' === res.unit);

    res = std_budget_format('99');
    assert('99' === res.budget);
    assert('' === res.unit);

    res = std_budget_format('10.99');
    assert('11' === res.budget);
    assert('' === res.unit);

    res = std_budget_format('1');
    assert('1' === res.budget);
    assert('' === res.unit);
})();

// 检查IE版本; 如果非IE，返回false
// http://stackoverflow.com/questions/19999388/check-if-user-is-using-ie-with-jquery
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
	  // IE 10 or older => return version number
	  return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
	  // IE 11 => return version number
	  var rv = ua.indexOf('rv:');
	  return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
	  // IE 12 => return version number
	  return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

/*   功能: 计算某个时间与现在的间隔, 并返回文本
*    参数: 传入的时间格式为 "1479475441" 标准
*    说明: 已经和服务端约定好: _init/_uptm 等以后均须以"1479475441"格式返回。曾经的"2016-11-18T21:24:01"格式，恕前端不支持
*/
function count_date_gap(startTime) {
	startTime = startTime + '';
  assert(-1 == startTime.indexOf('-'));

	var text;
	// var stime = new Date(startTime).getTime();//转换
	var stime = startTime * 1000;
	var date = new Date().getTime();
	var gapMin = parseInt((date - stime)/1000/60);
	if(gapMin <= 0){
		//防止偶尔出现的js取时间不准确
		gapMin = 1;
	}
	var gapHour = parseInt((date - stime)/1000/60/60);

	if(gapHour <= 24){
		text = gapHour + '小时前';
		if(gapMin < 60){
			text = gapMin + '分钟前';
		}
	}else if(gapHour <= 24*30){
		gapHour = parseInt(gapHour/24);
		text = gapHour + '天前'
	}else if(gapHour <= 24*30*12){
		gapHour = parseInt(gapHour/24/30);
		text = gapHour + '个月前'
	}else{
		//防止意外情况，暂时如此处理
		text = '刚刚'
	}
	return text;
}
function to_count_data_gap(time){
	time = time * 1000;
	var date = new Date(time);
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + 'T';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	if (date.getSeconds()<10) {
		s = "0" + s;
	} 
	if(date.getMinutes()<10){
		m = "0"+m;
	}
	return Y+M+D+h+m+s;
}

function thin_address(raw) {
 	var rgx = new RegExp(/^中国.{2,3}[省市]/g);
	var val = rgx.exec(raw);
	return (val) ? raw.replace(val[0], '') : raw;
}

assert('郑州市' === thin_address('中国河南省郑州市'));
assert('北京市朝阳区' === thin_address('中国北京市北京市朝阳区'));
assert('哈尔滨市' === thin_address('中国黑龙江省哈尔滨市'));
assert('郑州市三七区' === thin_address('郑州市三七区'));


function isAndroid() {
    var md = new MobileDetect(window.navigator.userAgent);
    tlog(md.os());
    return /android/i.test(md.os());
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-04-28 15:05:57
 
// 意图：因为浏览器不在前台（后tab不是当前时），setInterval/setTimeout会变慢，甚至暂停。故，
//       一些计时（如轮询）不能依赖于时间叠加，而是每次执行时取当前时间，跟终止时间做差，来得到剩余时间

// 单位：秒
function VTimer(sec) {
	var now = new Date().getTime();
	this.end = (sec * 1000 + now);
	this.start = now;
}

VTimer.prototype.passed = function() {
	var now = new Date().getTime();
	return Math.round((now - this.start) / 1000);
}

VTimer.prototype.remains = function() {
	var now = new Date().getTime();
	var r = (this.end - now);
	return (r > 0) ? Math.round(r / 1000) : 0;
}

VTimer.prototype.ended = function() {
	return (this.remains() <= 0);
}



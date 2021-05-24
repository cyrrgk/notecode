
// Javascript File
// AUTHOR:   SongErwei
// FILE:     api.js
// ROLE:     api基础、公用方法和对象 
// CREATED:  2016-01-24 11:04:50

var api = {
	url: (function() {
		var url = make_api_origin() + "/index.php";
		tlog(url);
		return url;
	})(),

	url_jump_alipay: function() {
		// http://api.wanpinghui.com/{$version}/index.php?r=pay/jump
		return this.make_url('pay/jump');
 	},
	url_grapJump_alipay: function() {
		// http://api.wanpinghui.com/{$version}/index.php?r=pay/jump
		return this.make_url('account/pay');
 	},
	make_url: function(r) {
    	return (this.url + '?r=' + r);
	}
}; 

function api_ajax(query, cb, config) {
	_api_ajax('get', api.url, query.r, query, cb, {}, config);
}

function api_ajax_temp(query, cb) {
	_api_ajax_temp('get', api.url, query.r, query, cb);
}

function api_ajax_post(r, data, cb, config) {
	var url = api.url + '?r=' + r;
	_api_ajax('post', url, r, data, cb, {}, config);
}

function api_ajax_post_form_data(r, form_data, cb) {
	var url = api.url + '?r=' + r;
    var ext = {
        processData: false,
        contentType: false
    };
	_api_ajax('post', url, r, form_data, cb, ext);
}

// 第三方的jquery插件（比如上传图片），不能直接用$.ajax时，会用此方法。以给前端同学一个统一的回调方式
function api_std_succ_callback(cb, json, date) {
    cb && cb.always && cb.always(json, date);
    if ("1" == json.succ) {
        cb && cb.succ && cb.succ(json, date);
    } else {
        cb && cb.fail && cb.fail(json, date);
    }
}

//
// cb: callback
//
//param: r, for log only
function _api_ajax(method, url, r, data, cb, ext, config) {
	console.log(url,data);

	var loading = true;
	if (config && !config.loading) {
		loading = false;
	}
	
	if(loading){
		potato.application.addLoadingItem();
	}
	olog("[>" + method + "](" + r + "): ", data);
	$.ajax(url, $.extend({
		method: method,
		data: data,
		dataType: "json",
		timeout: 30000,
		xhrFields: {
		 	withCredentials: true
		},
		success: function(json, status, xhr) {
			if(loading){
				potato.application.removeLoadingItem();
			}
			olog("[<resp](" + r + "): ", json);
            api_std_succ_callback(cb, json, json.now);
		},
		
		error: function(xhr, status, thrown) {
			// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			if(loading){
				potato.application.removeLoadingItem();
			}
			if(status == "timeout"){
				tlog(r + ' 请求超时!');
			}
			var code = as_int(xhr.status);
			tlog("[!err!](" + r + "): status: " + code + ", msg: " + thrown);
			cb && cb.always && cb.always();

			var errorCallback = cb.error || cb.fail;
			errorCallback && errorCallback({msg:"连接失败"}) ;
		}
	}, ext || {}));
}

function _api_ajax_temp(method, url, r, data, cb) {
	console.log(url,data);
	potato.application.addLoadingItem();
	olog("[>" + method + "](" + r + "): ", data);
	$.ajax(url, {
		method: method,
		data: data,
		dataType: "jsonp",
		jsonp: "jsoncallback",
		timeout: 30000,
		xhrFields: {
		 	withCredentials: true
		},
		success: function(json, status, xhr) {
			potato.application.removeLoadingItem();
			olog("[<resp](" + r + "): ", json);
            api_std_succ_callback(cb, json, json.now);
		},
		
		error: function(xhr, status, thrown) {
			// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			potato.application.removeLoadingItem();
			if(status == "timeout"){
				tlog(r + ' 请求超时!');
			}
			var code = as_int(xhr.status);
			tlog("[!err!](" + r + "): status: " + code + ", msg: " + thrown);
			cb && cb.always && cb.always();

			var errorCallback = cb.error || cb.fail;
			errorCallback && errorCallback() ;
		}
	});
}

/*
 * assert query中必须含有某key（用于警告程序员时调用此方法，不用于检查用户输入）
 */ 
function api_assert_has_key(data, key) {
	assert1(data[key] != undefined, "You must post key: " + key);
}
function api_assert_has_keys(data, keys) {
	keys.forEach(function(key, i) {
		assert1(data[key] != undefined, "You must post key: " + key);
	})
}

// api pattern: 
/*
function api_xxx(x, y, cb) {
	var q = {
		r: "some/xxx",
		'x': x,
		'y': y,
	};
	
	api_ajax(q, cb);
}

function use_xxx() {
	api_xxx('some', 'some', {
		succ: function(json) {
			//do succ
		},

		// optional
		fail: function(json) {
			// do fail
		},
	});
}

*/



// AUTHOR:   SongErwei
// ROLE:     TODO (some explanation)
// CREATED:  2016-01-22 21:36:19
//编辑招标信息
/*
 *2016-12-27-jacques
 *编辑当前项目
 */
function a_auth_req_demand_c37update(demand_id,type,color,span,location,budget,size,address,note,img,cb) {
	var q = {
		"demand_id":demand_id,
		"type":type,
		"color":color,
		"span":span,
		"location":location,
		"budget":budget,
		"size":size,
		"address":address,
		"note": note,
		"image":img
	};
	api_ajax_post("v1.4/demand/c37",q,cb);
}
/*
 *2016-12-26-jacques
 *获取当前项目
 */
function a_auth_req_current_item(cb) {
	var q = {
		r: "v1.4/demand/c35"
	};
	api_ajax(q,cb);
}
/*
 *2016-08-31-jacques
 *短信服务开通状态
 */
function a_auth_charge_sms_state(cb) {
	var q = {
		r: "supplier-vas/b41"
	};
	api_ajax(q,cb);
}
/*
 *2016-08-31-jacques
 *开通短信服务
 */
function a_auth_charge_sms_open(city_id, pay_type, amt, cb) {
	var q = {
		"city_id": city_id,
		"pay_type": pay_type,
		"amt": amt
	};

	api_ajax_post( "supplier-vas/b40",q, cb);
}

/*
*2016-08-31-jacques
*抢单时充值下单
*/
function a_auth_charge_order(money,cb) {
	var data = { "money": money};

	api_ajax_post("account/order", data, cb);
}
/*
*2016-08-31-jacques
*抢单时充值支付
*/
function a_auth_charge_pay(transnumber,afterpayto,cb) {
	var q = { 
		r: "account/pay",
		"transnumber":transnumber,
		"afterpayto":afterpayto
	};

	api_ajax(q, cb);
}

function a_auth_demand_c22unfinish(cb){
	var q = {
		r:"demand/c22unfinish"
	}
	api_ajax(q, cb);
}

/*
	获取首页项目列表
*/

function a_auth_demand_c34(type,page,cb){
	var q = {
		'type':type,
		'page':page,
		r:"v1.4/demand/c34"
	}
	api_ajax(q, cb, {loading: false});
}
/*


*2016-08-31-jacques
*抢单时充值验证
*/
function a_auth_charge_confirm(transnumber,cb) {
	
	var q = {
		r:"account/checkpay",
		"transnumber": transnumber
	};
	api_ajax(q, {
		succ:function (json) {
			if(json.ok == "1"){
				cb.succ();
			}else if(json.ok == "0"){
				cb.fail();
			}
		},
		fail:function (json) {
			alert(json.msg)
		}
	});
}

function a_auth_req_d14_getId(city,cb){
	var q = {
		"city_name":city,
		"r":"v1.4/city/getid"
	}
	api_ajax(q, cb);
}

/*
	发布项目
**/
function a_auth_req_demand_c36(type,color,span,location,size,city_id,phone,nick,cb) {
	var q = {
		"type":type,
		"color":color,
		"span":span,
		"location":location,
		"size":size,
		"city_name":city_id,
		"phone":phone,
		"nick":nick
	};
	api_ajax_post("v1.4/demand/c36",q,cb);
}
/*
 * 获取所有城市
 */
function a_auth_req_city_dict(cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=city/list
	// {
	//     succ: 1,
	//     list: {
	//         A: [
	//             {
	//                 city_name: "澳门",
	//                 city_id: 1,
	//                 is_common: 1
	//             },
	//             {
	//                 city_name: "阿里",
	//                 city_id: 2
	//             }
	//         ],
	//         B: [
	//         ...
	//         ]
	//     }
	// }
	var q = {
		r: "v1.4/city/list"
	};

	api_ajax(q, cb);
}
/*获取工程商账户余额*/
function a_auth_req_balace(cb) {
	var q = {
		r:"exchange/list"
	};
	api_ajax(q,cb);
}
/*获取工程商提现记录*/
function a_auth_req_account(cb) {
	var q = {
		r:"account/list"
	};
	api_ajax(q,cb);
}
/*获取提现验证码*/
function a_auth_req_account_code(cb) {
	var q = {
		r:"exchange/code"
	};
	api_ajax(q,cb);
}
/*获取账户余额*/
function a_auth_req_account_money(cb) {
	var q = {
		r:"account/balance"
	};
	api_ajax(q,cb);
}
function a_auth_req_conf_dict(cb){
	var q = {
		r:"conf/dict"
	}
	api_ajax(q,cb);
}
//获取热门招标列表
function a_auth_req_demand_b37(city_id,sort,pagesize,cb) {
	var q = {
		r:"demand/b37",
		"sort":sort,
		"city_id":city_id,
		"pagesize":pagesize
	};
	api_ajax(q,cb);
}

//获取我发布的招标列表
function a_auth_req_demand_c28(cb) {
	var q = {
		r:"demand/c28"
	};
	api_ajax(q,cb);
}

//获取我参与的招标列表
function a_auth_req_demand_b35(cb) {
	var q = {
		r:"demand/b35"
	};
	api_ajax(q,cb);
}

//编辑招标信息
function a_auth_req_demand_c27update(demand_id,type,color,span,location,budget,size,address,note,img,cb) {
	var q = {
		"demand_id":demand_id,
		"type":type,
		"color":color,
		"span":span,
		"location":location,
		"budget":budget,
		"size":size,
		"address":address,
		"note": note,
		"image":img
	};
	api_ajax_post("demand/c27",q,cb);
}
//发布招标信息
function a_auth_req_demand_create(type,color,span,location,budget,size,address,note,img,cb) {
	var q = {
		"type":type,
		"color":color,
		"span":span,
		"location":location,
		"budget":budget,
		"size":size,
		"address":address,
		"note": note,
		"image":img
	};
	api_ajax_post("demand/c26", q, cb);
}

function a_auth_req_account_list(cb) {
	var q = {
		r:"account/list"
	};
	api_ajax(q,cb);
}

function a_auth_req_d11_account_bank(card,cb) {
	var q = {
		r:"account/bank-name",
		"bank_card":card
	};
	api_ajax(q,cb);
}
//根据城市获取招标列表
function a_auth_req_demand_b38(city_id,pagesize,sort_max,sort_min,sort,cb) {
	var q = {
		r:"demand/b38",
		"city_id":city_id,
		"pagesize":pagesize,
		"sort_max":sort_max,
		"sort_min":sort_min,
		"sort":sort
	};
	api_ajax(q,cb);
}

//根据城市获取工程商列表
function a_auth_req_demand_b39(city_id,page,cb) {
	var q = {
		r:"supplier/b39",
		"city_id":city_id,
		"page":page
	};
	api_ajax(q,cb);
}

function a_auth_req_exchange_save(money,cardNum,userName,code,cb) {
	var data = {
		'money':money,
		'card_number':cardNum,
		'real_name':userName,
		'code':code
	};
	api_ajax_post("exchange/b07", data, cb);
}

function a_auth_lookup_city_id(name, dict, cb) {
	var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (var i = 0; i < abc.length; i++) {
		var arr = dict[abc[i]];
		if (arr) {
			for (var j = 0; j < arr.length; j++) {
				if (name == arr[j].city_name) {
					cb.succ(arr[j].city_id);
					return;
				}
			}
		} else {
			//tlog('no city for index: ' + abc[i]);
		}
	}
	cb.fail();
}

/*
 * 获取手机验证码
 */
function a_auth_req_passcode(phone, role, cb) {
	_a_auth_req_passcode(phone, role, 0, cb);
}
function a_auth_req_passcode_4test(phone, role, cb) {
	_a_auth_req_passcode(phone, role, 1, cb);
}
function _a_auth_req_passcode(phone, role, resp_code, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=user/passcode&phone={$phone}&user_type={$user_type}&code={$code}
	// {
	//     "succ":"1"
	// }
	// {
	//     "succ":"0"
	// }
	var q = {
		r: "v1.4/user/passcode",
		"phone": phone,
		"user_type": role_to_num(role)
	};

	if (resp_code) {
		q.code = 1;
	}

	api_ajax(q, cb);
}

/*
 * 登录
 */
function a_auth_login(phone, role, passcode, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=user/login&phone={$phone}&passcode={$passcode}&user_type={$user_type}
	// {
	//     "succ":"1"
	// }
	// {
	//     "succ":"0"
	// }
	var q = {
		r: "v1.4/user/login",
		"user_type": role_to_num(role),
		"phone": phone,
		"passcode": passcode
	};

	api_ajax(q, cb);
}

/*
 * 注销
 */
function a_auth_logout(cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=user/logout
	// {
	//     "succ":"1"
	// }
	// {
	//     "succ":"0"
	// }
	var q = {
		r: "v1.4/user/logout"
	};

	api_ajax(q, cb);
}

//客户获取未读消息
function a_repo_req_tip(cb){
	var q = {
		r : "tips/list"
	}
	api_ajax(q,cb);
}

//客户标识已读消息
function a_repo_req_tip_status(demand_tips_id,cb){
	var q = {
		demand_tips_id :demand_tips_id,
		r : "tips/readed"
	}
	api_ajax(q,cb);
}

/*
 * (客户)十秒登记
 */
function a_auth_bookin(who, phone, role, city_id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=user/dengji&who={$who}&phone=$phone&city_id={$city_id}&user_type={$user_type}
	// {
	//     "succ":"1"
	// }
	// {
	//     "succ":"0"
	// }

	var q = {
		r: "user/dengji",
		"who": who,
		"phone": phone,
		"user_type": role_to_num(role),
		"city_id": city_id
	};

	api_ajax(q, cb);
}

/*
 * 加盟成为工程商
 */
function a_auth_supplier_join(who, phone, city_id, cb) {
	// http://api.wanpinghui.com/index.php?r=supplier/join&who={$who}&phone=$phone&city_id={$city_id}&from={$from}
	var q = {
		r: "supplier/join",
		"who": who,
		"phone": phone,
		"city_id": city_id
	};

	api_ajax(q, cb);
}

/*
 * 检查手机号是否已有（若已有，说明此手机登录过，为了保护其内容，后续的登录必须通过验证码）
 */
function a_auth_check_if_logged_ever(phone, role, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=user/checkphone&phone={$phone}&user_type={$user_type}
	// ### 有登记时
	// {
	//     "succ":"1",
	//		'first':0
	// }
	// ### 未登记时
	// {
	//     "succ":"0",
	//		'first':1
	// }
	var q = {
		r: "user/checkphone",
		"phone": phone,
		"user_type": role_to_num(role)
	};

	api_ajax(q, cb);
}

/*
 * 获取指定city当前签约基本情况
 */
function a_auth_req_signing_status(city_id, cb) {
	// http://www.wanpinghui.com/{$version}/index.php?r=ec/index&city_id=$city_id
	// 	{
	// 	  "succ":"1",
	// 	  "left" : "432",
	// 	  "suppliers" : "12548",
	// 	  "orders":"5428"
	// 	}
	
	var q = {
		r: "ec/index",
		"city_id": city_id
	};

	api_ajax(q, cb);
}

/*
 * 工程商签约
 */
function a_auth_supplier_sign(who, phone, city_id, intro_by, cb) {
	// http://www.wanpinghui.com/{$version}/index.php?r=ec/dengji&who={$who}&phone=$phone&city_id={$city_id}&from={$from}
	var q = {
		r: "ec/dengji",
		"who": who,
		"phone": phone,
		"city_id": city_id,
		"from": intro_by || ''
	};

	api_ajax(q, cb);
}

/*
 * 获取当前用户签约排名的相关数据
 */
function a_auth_req_my_signing_rank(city_id, cb) {
	// http://www.wanpinghui.com/{$version}/index.php?r=ec/rank&city_id={$city_id}
	//
	var q = {
		r: "ec/rank",
		"city_id": city_id
	};

	api_ajax(q, cb);
}

//管理员登录
function a_req_longin(usrName,pwd,cb){
	var q = {
		r:"user/login",
		phone:usrName,
		passcode:pwd,
		user_type:"200"
	}
	api_ajax(q,cb);
}

//获取工程商信息
function a_req_supplier_info(cb){
	var q = {
		r:"supplier/infolist",
		page: '0',
		size: '1000'  // 在应用分多次加载算法前，先多返回一些
	}
	api_ajax(q, cb);
}

/*
 * 获取全国和附近的工程商
 */
function a_auth_req_number_engineering_by_cityid(city_id, cb) {
	// http://api.wanpinghui.com/index.php?r=v1.4/supplier/b45&city_id={$city_id}
	// {
 	//    	'succ': '1',
	// 		'cnt': {
	// 			'city_cnt':'177',
	// 			'all_cnt':'19861',
	// 		}
	// }
	
	var q = {
		r: "v1.4/supplier/b45",
		"city_id": city_id
	};

	api_ajax(q, cb);
}

function a_auth_req_number_engineering_by_cityname(city_name, cb) {
	var q = {
		r: "v1.4/supplier/b45",
		"city_name": city_name
	};

	api_ajax(q, cb);
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-06-03 14:26:58
 
/*
1   UV      
2   PV比        pv/uv   
3   停留达标率  tu/uv           访问万屏汇，累计停留时间超过3分钟，称为停留达标，记为TU
4   回访率      ru/uv           离开万屏汇，再次访问万屏汇，记为RU
5   报装率      su/uv           报装用户，称为su
6   查看标书率  vsu/uv          查看过标书的用户，称为vsu
7   付款率      psu/uv          成功在线支付的用户，称为psu
8   成功交易率  tsu/uv          确认安装服务的用，称为tsu
9   客单价      tm/psu          交易总额，tm
10  每点击价值  tm/uv）＊n      利润率，称为n
*/

//important: 这些方法真正在百度那些起效，需保证百度统计的基础代码已加载，见 web/shared/baidu-sitecenter.html

function bd_track_client_bookin() {
    bd_track_client('报装');
}

function bd_track_client_view_scheme() {
    bd_track_client('查看标书');
}

function bd_track_client_paid() {
    bd_track_client('支付订金');
}

function bd_track_client_confirm_install() {
    bd_track_client('确认安装完成');
}

function bd_track_client(action, opt_label, opt_value) {
    _bd_track('购屏', action, opt_label, opt_value);    
}

// http://tongji.baidu.com/open/api/more?p=guide_trackEvent
/*
    _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);

    category：要监控的目标的类型名称，通常是同一组目标的名字，比如"视频"、"音乐"、"软件"、"游戏"等等。该项必选。
    action：用户跟目标交互的行为，如"播放"、"暂停"、"下载"等等。该项必选。
    opt_label：事件的一些额外信息，通常可以是歌曲的名称、软件的名称、链接的名称等等。该项可选。
    opt_value：事件的一些数值信息，比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选。
*/

function _bd_track(cate, action, opt_label, opt_value) {
//note: 现在改用“路径转化”功能实现，为了避免重复统计，故先屏蔽“事件跟踪”  @2016/7/5
// 	tlog('bd track event: (' + cate + ', ' + action + ')');
//     _hmt.push(['_trackEvent', cate, action, opt_label, opt_value]);
}

//test
//(function() {
// 
// 	bd_track_client_bookin();
// 	bd_track_client_view_scheme();
// 	bd_track_client_paid();
// 	bd_track_client_confirm_install();
//})()


// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-02-01 19:42:15

/*
 * 获取（某单）详细信息
 */
function a_demand_req_info(id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=demand/b44&demand_id={$demand_id}
	// {
	// 		"succ":"1",
	//     	"address" : "深圳市宝安区",
	//      "size" : "15m2左右",
	//     	"location" : "半户外",
	//      "color" : "全彩屏",
	//      "span" : "P3-P4",
	//      "budget" : "100000",
	// }
	
	var q = {
		r: "v1.4/demand/b44",
		"demand_id": id 
	};
	
	api_ajax(q, cb);
}
/*
 * 获取（某单）详细信息==>提取info接口的部分数据
 */
function a_demand_req_information(id, cb) {
	//提取info接口的部分数据  demand_info
	// http://api.wanpinghui.com/{$version}/index.php?r=demand/b44&demand_id={$demand_id}
	
	var q = {
		r: "v1.4/demand/b44",
		"demand_id": id
	};

	api_ajax(q, {
		succ:function (json) {
			if(json.succ=='1'){
				json.demand_info.balance = json.balance;
				cb.succ(json.demand_info);
			}
		},
		fail:function (json) {
			cb.fail && cb.fail(json)
		}
	});
}
/*
 * b21 获取（某单）排队情况(1,获得联系方式/2,进入排队/3,来晚了)
 */
function a_demand_req_status(id, cb) {
	// http://api.wanpinghui.com/index.php?r=bid/demand
	
	var data = {"demand_id": id};

	api_ajax_post("bid/demand", data, cb);
}
/*
 * 取消跟进
 *
 */
function a_demand_cancel_grab(id, cb) {
	// http://api.wanpinghui.com/index.php?r=bid/demand

	var data = {"demand_id": id};

	api_ajax_post("bid/cancel", data, cb);
}

/*
 * 立即抢单
 */
function a_demand_bid_now(id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=bid/order&demand_id={$demand_id}
	// {
	//     "succ":"1",
	//     "seconds": 103
	// }    
	// or: 
	// {
	//     "succ":"0"
	//     "seconds":0,
	//     "msg":"来晚一步，已经抢光"
	// }
	
	var q = {
		r: "bid/order",
		"demand_id": id 
	};
	
	api_ajax(q, cb);
}


/*
 * 获取当前参与竞标的人数
 */
function a_demand_req_bidders(id, cb) {
    // B17
    // http://api.wanpinghui.com/{$version}/index.php?r=bid/suppliers&demand_id={$demand_id}
    //
    // {
    //   "succ":"1",
    //   "suppliers":"43",
    // }
	var q = {
		r: "bid/suppliers",
		"demand_id": id 
	};
	
	api_ajax(q, cb);
}
/*
 * 获取当前参与竞标的工程商列表
 */
function a_demand_req_suppliers(id, cb) {
    // B17
    // http://api.wanpinghui.com/{$version}/index.php?r=demand/b42&demand_id={$demand_id}
	//
    // "supplier_list":[ // 空数组：表示尚无工程商参与；
	//      {'id': 1, 'nick': 'a','avatar':"http://cdn.wanpinghui.com/cms/avatar/1.png", "type":"1"},//仅抢单，未留言
	// 		{'id': 2, 'nick': 'b','avatar':"http://cdn.wanpinghui.com/cms/avatar/2.png", "type":"2"},//留过言，未抢单
	// 		{'id': 3, 'nick': 'c','avatar':"http://cdn.wanpinghui.com/cms/avatar/3.png", "type":"3"}//又抢单，又留言
    // ]
	var q = {
		r: "v1.4/demand/b42",
		"demand_id": id 
	};
	
	api_ajax(q, cb);
}

/*
 * 获取自己本次抢单的结果（等待结束时调用） 
 */
function a_demand_req_bid_result(id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=bid/result&demand_id={$demand_id}	
	// {
	//    "succ":"1",
	//    "result": 1,//1：抢单成功，-1：抢单落选（就差一点，您落选了），-2：未参与，-3：抢单进行中
	//     "client_info": {
	//         "nick": "张三",
	//         "phone": "13800005438"
	//     }, // result为1，此值须存在
	// }

	var q = {
		r: "bid/result",
		"demand_id": id 
	};
	
	api_ajax(q, {
		succ: function(json) { // 为了不把result的值细节扩散出去，这里再封装一次
			if (1 == json.result) {
			  	cb.succ(json);
		  	} else if (-1 == json.result) {
			  	cb.lost(json);
            } else {
                cb.x(json);
            }
		},
        fail: function(json) {
            cb.fail(json);
        }
	});
}

/*
 * 获取（某单）抢单的供应商列表
 */
function a_demand_req_bid_users(id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=bid/users&demand_id={$demand_id}
	//{
	//   "succ":"1",
	//   "rank": 56,//如果该用户未参与抢单，则rank值为所有参与抢单人数
	//   "list":[
	//   	{
	//      	"nick": "李三",
	//          "bid_time": "2015-12-29 12:34",
	//          "succ": "0"
	//      },
	//      ...                                  
	//   ]
	//} 	

	var q = {
		r: "bid/users",
		"demand_id": id 
	};
	
	api_ajax(q, cb);
}

/*
 * （工程商）提交（竞标）方案
 */ 
function a_demand_commit_scheme(data, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=scheme/save
	// 
	// | 参数 | 含义 | 备注 |
	// |:------:|:------:|:------:|
	// | demand_id | 需求id | 必填 |
	// | supplier_scheme_id | 工程方案id | 选填，仅用于修改时 |
	// | price | 工程价 | 必填 |
	// |summery | 综述 | 必填 |
	// | module | 模组 | 必填 |
	// | chip | 芯片 | 必填 |
	// | power |电源 | 必填 |
	// | controller | 控制 | 必填 |
	// | note | 备注 | 选填 |

	api_assert_has_key(data, 'demand_id');
	api_ajax_post("scheme/save", data, cb);
}

/*
 * 客户支付(选中方案的)订金
 */
function a_demand_pay_deposit(scheme_id, cb) {
    // http://api.wanpinghui.com/{$version}/index.php?r=pay/deposit
    //
    // POST
    // |supplier_scheme_id|工程方案id|必填|

	var data = {
		"supplier_scheme_id" : scheme_id 
	};

 	api_ajax_post("pay/deposit", data, cb);
}

/*
 * 用户确认工程商安装完成
 */ 
function a_demand_client_confirm_install_done(demand_id, cb) {
	// http://api.wanpinghui.com/index.php?r=demand/client-confirm-install
	var data = {"demand_id": demand_id};
	api_ajax_post("demand/client-confirm-install", data, cb);

    bd_track_client_confirm_install();
} 

/*
 * 用户确认工程商维修完成
 */ 
function a_demand_client_confirm_repair_done(demand_id, cb) {
	// http://api.wanpinghui.com/index.php?r=demand/client-confirm-repair
	var data = {"demand_id": demand_id};
	api_ajax_post("demand/client-confirm-repair", data, cb);
} 

/*
 * 工程商提交“安装完成”
 */ 
function a_demand_supplier_commit_install(demand_id, cb) {
    // http://api.wanpinghui.com/index.php?r=demand/supplier-install
	var data = {"demand_id": demand_id};
	api_ajax_post("demand/supplier-install", data, cb);
}

/*
 * 工程商提交“维修完成”
 */ 
function a_demand_supplier_commit_repaired(demand_id, cb) {
    // http://api.wanpinghui.com/index.php?r=demand/supplier-repair
	var data = {"demand_id": demand_id};
	api_ajax_post("demand/supplier-repair", data, cb);
}

/*
 * 客户取消订单
 */ 
function a_demand_cancel(demand_id, reason, cb) {
	// - 客户可以在任何阶段取消需求订单
	// - 如果客户支付了保证金，则需要工程商或管理员确认后，才可退还保证金
	// - 取消需求订单时，需要填写取消原因
	// 
	// ## 请求地址
	// http://api.wanpinghui.com/{$version}/index.php?r=demand/cancel&demand_id={$demand_id}&reason={$reason}
	// | 参数 | 含义 | 备注 |
	// |:------:|:------:|:------:|
	// |demand_id|需求id|必填|
	// |reason|原因|必填|
	// 
	// {
	//   "succ":"1"
	// }

	var q = {
		r: "demand/cancel",
		"demand_id": demand_id,
		"reason": reason
	};

	api_ajax(q, cb);
}

/*
 * 客户恢复（已取消的）的需求
 */ 
function a_demand_resume(demand_id, cb) {
	// 客户可以取消交易后，在未得到工程商或管理员确认前，可以随时恢复交易。
	// http://api.wanpinghui.com/{$version}/index.php?r=demand/resume&demand_id={$demand_id}
	// {
	//   "succ":"1"
	// }

	var q = {
		r: "demand/resume",
		"demand_id": demand_id
	};

	api_ajax(q, cb);
}

/*
 * 客户评价供应商
 */ 
function a_demand_evaluate_supplier(supplier_id, demand_id, score, cb) {
	// http://api.wanpinghui.com/index.php?r=evaluate/supplier
	// 
	// POST
	// 
	// |:------:|:------:|:------:|
	// |supplier_id|工程商id|必填|
	// |demand_id|需求id|必填|
	// |score|分值|必填(数字0-5)|
	
	var data = {
		'supplier_id': supplier_id,
		'demand_id': demand_id,
		'score': score 
	};

	api_ajax_post("evaluate/supplier", data, cb);
}

/*
 * 工程商留言-b28
 */ 
function a_demand_comment_supplier(demand_id, cb) {
	// 加载评论内容
	// http://api.wanpinghui.com/{$version}/index.php?r=demand/comment&demand_id={$demand_id}&tpl={$tpl}
	

	var q = {
		r: "demand/comment",
		"demand_id": demand_id

	};

	api_ajax(q, cb);
}

/*
 * 保存留言回复-b29
 */ 
function a_demand_discuss_comment_supplier(entity, content, parentId, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=comment/default/create
	// 
	// POST
	// ## 参数
	// |          参数         |       含义      | 备注 |
	// |-----------------------|-----------------|------|
	// | entity                | b28接口获取的值 | 必填 |
	// | CommentModel[content] | 评论内容        | 必填 |
	
	var data = {
		'entity': entity,
		'content': content,
		'parentId':parentId
	};

	api_ajax_post("comment/default/create", data, cb);
}


/*
 * 删除评论-b32
 */ 
function a_discuss_comment_delete(id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=comment/default/delete&id={$id}
	// 
	// POST
	// ## 参数
	// |          参数         |       含义      | 备注 |
	// |-----------------------|-----------------|------|
	// | id                    | 评论id          | 必填 |
	
	var data = {
		'id': id
	};

	api_ajax_post("comment/default/delete", data, cb);
}

/*
 * c33-短信验证码激活待完善的项目
 */
function a_demand_activate_project(phone, passcode, demand_id, cb) {
    // http://api.xxtao.com/index.php?r=v1.4/demand/c33
    //
    // POST
    // |phone|手机号|必填|
    // |passcode|验证码|必填|
    // |demand_id|需求id|必填|

	var data = {
		"phone" : phone,
		"passcode": passcode,
		"demand_id": demand_id
	};

 	api_ajax_post("v1.4/demand/c33", data, cb);
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-02-01 19:25:12
 
/*
 * 获取用户基本信息
 */
// function a_profile_req(cb) {
//
// 	var q = {
// 		r: "user/c31"
// 	};
//
// 	api_ajax(q, cb);
// }
/*
 * 网易云信版本
 * 获取用户基本信息
 */
function a_profile_req(cb) {

	var q = {
		r: "user/c32"
	};

	api_ajax(q, cb);
}
//当前客户是否是发标的客户
function a_req_info_and_invite(cb) {
	var isguest;
	a_profile_req({
		succ:function (user) {
			var href = window.location.href;
			var demand_id = qs('demand_id');
			var demand = href.indexOf('demand.html');
			if(demand > 0 && demand_id) {
				a_demand_req_information(demand_id,{
					succ:function (json) {
						if(user.user_id != json.client_id && user.user_type == '1'){
							user.isCurrUserIsNotInvitor = true;
							cb.succ && cb.succ(user);
						}else{
							cb.succ && cb.succ(user);
						}
					},
					fail:function () {
						isguest = false;
						cb.fail && cb.fail(isguest);
					}
				})
			}else{
				cb.succ && cb.succ(user);
			}
			
		},
		fail: function () {
			isguest = true;
			cb.fail && cb.fail(isguest);
		}
	})
}

/*
 * 提交用户基本信息
 */
function a_profile_save(data, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=v1.4/user/c38
	// 1、客户时
	//
	// | 参数 | 含义 | 备注 |
	// |:------:|:------:|:------:|
	// |nick|昵称|选填| 
	// |phone|手机号|选填| 
	// |address|地址|选填| 
	//
	// 2、工程商时
	//
	// | 参数 | 含义 | 备注 |
	// |:------:|:------:|:------:|
	// |nick|昵称|选填| 
	// |phone|手机号|选填| 
	// |address|地址|选填| 
	// |idcard|身份证号|选填| 
	//
	api_ajax_post("v1.4/user/c38", data, cb);
}

/*
 * 获取供应商“我的钱包”（账户余额、流水明细）
 */ 
function a_profile_req_wallet(cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=exchange/list
	// {
	//   "succ":"1",
	//   "account":24595,//账户余额
	//   "list":[
	//     {"title":"订单完成",type:"1","money":12000,"_intm":"2015-12-31"},
	//     {"title":"缴纳诚意金",type:"2","money":2000,"_intm":"2015-12-31"},
	//     {"title":"提现请求",type:"2","money":10000,"_intm":"2015-12-31"},
	//   ]
	// }
	
	var q = {
		r: "exchange/list"
	};

	api_ajax(q, cb);
}
/*
 * 工程商激活
 */
function b_supplier_activate(data, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=supplier/activate
	// |   参数  |   含义   | 备注 |
	// |---------|----------|------|
	// | nick    | 昵称     | 选填 |
	// | sex     | 性别   | 选填 |
	api_ajax_post("supplier/activate", data, cb);
}
/*
 * 工程商名片
 */
function b_supplier_card(user_id, cb) {
	// http://api.wanpinghui.com/{$version}/index.php?r=supplier/b31&user_id={$user_id}
	var q = {
		r: "supplier/b31",
		"user_id": user_id 
	};

	api_ajax(q, cb);
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-02-24 16:42:54
 
function a_repo_req_cases(q, cb) {
	// http://www.wanpinghui.com/{$version}/index.php?r=search/anli&color={$color}&location={$location}&style={$style}&span={$span}
    //		&install_type={$install_type}&keyword={$keyword}&sort={$sort}&page={$page}
	//		
	// |color|颜色|选填|
	// |location|场地|选填|
	// |style|特点|选填|
	// |span|间距|选填|
	// |install_type|安装方式|选填|
	// |keyword|搜索关键字|选填|
	// |page|页数|选填，默认：1|
	// |sort|排序类型|默认:1,（1：最新，2:最热）|
	// 
	// {
	//     "succ":"1",
	//     "totals":2,
	//     "pagesize":10,
	//     "list":[
	//         {
	//           "demand_id":"1",
	//           "demand_pic" : "",
	//           "price" : "1256238",
	//           "address" : "望京soho",
	//         },
	//         {
	//           "demand_id":"3",
	//           "demand_pic" : "3.jpg",
	//           "price" : "1254887",
	//           "address" : "望京soho",
	//         }
	//     ]
	// }

	q.r = 'search/anli';
	api_ajax(q, cb);
}

function a_repo_req_topics(q, cb) {
	// http://www.wanpinghui.com/{$version}/index.php?r=search/special&keyword={$keyword}&sort={$sort}&page={$page}
	//
	// |page|页数|选填，默认：1|
	// |keyword|搜索关键字|选填|
	// |sort|排序类型|默认:1,（1：最新，2:最热）|
	// 
	// {
	//     "succ":"1",
	//     "totals":2,
	//     "pagesize":10,
	//     "list":[
	//         {
	//           "special_id":"1",
	//           "pic" : "",
	//           "title" : "1256238",
	//           "sub_title" : "望京soho",
	//           "content" : "已派供应商齐普光电王先生为您上门查看故障并维修，....，无法维修使用，现已为您更换了新的控制器（诺瓦w578）"
	//         },
	//         ...
	// 		]
	// }
	
	q.r = 'search/special';
	api_ajax(q, cb);
}


function a_repo_req_supplier_list(lng, lat, size, cb) {
	// 	## 请求地址
	// 	http://api.wanpinghui.com/index.php?r=supplier/infolist&page={$page}&size={$size}&lng={$lng}&lat={$lat}
	// 
	// 	## 参数
	// 	| 参数     | 含义       | 备注            |
	// 	| :------: | :------:   | :------:        |
	// 	| page     | 页数       | 默认：1         |
	// 	| size     | 每次展示数 | 默认：500       |
	// 	| lng      | 经度       | 格式：$min,$max ,示例：10.234563,85.245674|
	// 	| lat      | 纬度       | 格式：$min,$max  ,示例：10.234563,85.245674|
	//
	// {
	//   "succ":"1",
	//   "list":[
	// 	{
	// 		"supplier_id":"23",
	// 		"lng":"116.480665",
	// 		"lat":"39.996404",
	// 		"nick":"姚先生",
	// 		"address":"北京朝阳望京soho",
	// 		"city_name":"北京",
	// 		"tel":"13689547824",
	// 		"stars":"3"
	// 	},
	//   ]
	// }
	
	var q = {
		r: 'supplier/infolist',
		size: size,
		lng: lng || '',
		lat: lat || ''
	};

	api_ajax(q, cb);
}

// 获取指定城市的工程商数量
function a_repo_req_supplier_count_in_city(city_id, cb) {
    // http://api.wanpinghui.com/index.php?r=supplier/b30&city_id={$city_id}
    // { 
    //     'succ': '1',
    //     'cnt':'167',
    // }
    
	var q = {
		r: "supplier/b30",
		city_id: city_id
	};

	api_ajax(q, cb);
}

function a_repo_req_article_detail(id, cb) {
	//	http://api.wanpinghui.com/index.php?r=article/detail&article_id={$article_id}
	//
	//	get
	//
	//	| 参数       | 含义     | 备注     |
	//	| :------:   | :------: | :------: |
	//	| article_id | 文章id   | 必填     |

	var q = {
		r: "article/detail",
		article_id: id
	};

	api_ajax(q, cb);
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-11-22 10:22:54
 
// http://api.xxtao.com/index.php?r=conf/dict
// 理论上来说，应该取api的该接口，以保证数据最新。但，那样会让代码稍复杂，似无必要。跟Los几番沟通，他坚持服务端不动。
// 那我只好参照此时的接口数据自己弄一个字典。以丧失代码永远正确的代价，换取代码的简洁

var api_dict = {
  demand: {
    type: {
      "0": "其它", 
      "1": "门头屏", 
      "2": "户外广告屏", 
      "3": "信息告示屏", 
      "4": "舞台用屏", 
      "5": "室内高清屏"
    },
    loc: {
      "1": "户外",
      "2": "室内",
      "3": "半户外"
    }, 
    color: {
      "1": "单色",
      "2": "双色",
      "3": "全彩"
    }
  },
} 


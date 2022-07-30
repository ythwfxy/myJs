//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#onetalk_cont').innerHTML=data.hitokoto
        document.querySelector('#onetalk_auth').innerHTML=data.from
    })
    .catch(console.error)

//获取天气
//每日限量 100 次
//请前往 https://www.tianqiapi.com/ 申请（免费）
fetch('https://www.yiketianqi.com/free/day?appid=27518395&appsecret=MvuKDWs1&unescape=1')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.weather_left').innerHTML=data.city
        document.querySelector('.weather_right').innerHTML=data.wea
        document.querySelector('.tem_low').innerHTML=data.tem_night
        document.querySelector('.tem_high').innerHTML=data.tem_day
    })
    .catch(console.error)
//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.querySelector('.time').innerHTML=y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span>"
    document.querySelector('.time_show').innerHTML=h + ":" + m + ":" + s
    //document.getElementById("time").innerHTML = y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>";
    t = setTimeout(time, 1000);
}
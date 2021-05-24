define(function() {
    project.embedCss('@charset "UTF-8";.Audio{position:relative;width:40px}.Audio .pgs{width:40px;background-color:#e3e8ee;text-align:center;position:relative;overflow:hidden}.Audio .pgs .pgs-play{position:absolute;top:1px;left:4.65%;width:0;height:32px;background-color:#003894;z-index:1}.Audio .pgs img{width:326px;position:relative;z-index:2;margin-top:-1px}.Audio .audio-name{position:absolute;top:0;width:100%;left:0;text-align:center;color:#666;font-size:12px}.Audio .controls{width:100%;height:40px;padding:0;text-align:center}.Audio .controls .a-play{border:none;background:0 0;outline:0;padding:0}.Audio .controls .icon-pause-one{border:0;outline:0;padding:0;width:40px;height:40px;background-image:url(/images/iwidgets/Audio/play-01.gif);background-image:none\0;background-repeat:no-repeat;background-position:0 0;background-size:40px 40px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/play-01.gif, sizingMethod=scale);-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/play-01.gif,sizingMethod=scale)";display:block;vertical-align:middle}.Audio .controls .icon-pause-static{border:0;outline:0;padding:0;width:40px;height:40px;background-image:url(/images/iwidgets/Audio/pause-02.png);background-image:none\0;background-repeat:no-repeat;background-position:0 0;background-size:40px 40px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/pause-02.png, sizingMethod=scale);-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/pause-02.png,sizingMethod=scale)";display:block;vertical-align:middle}.Audio .controls .icon-play-one{width:40px;height:40px;display:block;color:#003894;background-image:url(/images/iwidgets/Audio/pause-01.gif);background-image:none\0;background-repeat:no-repeat;background-position:0 0;background-size:40px 40px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/pause-01.gif, sizingMethod=scale);-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/pause-01.gif,sizingMethod=scale)";background-size:40px 40px}.Audio .controls .icon-play-static{width:40px;height:40px;display:block;color:#003894;background-image:url(/images/iwidgets/Audio/play-02.png);background-image:none\0;background-repeat:no-repeat;background-position:0 0;background-size:40px 40px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/play-02.png, sizingMethod=scale);-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=/images/iwidgets/Audio/play-02.png,sizingMethod=scale)";background-size:40px 40px}.Audio .controls .icon-pause{font-size:36px;width:40px;height:40px;display:block;color:#003894}.Audio .controls span{color:#b3b5b7;font-size:12px;display:inline-block;width:40px;text-align:center}.Audio .controls .audio-time{display:inline-block;vertical-align:middle}');

    var baseIWidgets = project.baseIWidgets;
    var Widget = (function(){
        var CON = function(dom){
            baseIWidgets.BaseIWidget.call(this, dom);
            this.audio = document.getElementById("audioTag");
            this.playBtnIcon = $(this._els.play).find('span');
            this.progress = $(this._els.progress);
            var that = this;
            //读取视频长度,设置页面时长显示
            //$(that._els.audioTime).text(transTime(this.audio.duration));


            this.find('#audioTag').on("loadstart canplaythrough durationchange",function () {
                //$(that._els.audioTime).text(transTime(this.duration));
                $(that._els.audioTime).text(transTime(this.duration));
            });
        };
        potato.createClass(CON, baseIWidgets.BaseIWidget);

        //播放暂停控制
        CON.prototype._ievent_playPause = function () {
            var that = this;
            //如果录音加载失败
            if($(this._els.audioTime).text()=='0'){
                $(this._els.audioTime).text('录音加载失败');
                return false;
            }

            var audio = document.getElementById("audioTag");
            var timer1;
            var timer2;
            clearTimeout(timer1);
            clearTimeout(timer2);
            
            if(audio.paused){
                audio.play();
                //改变icon
                this.playBtnIcon.removeClass();
                this.playBtnIcon.removeClass('icon-play-static').addClass('icon-pause-one');
                timer1 = setTimeout(function(){
                    that.playBtnIcon.removeClass('icon-pause-one').addClass('icon-pause-static');
                },500)
            } else{
                audio.pause();
                this.playBtnIcon.removeClass();
                this.playBtnIcon.removeClass('icon-play-static').addClass('icon-play-one');
                timer2 = setTimeout(function(){
                    that.playBtnIcon.removeClass('icon-play-one').addClass('icon-play-static');
                },500)
            }

            //监听音频播放时间并更新进度条
            audio.addEventListener('timeupdate',updateProgress,false);
            //监听播放完成事件
            audio.addEventListener('ended',audioEnded,false);
        };

        return CON;
    })();

    return Widget;
});


//更新进度条
function updateProgress() {
    var audio =document.getElementsByTagName('audio')[0];
    $('.audio-time').html(transTime(audio.duration-audio.currentTime));
}
//播放完成
function audioEnded() {
    var audio =document.getElementsByTagName('audio')[0];
    audio.currentTime=0;
    audio.pause();
    $('.play-pause>span').removeClass('icon-pause-static').addClass('icon-pause-one');
    setTimeout(function(){
        $('.play-pause>span').removeClass('icon-pause-one').addClass('icon-play-static');
    },500)
}

//转换音频时长格式
function transTime(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration/60);
    var sec = duration%60+'';
    var isM0 = ':';
    if(minute == 0){
        minute = '00';
    }else if(minute < 10 ){
        minute = '0'+minute;
    }
    if(sec.length == 1){
        sec = '0'+sec;
    }
    return minute+isM0+sec
}


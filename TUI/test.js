var videoplayer,
    loaded,
    list = $('#list'),
    btn = $('#btn'),
    timeout,
    autonext,
    needAutoNext,
    line = 2;

insertFlash();
function onTudouPlayerReady(id) {
    loaded = true;
    videoplayer.addEventListener('PLAYER_PLAY_END', 'playEnd');
}
function insertFlash(iid, tag, type, code, withRecommendList, original, w, h) {
    var isOriginal = (original == 'true' ? 1 : 0);
    if(!videoplayer) {
        TUI.swfobject(main_domain + '/tvp/88098/&tpa=dW5pb25faWQ9MTAwNTA4XzEwMDAwMV8wMl8wMQ/v.swf', '400', '400', { playerId: 'player', JSEnabled: 'true', videoClickNavigate: false,  code: code, autoPlay: true}, { wmode: 'opaque', allowscriptaccess: 'always', allowfullscreen: 'true' }, { id: 'player', name: 'player' })
            .load('player');
        videoplayer = TUI.getFlashMC('player');
    }
    else if(loaded) {
        if(timeout)
            clearTimeout(timeout);
        if(autonext)
            clearTimeout(autonext);
        timeout = setTimeout(function() {
            videoplayer.loadAndPlayVideo(iid);
        }, 500);
    }
}

/*function playerReady() {
    loaded = true;
}*/
function playEnd(e) {
   console.log('End');
}


var $test = $('.box');

console.log($test.attr('data-code'), $test.prop('data-code'));

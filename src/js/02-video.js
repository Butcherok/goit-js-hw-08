import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(timeNow) {
    localStorage.setItem('videoplayer-current-time', timeNow.seconds);
}, 1000)
);

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));

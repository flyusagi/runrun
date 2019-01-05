(function(){
    'use strict';
    var audioElem;
    const imgHina = document.getElementById('hina-img');
    var sound = document.getElementById('music');
    var audio = new Audio();
    function audioPlay(){
        sound.play();
    }
    imgHina.addEventListener('click',audioPlay);
})();
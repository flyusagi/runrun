(function(){
    'use strict';
    var audioElem;
    const imgHina = document.getElementById('hina-img');
    var sound = document.getElementById('music');
    const countArea = document.getElementById('count-area');
    const tweetArea = document.getElementById('tweet-area');
    var audio = new Audio();
    var count = 0;
    function audioPlay(){
        function removeAllChildren(element){
            while (element.firstChild){ // 子供の要素があるかぎり削除
                element.removeChild(element.firstChild);
            }
        }
        sound.play();
        count ++;
        removeAllChildren(countArea);
        const header = document.createElement('h1');
        header.innerText = count + "るんっ…";
        var result = count + "るんっ…";
        countArea.appendChild(header);
        removeAllChildren(tweetArea);
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=るんっ…&ref_src=twsrc%5Etfw'
        anchor.setAttribute('href',hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text',result);
        anchor.innerText = 'るんっ…';
        tweetArea.appendChild(anchor);

        twttr.widgets.load();
    }
    imgHina.addEventListener('click',audioPlay);
})();
// <a href="https://twitter.com/intent/tweet?button_hashtag=るんっ…&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="てすと" data-show-count="false">Tweet #るんっ…</a>
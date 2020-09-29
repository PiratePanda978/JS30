window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend',function(){
        key.classList.remove('playing');
    });
});
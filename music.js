var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var next = document.querySelector('#next');
var audio = document.querySelectorAll("audio");
var right = document.querySelector('#right');
var songname = document.querySelector('#songname')
var temp = ``;
var currentSongIndex = 0;



function display() {
    audio.forEach(function(elem, index) {
        temp += ` <div id="box">
        <h4>${elem.getAttribute('src')}</h4>
        <h6>Artist</h6>
        <button id="${index}">play</button>
    </div>`

    })
    document.querySelector('#right').innerHTML = temp;

}




function PlaySongs(currentSongIndex) {
    // audio[currentSongIndex].pause()
    audio[currentSongIndex].play()
}

function StopSongs(currentKeyValue) {
    audio[currentKeyValue].pause()
    audio[currentKeyValue].currentTime = 0;
}



right.addEventListener("click", function(dets) {

    var currentKeyValue = Number(dets.target.id);

    // audio[currentKeyValue].play();

    console.log(currentKeyValue)
    StopSongs(currentSongIndex);
    PlaySongs(currentKeyValue);

    currentSongIndex = currentKeyValue
    displaySongName(currentKeyValue)

})

function displaySongName(currentKeyValue) {
    songname.textContent = audio[currentSongIndex].getAttribute('src')
}
btn1.addEventListener('click', function() {
    btn1.addEventListener('click', function() {
        PlaySongs(currentSongIndex)

    })


})
btn2.addEventListener('click', function() {
    StopSongs(currentSongIndex);

})

// console.log(audio)
display()
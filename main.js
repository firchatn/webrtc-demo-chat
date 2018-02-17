'use strict';


// Put variables in global scope to make them available to the browser console.
var audio = document.querySelector('audio');

var clickerFn;
var el = document.getElementById('p');
var x = document.getElementById("myAudio");
    clickerFn = function() {
    console.log('Click just happened');
    if (x.paused) {
        x.play();
    }
    else{
       x.pause();
  }

}

el.addEventListener('click', clickerFn);
alert("end");

var constraints = window.constraints = {
  audio: true,
  video: false
};

function handleSuccess(stream) {
  var audioTracks = stream.getAudioTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using audio device: ' + audioTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  audio.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);


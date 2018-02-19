var id1;
var id2;
var peer1 = new Peer({key: 'l15v4rrvzkcvj9k9'});
var peer2 = new Peer({key: 'r64168xoht4yrpb9'});
var stream;
var x = document.getElementById("myAudio");
var clickerFn;
var el = document.getElementById('p');
var audio = document.querySelector('audio');
var iduser = document.getElementById('p');

var constraints = window.constraints = {
  audio: true,
  video: false
};

clickerFn = function() {
    if (x.paused) {
        x.play();
    }
    else{
       x.pause();
  }
}

el.addEventListener('click', clickerFn);


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




peer1.on('open', function(id1) {
  console.log('I\'m peer1 and my id is: ' + id1);
  
});

peer2.on('open', function(id2) {
  console.log('I\'m peer2 and my id is: ' + id2);
});

mediaStream = stream;
console.log('ok1');
peer1.call(id2, mediaStream);
console.log('ok2');
peer2.on('call', function(call) {
    console.log('ok3');
    // answer call from peer1
    call.answer(mediaStream);    
    console.log('ok');
    // stream to the #partner canvas
    call.on('stream', function(stream){
        audio.srcObject = window.URL.createObjectURL(stream);
    });
});
console.log('ok4');
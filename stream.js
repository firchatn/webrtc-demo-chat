  var id2;
  var peer1 = new Peer({key: 'l15v4rrvzkcvj9k9'});
  var peer2 = new Peer({key: 'r64168xoht4yrpb9'});
  var stream;
  var x = document.getElementById("myAudio");



var clickerFn;
var el = document.getElementById('p');
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


peer1.on('open', function(id) {
  console.log('I\'m peer1 and my id is: ' + id);
});


peer2.on('open', function(id2) {
  console.log('I\'m peer2 and my id is: ' + id2);
});



var audio = document.querySelector('audio');

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


mediaStream = stream;


peer1.call(id2, mediaStream);
// answer call from peer1
peer2.on('call', function(call) {
  call.answer(mediaStream);
});

call.on('stream', function(stream) {
  // `stream` is the MediaStream of the remote peer.
  // Here you'd add it to an HTML video/canvas element.
  audio.srcObject = stream;

});
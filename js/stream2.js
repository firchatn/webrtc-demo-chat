
var peer2 = new Peer(2,{key: 'r64168xoht4yrpb9'});
var x = document.getElementById("myAudio");
var audio = document.querySelector('audio');
peer2.on('open', function(id2) {
  console.log('I\'m peer2 and my id is: ' + id2);


navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
console.log(' local st55ream');
peer2.on('call', function(call) {
console.log(' local stream');
  navigator.getUserMedia({video: false, audio: true}, function(stream) {
    call.answer(stream); // Answer the call with an A/V stream.
    call.on('stream', function(remoteStream) {
      // Show stream in some <video> element.
audio.srcObject = window.URL.createObjectURL(remoteStream);
console.log(' local stream');
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });
});


});




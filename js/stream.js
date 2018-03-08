
var peer = new Peer(1,{key: 'l15v4rrvzkcvj9k9'});

function calll(){
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
navigator.getUserMedia({video: false, audio: true}, function(stream) {
  var call = peer.call(2, stream);
  call.on('stream', function(remoteStream) {
    // Show stream in some <video> element.
console.log('stream on');
  });
}, function(err) {
  console.log('Failed to get local stream' ,err);
});
}



$(document).ready(function())
SC.initialize({
    client_id: 'af74921a176ba7c41d3e7b07f55b663c'
    redirect_uri: "https://soundcloud.com/connect?state=SoundCloud_Dialog_62975&client_id=609ae0b573913db156968e0ec38c1e26&redirect_uri=http%3A%2F%2Fdevelopers.soundcloud.com%2Fcallback.html&response_type=code_and_token&scope=non-expiring&display=popup"
  });
  SC.connect(function() {
    SC.get('/me', function(me) { 
      alert('Hello, ' + me.username); 
  });
  SC.get("/tracks/293",function(track){
      SC.oEmbed(track.permalink_url, document.getElementById('player'));
  });
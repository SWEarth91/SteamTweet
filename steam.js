var Twitter = require('node-tweet-stream');
var express = require('express'); // Get the module
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var t = new Twitter({
    consumer_key: 'm1U7OV4rD7Oko1FfysSzfc4pU',
    consumer_secret: 'agGdkI49lQHtU6mWZt1F19ZmB3KtK9SwHyidytezBWfD8Cjk0Y',
    token: '965191716838948864-IHAGlWCAV0Pdw955JmAcOnRUGgecZPo',
    token_secret: 'hCCTAMrpR2urRrlp0purve5HStJZU6JEclW1iqi9jReiv'
});

t.on('tweet', function (tweet) {
    io.emit('tweet', tweet);
});

t.track('thailand');
t.track('Thailand');
t.track('phuket');
t.track('Phuket');

io.on('connection', function (socket) {
    console.log('a user connected');
});

app.use("/",express.static(__dirname));

app.listen(process.env.PORT ||3000, function () {
    console.log('listening on :'+process.env.PORT);
});
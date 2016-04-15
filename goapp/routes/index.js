var express = require('express');
var router = express.Router();
var app = express()
var server = require('http').createServer(app).listen(8080);

var io = require('socket.io').listen(server);

var go = require('./gogame');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go-Lava' });
});

io.sockets.on('connection', function (socket) {
    console.log('client connected');
    go.initGame(io, socket);
});



module.exports = router;

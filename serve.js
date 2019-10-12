var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get(/.*/, function (req, res) {
    res.sendFile(__dirname, './dist/index.html');
}).listen(8088, () => {
    console.log('serve start...');
})

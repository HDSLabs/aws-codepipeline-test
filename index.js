// Lambda for codepipeline test
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Denver");
    callback(null, {
        statusCode: '200',
        body: 'The time in Denver is: ' + currentTime.toString(),
    });
};
/**
 * Created by 15050978 on 8/3/2017.
 */
var mongoose = require('mongoose');

var URL = 'mongodb://localhost:27017/cbs';
mongoose.connect(URL, {useMongoClient: true, promiseLibrary: require('q')});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Db connection error:'));
db.once("open", function callback() {
    console.log("Db Happens");
});
module.exports = db;
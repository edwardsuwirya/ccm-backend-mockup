/**
 * Created by 15050978 on 8/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;

var cbsAppInfoSchema = new Schema({
    appName: String,
    appVersion: String,
});

var cbsAppInfo = mongoose.model('cbsAppInfo', cbsAppInfoSchema, 'cbsAppInfo');

module.exports = cbsAppInfo;
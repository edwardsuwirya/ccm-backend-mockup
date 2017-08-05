/**
 * Created by 15050978 on 8/3/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;

var services = new Schema({
    sc:String,
    ph:String
});

var roles = new Schema({
    menuCode: String,
    label: String,
    url: String,
    parent: String
});

var cbsUserSchema = new Schema({
    userName: String,
    password: String,
    role:String,
    branchCode:String,
    menu: [roles],
    sv:[services]
});

var cbsUsers = mongoose.model('cbsUsers', cbsUserSchema, 'cbsUsers');

module.exports = cbsUsers;
/**
 * Created by 15050978 on 1/3/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var port = 8888;
var router = express.Router();

var db = require('./db-conn');
var cbsUser = require('./schema/cbs-user');
var cbsAppInfo = require('./schema/cbs-app-info');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:6969");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
    res.send('im the home page!');
});

router.post('/login', function (req, res) {
    var un = req.body.un;
    var pw = req.body.pw;
    var payload = {};

    cbsUser.find({"userName": un, "password": pw}, function (err, users) {
        if (err) throw err;
        // M00 = Home
        // M01 = Dashboard
        // M02 = Administration
        // M03 = Parameter
        // M04 = Universal Loan
        // M05 = Library Transaction

        if (users && users.length > 0) {
            var user = users[0];
            var appName = '';
            var appVersion = '';
            var getAppInfo = cbsAppInfo.find();
            getAppInfo.exec(function (err, infos) {
                var info = infos[0];
                appName = info.appName;
                appVersion = info.appVersion;
                payload = {
                    'un': user.userName,
                    'rl': user.role,
                    'bc': user.branchCode,
                    'ap': appName,
                    'vr': appVersion,
                    'mn': user.menu,
                    'sv': user.sv
                };
                res.json(payload);
            });
        } else {
            console.log('Auth Failed');
            res.send(401);
        }
    })
});

app.use('/', router);

app.listen(port);
console.log('App happens on port ' + port);


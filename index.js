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
            var appName='';
            var appVersion='';
            var getAppInfo = cbsAppInfo.find();
            getAppInfo.exec(function(err,infos){
                var info = infos[0];
                appName = info.appName;
                appVersion = info.appVersion;
                if (users.userName === 'cbs02') {
                    payload = {
                        'un': user.userName,
                        'rl': user.role,
                        'bc': user.branchCode,
                        'ap': appName,
                        'vr': appVersion,
                        'mn': user.menu,
                        'sv': [
                            {'sc': 'ADD_BRANCH', 'ph': 'addBranch'},
                            {'sc': 'GET_LIST_BRANCH', 'ph': 'getListBranch'},
                            {'sc': 'GET_LIST_BRANCH_PAGING', 'ph': 'getListBranchPaging'},
                            {'sc': 'UPDATE_BRANCH', 'ph': 'updateBranch'},

                            {'sc': 'GET_LIST_BANK_RELATION', 'ph': 'bankRelation/getListBankRelation'},
                            {'sc': 'ADD_BANK_RELATION', 'ph': 'bankRelation/addBankRelation'},
                            {'sc': 'UPDATE_BANK_RELATION', 'ph': 'bankRelation/updateBankRelation'},
                            {'sc': 'GET_LIST_BANK_RELATION_PAGING', 'ph': 'bankRelation/getListBankRelationPaging'},

                            {
                                'sc': 'GET_LIST_COLLATERAL_CHARACTERISTIC',
                                'ph': 'collateralCharacteristic/getListCollateralCharacteristic'
                            },
                            {
                                'sc': 'ADD_COLLATERAL_CHARACTERISTIC',
                                'ph': 'collateralCharacteristic/addCollateralCharacteristic'
                            },
                            {
                                'sc': 'UPDATE_COLLATERAL_CHARACTERISTIC',
                                'ph': 'collateralCharacteristic/updateCollateralCharacteristic'
                            },
                            {
                                'sc': 'GET_LIST_COLLATERAL_CHARACTERISTIC_PAGING',
                                'ph': 'collateralCharacteristic/getListCollateralCharacteristicPaging'
                            },

                            {'sc': 'GET_LIST_COLLATERAL_PUBLISHER', 'ph': 'getListPublisher'},
                            {'sc': 'ADD_COLLATERAL_PUBLISHER', 'ph': 'addPublisher'},
                            {'sc': 'UPDATE_COLLATERAL_PUBLISHER', 'ph': 'updatePublisher'},
                            {'sc': 'GET_LIST_COLLATERAL_PUBLISHER_PAGING', 'ph': 'getListPublisherPaging'},

                            {'sc': 'GET_LIST_COLLATERAL_TYPE', 'ph': 'getListCollateralType'},
                            {'sc': 'ADD_COLLATERAL_TYPE', 'ph': 'addCollateralType'},
                            {'sc': 'UPDATE_COLLATERAL_TYPE', 'ph': 'updateCollateralType'},
                            {'sc': 'GET_LIST_COLLATERAL_TYPE_PAGING', 'ph': 'getListCollateralTypePaging'},

                            {'sc': 'GET_LIST_CREDIT_CHARACTERISTIC', 'ph': 'getListCreditCharacteristic'},
                            {'sc': 'ADD_CREDIT_CHARACTERISTIC', 'ph': 'addCreditCharacteristic'},
                            {'sc': 'UPDATE_CREDIT_CHARACTERISTIC', 'ph': 'updateCreditCharacteristic'},
                            {'sc': 'GET_LIST_CREDIT_CHARACTERISTIC_PAGING', 'ph': 'getListCreditCharacteristicPaging'},

                            {'sc': 'GET_LIST_CREDIT_RATING_AGENCY', 'ph': 'creditRating/getListCreditRatingAgency'},
                            {'sc': 'ADD_CREDIT_RATING_AGENCY', 'ph': 'creditRating/addCreditRatingAgency'},
                            {'sc': 'UPDATE_CREDIT_RATING_AGENCY', 'ph': 'creditRating/updateCreditRatingAgency'},
                            {
                                'sc': 'GET_LIST_CREDIT_RATING_AGENCY_PAGING',
                                'ph': 'creditRating/getListCreditRatingAgencyPaging'
                            },

                            {'sc': 'GET_LIST_CREDIT_TYPE', 'ph': 'getListCreditType'},
                            {'sc': 'ADD_CREDIT_TYPE', 'ph': 'addCreditType'},
                            {'sc': 'UPDATE_CREDIT_TYPE', 'ph': 'updateCreditType'},
                            {'sc': 'GET_LIST_CREDIT_TYPE_PAGING', 'ph': 'getListCreditTypePaging'},

                            {'sc': 'GET_LIST_DEBTOR_CATEGORY', 'ph': 'debtorCategory/getListDebtorCategory'},
                            {'sc': 'ADD_DEBTOR_CATEGORY', 'ph': 'debtorCategory/addDebtorCategory'},
                            {'sc': 'UPDATE_DEBTOR_CATEGORY', 'ph': 'debtorCategory/updateDebtorCategory'},
                            {'sc': 'GET_LIST_DEBTOR_CATEGORY_PAGING', 'ph': 'debtorCategory/getListDebtorCategoryPaging'},

                            {'sc': 'GET_LIST_DEBTOR_STATUS', 'ph': 'getListDebtorStatus'},
                            {'sc': 'ADD_DEBTOR_STATUS', 'ph': 'addDebtorStatus'},
                            {'sc': 'UPDATE_DEBTOR_STATUS', 'ph': 'updateDebtorStatus'},
                            {'sc': 'GET_LIST_DEBTOR_STATUS_PAGING', 'ph': 'getListDebtorStatusPaging'},

                            {'sc': 'GET_LIST_INTEREST_RATE_TYPE', 'ph': 'interestRate/getListInterestRateType'},
                            {'sc': 'ADD_INTEREST_TYPE', 'ph': 'interestRate/addInterestRateType'},
                            {'sc': 'UPDATE_INTEREST_RATE_TYPE', 'ph': 'interestRate/updateInterestRateType'},
                            {
                                'sc': 'GET_LIST_INTEREST_RATE_TYPE_PAGING',
                                'ph': 'interestRate/getListInterestRateTypePaging'
                            },

                            {'sc': 'GET_LIST_MEASUREMENT', 'ph': 'getListMeasurement'},
                            {'sc': 'ADD_MEASUREMENT', 'ph': 'addMeasurement'},
                            {'sc': 'UPDATE_MEASUREMENT', 'ph': 'updateMeasurement'},
                            {'sc': 'GET_LIST_MEASUREMENT_PAGING', 'ph': 'getListMeasurementPaging'},

                            {'sc': 'GET_LIST_PORTOFOLIO', 'ph': 'getListPortofolio'},
                            {'sc': 'ADD_PORTOFOLIO', 'ph': 'addPortofolio'},
                            {'sc': 'UPDATE_PORTOFOLIO', 'ph': 'updatePortofolio'},
                            {'sc': 'GET_LIST_PORTOFOLIO_PAGING', 'ph': 'getListPortofolioPaging'},

                            {'sc': 'GET_LIST_USAGE_ORIENTATION', 'ph': 'getListUsageOrientation'},
                            {'sc': 'ADD_USAGE_ORIENTATION', 'ph': 'addUsageOrientation'},
                            {'sc': 'UPDATE_USAGE_ORIENTATION', 'ph': 'updateUsageOrientation'},
                            {'sc': 'GET_LIST_USAGE_ORIENTATION_PAGING', 'ph': 'getListUsageOrientationPaging'},

                            {'sc': 'GET_LIST_USAGE_TYPE', 'ph': 'getListUsageType'},
                            {'sc': 'ADD_USAGE_TYPE', 'ph': 'addUsageType'},
                            {'sc': 'UPDATE_USAGE_TYPE', 'ph': 'updateUsageType'},
                            {'sc': 'GET_LIST_USAGE_TYPE_PAGING', 'ph': 'getListUsageTypePaging'}
                        ]
                    };
                } else {
                    payload = {
                        'un': user.userName,
                        'rl': user.role,
                        'bc': user.branchCode,
                        'ap': appName,
                        'vr': appVersion,
                        'mn': user.menu,
                        'sv': user.sv
                    };
                }
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


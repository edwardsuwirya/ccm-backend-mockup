/**
 * Created by 15050978 on 1/3/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var port = 8888;
var router = express.Router();

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


    // M00 = Home
    // M01 = Dashboard
    // M02 = Administration
    // M03 = Parameter
    // M04 = Universal Loan
    // M05 = Library Depoist
    // M06 = Collateral Document
    if (un === 'cbs01' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl': 'Officer',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M04', 'label': 'universalLoan', 'url': ''},
                {'menuCode': "M018", 'label': 'list', 'url': '/home/universalLoan', 'parent': 'M04'},
                {'menuCode': "M019", 'label': 'maintenance', 'url': '/home/universalLoan/maintenance', 'parent': 'M04'}
            ],
            'sv': [
                {'sc': 'ADD_BRANCH', 'ph': 'addBranch'},
                {'sc': 'GET_LIST_BRANCH', 'ph': 'getListBranch'},
                {'sc': 'GET_LIST_BRANCH_PAGING', 'ph': 'getListBranchPaging'},
                {'sc': 'UPDATE_BRANCH', 'ph': 'updateBranch'},

                //     'getListBankRelation': 'getListBankRelation',
                // 'addBankRelation': 'addBankRelation',
                // 'updateBankRelation': 'updateBankRelation',
                // 'getListBankRelationPaging': 'getListBankRelationPaging',
                //
                // 'getListCollateralCharacteristic': 'getListBankRelation',
                // 'addCollateralCharacteristic': 'addBankRelation',
                // 'updateCollateralCharacteristic': 'updateBankRelation',
                // 'getListCollateralCharacteristicPaging': 'getListBankRelationPaging',
                //
                // 'getListCollateralIssuer': 'getListBankRelation',
                // 'addCollateralIssuer': 'addBankRelation',
                // 'updateCollateralIssuer': 'updateBankRelation',
                // 'getListCollateralIssuerPaging': 'getListBankRelationPaging',
                //
                // 'getListCollateralType': 'getListBankRelation',
                // 'addCollateralType': 'addBankRelation',
                // 'updateCollateralType': 'updateBankRelation',
                // 'getListCollateralTypePaging': 'getListBankRelationPaging',
                //
                // 'getListCreditCharacteristic': 'getListCreditCharacteristic',
                // 'addCreditCharateristic': 'addCreditCharateristic',
                // 'updateCreditCharacteristic': 'updateCreditCharacteristic',
                // 'getListCreditCharacteristicPaging': 'getListCreditCharacteristicPaging',
                //
                // 'getListCreditRatingAgency': 'getListCreditRatingAgency',
                // 'addCreditRatingAgency': 'addCreditRatingAgency',
                // 'updateCreditRatingAgency': 'updateCreditRatingAgency',
                // 'getListCreditRatingAgencyPaging': 'getListCreditRatingAgencyPaging',
                //
                // 'getListCreditType': 'getListCreditType',
                // 'addCreditType': 'addCreditType',
                // 'updateCreditType': 'updateCreditType',
                // 'getListCreditTypePaging': 'getListCreditTypePaging',
                //
                // 'getListDebtorCategory': 'getListDebtorCategory',
                // 'addDebtorCategory': 'addDebtorCategory',
                // 'updateDebtorCategory': 'updateDebtorCategory',
                // 'getListDebtorCategoryPaging': 'getListDebtorCategoryPaging',
                //
                // 'getListDebtorStatus': 'getListDebtorStatus',
                // 'addDebtorStatus': 'addDebtorStatus',
                // 'updateDebtorStatus': 'updateDebtorStatus',
                // 'getListDebtorStatusPaging': 'getListDebtorStatusPaging',
                //
                // 'getListInterestRateType': 'getListInterestRateType',
                // 'addInterestRateType': 'addInterestRateType',
                // 'updateInterestRateType': 'updateInterestRateType',
                // 'getListInterestRateTypePaging': 'getListInterestRateTypePaging',
                //
                // 'getListMeasurementCategory': 'getListMeasurementCategory',
                // 'addMeasurementCategory': 'addMeasurementCategory',
                // 'updateMeasurementCategory': 'updateMeasurementCategory',
                // 'getListMeasurementCategoryPaging': 'getListMeasurementCategoryPaging',
                //
                // 'getListPortfolioCategory': 'getListPortfolioCategory',
                // 'addPortfolioCategory': 'addPortfolioCategory',
                // 'updatePortfolioCategory': 'updatePortfolioCategory',
                // 'getListPortfolioCategoryPaging': 'getListPortfolioCategoryPaging',
                //
                // 'getListUsageOrientation': 'getListUsageOrientation',
                // 'addUsageOrientation': 'addUsageOrientation',
                // 'updateUsageOrientation': 'updateUsageOrientation',
                // 'getListUsageOrientationPaging': 'getListUsageOrientationPaging',
                //
                // 'getListUsageType': 'getListUsageType',
                // 'addUsageType': 'addUsageType',
                // 'updateUsageType': 'updateUsageType',
                // 'getListUsageTypePaging': 'getListUsageTypePaging',
            ]
        };
    } else if (un === 'cbs02' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl':'Supervisor',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M01', 'label': 'dashboard', 'url': ''},
                {'menuCode': 'M02', 'label': 'administration', 'url': ''},
                {'menuCode': "M001", 'label': 'user', 'url': 'home', 'parent': 'M02'},
                {'menuCode': "M002", 'label': 'role', 'url': 'home', 'parent': 'M02'},
                {'menuCode': "M003", 'label': 'branch', 'url': '/home/branchManagement', 'parent': 'M02'},
                {'menuCode': 'M03', 'label': 'parameter', 'url': ''},
                {'menuCode': "M004", 'label': 'bankRelationship', 'url': '/home/bankRelationship', 'parent': 'M03'},
                {'menuCode': "M005", 'label': 'debtorCategory', 'url': '/home/debtorCategory', 'parent': 'M03'},
                {'menuCode': "M006", 'label': 'creditRatingAgency', 'url': '/home/creditRatingAgency', 'parent': 'M03'},
                {'menuCode': "M007", 'label': 'creditCharacteristic', 'url': '/home/creditCharacteristic', 'parent': 'M03'},
                {'menuCode': "M008", 'label': 'usageOrientation', 'url': '/home/usageOrientation', 'parent': 'M03'},
                {'menuCode': "M009", 'label': 'interestRateType', 'url': '/home/interestRateType', 'parent': 'M03'},
                {'menuCode': "M010", 'label': 'collateralCharacteristic', 'url': '/home/collateralCharacteristic', 'parent': 'M03'},
                {'menuCode': "M011", 'label': 'collateralIssuer', 'url': '/home/collateralIssuer', 'parent': 'M03'},
                {'menuCode': "M012", 'label': 'debtorStatus', 'url': '/home/debtorStatus', 'parent': 'M03'},
                {'menuCode': "M013", 'label': 'portfolioCategory', 'url': '/home/portfolioCategory', 'parent': 'M03'},
                {'menuCode': "M014", 'label': 'creditType', 'url': '/home/creditType', 'parent': 'M03'},
                {'menuCode': "M015", 'label': 'useType', 'url': '/home/useType', 'parent': 'M03'},
                {'menuCode': "M016", 'label': 'measurementCategory', 'url': '/home/measurementCategory', 'parent': 'M03'},
                {'menuCode': "M017", 'label': 'collateralType', 'url': '/home/collateralType', 'parent': 'M03'},

                {'menuCode': 'M04', 'label': 'universalLoan', 'url': ''},
                {'menuCode': "M018", 'label': 'list', 'url': '/home/universalLoan', 'parent': 'M04'},
                {'menuCode': "M019", 'label': 'maintenance', 'url': '/home/universalLoan/maintenance', 'parent': 'M04'}
            ]
        };
    } else if (un === 'cbs03' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl':'Library Officer',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M05', 'label': 'libraryDeposit', 'url': ''},
                {'menuCode': "M020", 'label': 'list', 'url': '/home/libraryDeposit', 'parent': 'M05'},
                {'menuCode': "M021", 'label': 'maintenance', 'url': '/home/libraryDeposit/maintenance', 'parent': 'M05'},
            ]
        };
    } else if (un === 'cbs04' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl':'Library Supervisor',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M01', 'label': 'dashboard', 'url': ''},
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M05', 'label': 'libraryDeposit', 'url': ''},
                {'menuCode': "M020", 'label': 'list', 'url': '/home/libraryDeposit', 'parent': 'M05'},
                {'menuCode': "M021", 'label': 'maintenance', 'url': '/home/libraryDeposit/maintenance', 'parent': 'M05'}
            ]
        };
    } else {
        payload = {};
    }
    res.json(payload);
});


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
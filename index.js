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
    // M05 = Library Transaction
    if (un === 'cbs01' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl': 'Officer',
            'bc': '0208',
            'ap': 'Collateral Bankwide System',
            'vr': '1.0.0',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M04', 'label': 'universalLoan', 'url': ''},
                {'menuCode': "M018", 'label': 'list', 'url': '/home/universalLoan', 'parent': 'M04'},
                {'menuCode': "M019", 'label': 'maintenance', 'url': '/home/universalLoanMaintenance', 'parent': 'M04'},
                {'menuCode': 'M05', 'label': 'libraryTransaction', 'url': ''},
                {
                    'menuCode': "M023",
                    'label': 'documentBorrowedRequest',
                    'url': '/home/documentBorrow/request',
                    'parent': 'M05'
                },
                {
                    'menuCode': "M024",
                    'label': 'documentReturnedRequest',
                    'url': '/home/documentReturn/request',
                    'parent': 'M05'
                }, {
                    'menuCode': "M025",
                    'label': 'documentReleasedRequest',
                    'url': '/home/documentRelease/request',
                    'parent': 'M05'
                },
            ],
            'sv': [
                {'sc': 'GET_LIST_USAGE_TYPE', 'ph': 'getListUsageType'},
                {'sc': 'GET_LIST_USAGE_TYPE_PAGING', 'ph': 'getListUsageTypePaging'}
            ]
        };
    } else if (un === 'cbs02' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl': 'Supervisor',
            'bc': '0208',
            'ap': 'Collateral Bankwide System',
            'vr': '1.0.0',
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
                {
                    'menuCode': "M007",
                    'label': 'creditCharacteristic',
                    'url': '/home/creditCharacteristic',
                    'parent': 'M03'
                },
                {'menuCode': "M008", 'label': 'usageOrientation', 'url': '/home/usageOrientation', 'parent': 'M03'},
                {'menuCode': "M009", 'label': 'interestRateType', 'url': '/home/interestRateType', 'parent': 'M03'},
                {
                    'menuCode': "M010",
                    'label': 'collateralCharacteristic',
                    'url': '/home/collateralCharacteristic',
                    'parent': 'M03'
                },
                {'menuCode': "M011", 'label': 'collateralIssuer', 'url': '/home/collateralIssuer', 'parent': 'M03'},
                {'menuCode': "M012", 'label': 'debtorStatus', 'url': '/home/debtorStatus', 'parent': 'M03'},
                {'menuCode': "M013", 'label': 'portfolioCategory', 'url': '/home/portfolioCategory', 'parent': 'M03'},
                {'menuCode': "M014", 'label': 'creditType', 'url': '/home/creditType', 'parent': 'M03'},
                {'menuCode': "M015", 'label': 'useType', 'url': '/home/useType', 'parent': 'M03'},
                {
                    'menuCode': "M016",
                    'label': 'measurementCategory',
                    'url': '/home/measurementCategory',
                    'parent': 'M03'
                },
                {'menuCode': "M017", 'label': 'collateralType', 'url': '/home/collateralType', 'parent': 'M03'},

                {'menuCode': 'M04', 'label': 'universalLoan', 'url': ''},
                {'menuCode': "A001", 'label': 'approval', 'url': '/home/universalLoan/approval', 'parent': 'M04'},
                {
                    'menuCode': "A002",
                    'label': 'maintenanceApproval',
                    'url': '/home/universalLoanMaintenance/approval',
                    'parent': 'M04'
                },
                {'menuCode': 'M05', 'label': 'libraryTransaction', 'url': ''},
                {
                    'menuCode': "A005",
                    'label': 'documentBorrowedRequestApproval',
                    'url': '/home/documentBorrow/request/approval',
                    'parent': 'M05'
                },
                {
                    'menuCode': "A006",
                    'label': 'documentReturnedRequestApproval',
                    'url': '/home/documentReturn/request/approval',
                    'parent': 'M05'
                }, {
                    'menuCode': "A007",
                    'label': 'documentReleasedRequestApproval',
                    'url': '/home/documentRelease/request/approval',
                    'parent': 'M05'
                },
            ],
            'sv': [
                {'sc': 'ADD_BRANCH', 'ph': 'addBranch'},
                {'sc': 'GET_LIST_BRANCH', 'ph': 'getListBranch'},
                {'sc': 'GET_LIST_BRANCH_PAGING', 'ph': 'getListBranchPaging'},
                {'sc': 'UPDATE_BRANCH', 'ph': 'updateBranch'},

                {'sc': 'GET_LIST_BANK_RELATION', 'ph': 'getListBankRelation'},
                {'sc': 'ADD_BANK_RELATION', 'ph': 'addBankRelation'},
                {'sc': 'UPDATE_BANK_RELATION', 'ph': 'updateBankRelation'},
                {'sc': 'GET_LIST_BANK_RELATION_PAGING', 'ph': 'getListBankRelationPaging'},

                {'sc': 'GET_LIST_COLLATERAL_CHARACTERISTIC', 'ph': 'getListBankRelation'},
                {'sc': 'ADD_COLLATERAL_CHARACTERISTIC', 'ph': 'addBankRelation'},
                {'sc': 'UPDATE_COLLATERAL_CHARACTERISTIC', 'ph': 'updateBankRelation'},
                {'sc': 'GET_LIST_COLLATERAL_CHARACTERISTIC_PAGING', 'ph': 'getListBankRelationPaging'},

                {'sc': 'GET_LIST_COLLATERAL_ISSUER', 'ph': 'getListBankRelation'},
                {'sc': 'ADD_COLLATERAL_ISSUER', 'ph': 'addBankRelation'},
                {'sc': 'UPDATE_COLLATERAL_ISSUER', 'ph': 'updateBankRelation'},
                {'sc': 'GET_LIST_COLLATERAL_ISSUER_PAGING', 'ph': 'getListBankRelationPaging'},

                {'sc': 'GET_LIST_COLLATERAL_TYPE', 'ph': 'getListBankRelation'},
                {'sc': 'ADD_COLLATERAL_TYPE', 'ph': 'addBankRelation'},
                {'sc': 'UPDATE_COLLATERAL_TYPE', 'ph': 'updateBankRelation'},
                {'sc': 'GET_LIST_COLLATERAL_TYPE_PAGING', 'ph': 'getListBankRelationPaging'},

                {'sc': 'GET_LIST_CREDIT_CHARACTERISTIC', 'ph': 'getListCreditCharacteristic'},
                {'sc': 'ADD_CREDIT_CHARACTERISTIC', 'ph': 'addCreditCharateristic'},
                {'sc': 'UPDATE_CREDIT_CHARACTERISTIC', 'ph': 'updateCreditCharacteristic'},
                {'sc': 'GET_LIST_CREDIT_CHARACTERISTIC_PAGING', 'ph': 'getListCreditCharacteristicPaging'},

                {'sc': 'GET_LIST_CREDIT_RATING_AGENCY', 'ph': 'getListCreditRatingAgency'},
                {'sc': 'ADD_CREDIT_RATING_AGENCY', 'ph': 'addCreditRatingAgency'},
                {'sc': 'UPDATE_CREDIT_RATING_AGENCY', 'ph': 'updateCreditRatingAgency'},
                {'sc': 'GET_LIST_CREDIT_RATING_AGENCY_PAGING', 'ph': 'getListCreditRatingAgencyPaging'},

                {'sc': 'GET_LIST_CREDIT_TYPE', 'ph': 'getListCreditType'},
                {'sc': 'ADD_CREDIT_TYPE', 'ph': 'addCreditType'},
                {'sc': 'UPDATE_CREDIT_TYPE', 'ph': 'updateCreditType'},
                {'sc': 'GET_LIST_CREDIT_TYPE_PAGING', 'ph': 'getListCreditTypePaging'},

                {'sc': 'GET_LIST_DEBTOR_CATEGORY', 'ph': 'getListDebtorCategory'},
                {'sc': 'ADD_DEBTOR_CATEGORY', 'ph': 'addDebtorCategory'},
                {'sc': 'UPDATE_DEBTOR_CATEGORY', 'ph': 'updateDebtorCategory'},
                {'sc': 'GET_LIST_DEBTOR_CATEGORY_PAGING', 'ph': 'getListDebtorCategoryPaging'},

                {'sc': 'GET_LIST_DEBTOR_STATUS', 'ph': 'getListDebtorStatus'},
                {'sc': 'ADD_DEBTOR_STATUS', 'ph': 'addDebtorStatus'},
                {'sc': 'UPDATE_DEBTOR_STATUS', 'ph': 'updateDebtorStatus'},
                {'sc': 'GET_LIST_DEBTOR_STATUS_PAGING', 'ph': 'getListDebtorStatusPaging'},

                {'sc': 'GET_LIST_INTEREST_RATE_TYPE', 'ph': 'getListInterestRateType'},
                {'sc': 'ADD_INTEREST_TYPE', 'ph': 'addInterestRateType'},
                {'sc': 'UPDATE_INTEREST_RATE_TYPE', 'ph': 'updateInterestRateType'},
                {'sc': 'GET_LIST_INTEREST_RATE_TYPE_PAGING', 'ph': 'getListInterestRateTypePaging'},

                {'sc': 'GET_LIST_MEASUREMENT_CATEGORY', 'ph': 'getListMeasurementCategory'},
                {'sc': 'ADD_MEASUREMENT_CATEGORY', 'ph': 'addMeasurementCategory'},
                {'sc': 'UPDATE_MEASUREMENT_CATEGORY', 'ph': 'updateMeasurementCategory'},
                {'sc': 'GET_LIST_MEASUREMENT_CATEGORY_PAGING', 'ph': 'getListMeasurementCategoryPaging'},

                {'sc': 'GET_LIST_PORTFOLIO_CATEGORY', 'ph': 'getListPortfolioCategory'},
                {'sc': 'ADD_PORTFOLIO_CATEGORY', 'ph': 'addPortfolioCategory'},
                {'sc': 'UPDATE_PORTFOLIO_CATEGORY', 'ph': 'updatePortfolioCategory'},
                {'sc': 'GET_LIST_PORTFOLIO_CATEGORY_PAGING', 'ph': 'getListPortfolioCategoryPaging'},

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
    } else if (un === 'cbs03' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl': 'Library Officer',
            'bc': '0208',
            'ap': 'Collateral Bankwide System',
            'vr': '1.0.0',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M05', 'label': 'libraryTransaction', 'url': ''},
                {'menuCode': "M020", 'label': 'deposit', 'url': '/home/libraryDeposit', 'parent': 'M05'},
                {
                    'menuCode': "M021",
                    'label': 'depositMaintenance',
                    'url': '/home/libraryDepositMaintenance',
                    'parent': 'M05'
                }, {
                    'menuCode': "M029",
                    'label': 'documentBorrowedProcess',
                    'url': '/home/documentBorrow/process',
                    'parent': 'M05'
                },
                {
                    'menuCode': "M030",
                    'label': 'documentReturnedProcess',
                    'url': '/home/documentReturn/process',
                    'parent': 'M05'
                }, {
                    'menuCode': "M031",
                    'label': 'documentReleasedProcess',
                    'url': '/home/documentRelease/process',
                    'parent': 'M05'
                },
            ]
        };
    } else if (un === 'cbs04' && pw === 'P@ssw0rd') {
        payload = {
            'un': un,
            'rl': 'Library Supervisor',
            'bc': '0208',
            'ap': 'Collateral Bankwide System',
            'vr': '1.0.0',
            'mn': [
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M01', 'label': 'dashboard', 'url': ''},
                {'menuCode': 'M00', 'label': 'home', 'url': ''},
                {'menuCode': 'M05', 'label': 'libraryTransaction', 'url': ''},
                {
                    'menuCode': "A003",
                    'label': 'libraryDepositApproval',
                    'url': '/home/libraryDeposit/approval',
                    'parent': 'M05'
                },
                {
                    'menuCode': "A004",
                    'label': 'libraryDepositMaintenanceApproval',
                    'url': '/home/libraryDepositMaintenance/approval',
                    'parent': 'M05'
                },
                {
                    'menuCode': "A008",
                    'label': 'documentBorrowedProcessApproval',
                    'url': '/home/documentBorrow/process/approval',
                    'parent': 'M05'
                },
                {
                    'menuCode': "A009",
                    'label': 'documentReturnedProcessApproval',
                    'url': '/home/documentReturn/process/approval',
                    'parent': 'M05'
                }, {
                    'menuCode': "A010",
                    'label': 'documentReleasedProcessApproval',
                    'url': '/home/documentRelease/process/approval',
                    'parent': 'M05'
                },
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
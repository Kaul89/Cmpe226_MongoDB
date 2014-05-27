var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET CatalogList page. */
router.get('/CatalogList', function(req, res) {
    var db = req.db;
    var collection = db.get('Catalog');
    collection.find({},{},function(e,docs){
        res.render('CatalogList', {
            "CatalogList" : docs
        });
    });
});
/* GET Television page. */
router.get('/Television', function(req, res) {
    var db = req.db;
    var collection = db.get('Television');
    collection.find({},{},function(e,docs){
        res.render('Television', {
            "Television" : docs
        });
    });
});

/* GET NailPolish page. */
router.get('/NailPolish', function(req, res) {
    var db = req.db;
    var collection = db.get('NailPolish');
    collection.find({},{},function(e,docs){
        res.render('NailPolish', {
            "NailPolish" : docs
        });
    });
});

/* GET Refrigerator page. */
router.get('/Refrigerator', function(req, res) {
    var db = req.db;
    var collection = db.get('Refrigerator');
    collection.find({},{},function(e,docs){
        res.render('Refrigerator', {
            "Refrigerator" : docs
        });
    });
});

/* GET Books page. */
router.get('/Books', function(req, res) {
    var db = req.db;
    var collection = db.get('Books');
    collection.find({},{},function(e,docs){
        res.render('Books', {
            "Books" : docs
        });
    });
});

module.exports = router;

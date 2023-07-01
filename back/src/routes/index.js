<<<<<<< HEAD
const { Router } = require('express');

const { getCharById } = require('../controllers/getCharById.js');
const { getCharDetail } = require('../controllers/getCharDetail.js');
const {
  addFav,
  getFavs,
  deleteFav,
} = require('../controllers/favController.js');

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post('/fav', addFav);
router.get('/fav', getFavs);
router.delete('/fav/:id', deleteFav);

module.exports = router;
=======
const { Router } = require("express");

var { getCharById } = require("../controllers/getCharById.js");
var { getCharDetail } = require("../controllers/getCharDetail.js");
//var { addFav, getFavs, deleteFav } = require("../controllers/favController.js");
var { postUser } = require("../controllers/postUser.js");
var { getFavs } = require("../controllers/getFavs.js");
var { postFav } = require("../controllers/postFav.js");
var { deleteFav } = require("../controllers/deleteFav.js");
var { login } = require("../controllers/login.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

// router.post("/fav", addFav);
// router.get("/fav", getFavs);
// router.delete("/fav/:id", deleteFav);

router.get("/fav", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

router.get("/login", login);
router.post("/login", postUser);

module.exports = router;
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0

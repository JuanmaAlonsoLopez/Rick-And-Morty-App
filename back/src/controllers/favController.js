<<<<<<< HEAD
var favorites = require('../utils/favs.js');

const addFav = (req, res) => {
  let char = req.body;
  if (char && favorites.push(char)) res.status(200).json(char);
  else res.status(500).json({ error: 'Error Add Fav' });
};

const getFavs = (req, res) => {
  if (favorites) res.status(200).json(favorites);
  else res.status(500).json({ Error: 'Error Get Fav' });
=======
var favs = require("../utils/favs.js");

const addFav = (req, res) => {
  let char = req.body;
  if (char && favs.push(char)) res.status(200).json(char);
  else res.status(500).json({ error: "Error POST FAV" });
};

const getFavs = (req, res) => {
  if (favs) res.status(200).json(favs);
  else res.status(500).json({ error: "Error GET FAVS" });
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
};

const deleteFav = (req, res) => {
  let { id } = req.params;
<<<<<<< HEAD
  if (id > 0) {
    favorites = favorites.filter((e) => e.id !== Number(id));
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ error: 'Error Delete Fav' });
=======
  if (id >= 0) {
    favs = favs.filter((e) => e.id !== Number(id));
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ error: "Error DELETE FAV" });
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
  }
};

module.exports = { addFav, getFavs, deleteFav };

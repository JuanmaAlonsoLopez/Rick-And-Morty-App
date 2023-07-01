var favorites = require('../utils/favs.js');

const addFav = (req, res) => {
  let char = req.body;
  if (char && favorites.push(char)) res.status(200).json(char);
  else res.status(500).json({ error: 'Error Add Fav' });
};

const getFavs = (req, res) => {
  if (favorites) res.status(200).json(favorites);
  else res.status(500).json({ Error: 'Error Get Fav' });
};

const deleteFav = (req, res) => {
  let { id } = req.params;
  if (id > 0) {
    favorites = favorites.filter((e) => e.id !== Number(id));
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ error: 'Error Delete Fav' });
  }
};

module.exports = { addFav, getFavs, deleteFav };

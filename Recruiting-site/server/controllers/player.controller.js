const Player = require('../models/player.model');

module.exports = {
  getPlayers: (req, res) => {
    Player.find({})
      .then((players) => {
        res.json(players);
      })
      .catch((err) => {
        console.log('ERROR IN Get all', err);
        res.status(400).json({ message: 'something went wrong in find all players', error: err });
      });
  },
  getPlayerById: (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then((player) => {
        res.json(player);
      })
      .catch((err) => {
        console.log('ERROR IN Get Player', err);
        res.status(400).json({ message: 'something went wrong in find player', error: err });
      });
  },
  createPlayer: (req, res) => {
    Player.create(req.body)
      .then((newPlayer) => {
        res.status(201).json(newPlayer);
      })
      .catch((err) => {
        console.log('ERROR IN create Player', err);
        res
          .status(400)
          .json({ message: 'something went wrong in create player', errors: err.errors });
      });
  },
  updatePlayer: (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((player) => {
        res.json(player);
      })
      .catch((err) => {
        console.log('ERROR IN update Player', err);
        res.status(400).json({ message: 'something went wrong in update player', error: err });
      });
  },
  deletePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then((player) => {
        res.json(player);
      })
      .catch((err) => {
        console.log('ERROR IN delete Player', err);
        res.status(400).json({ message: 'something went wrong in delete player', error: err });
      });
  },
};
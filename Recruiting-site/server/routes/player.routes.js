const playerController = require('../controllers/player.controller');

module.exports = (app) => {
  app.get('/api/players', playerController.getPlayers);
  app.get('/api/players/:id', playerController.getPlayerById);
  app.post('/api/players', playerController.createPlayer);
  app.put('/api/players/:id', playerController.updatePlayer);
  app.delete('/api/players/:id', playerController.deletePlayer);
};


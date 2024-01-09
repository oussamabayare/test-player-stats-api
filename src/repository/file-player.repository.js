const fs = require('fs').promises;
const Player = require('../model/player.entity.js');

class FilePlayerRepository {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getAllPlayers() {
    const fileData = await fs.readFile(this.filePath, 'utf-8');
    const players = JSON.parse(fileData).players;
    return players.map((playerData) => new Player(playerData)) || [];
  }

  async getPlayerById(id) {
    const fileData = await fs.readFile(this.filePath, 'utf-8');
    const players = JSON.parse(fileData).players;
    const player = players.find((player) => player.id === id);
    if (!player) throw Error('Not found');
    return new Player(player);
  }
}

module.exports = FilePlayerRepository;

const fs = require('fs').promises;
const PlayerRepository = require('./player.repository.js');
const Player = require('../model/player.entity.js');

class FilePlayerRepository extends PlayerRepository {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  async getAllPlayers() {
    try {
      const fileData = await fs.readFile(this.filePath, 'utf-8');
      const players = JSON.parse(fileData).players;
      return players.map((playerData) => new Player(playerData));
    } catch (error) {
      console.error('Failed to read local file:', error);
      throw error;
    }
  }

  async getPlayerById(id) {
    try {
      const fileData = await fs.readFile(this.filePath, 'utf-8');
      const players = JSON.parse(fileData).players;
      const playerData = players.find((player) => player.id === id);

      if (!playerData) {
        throw new Error(`Player with ID ${id} not found in the local file`);
      }

      return new Player(playerData);
    } catch (error) {
      console.error(`Failed to fetch player with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = FilePlayerRepository;

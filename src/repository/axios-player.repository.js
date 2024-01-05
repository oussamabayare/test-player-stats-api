const axios = require('axios');
const PlayerRepository = require('./player.repository.js');
const Player = require('../model/player.entity.js');

class AxiosPlayerRepository extends PlayerRepository {
  constructor(endpoint) {
    super();
    this.playersEndpoint = endpoint;
  }

  async getAllPlayers() {
    try {
      const response = await axios.get(this.playersEndpoint);
      return response.data.players.map(
        (playerData) => new Player(playerData)
      );
    } catch (error) {
      console.error('Failed to fetch players:', error);
      throw error;
    }
  }

  async getPlayerById(id) {
    try {
      const response = await axios.get(this.playersEndpoint);
      const player = response.data.players.find((player) => player.id == Number(id));
      return new Player(player);
    } catch (error) {
      console.error(`Failed to fetch player with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = AxiosPlayerRepository;

const axios = require('axios');
const Player = require('../model/player.entity.js');

class AxiosPlayerRepository {
  constructor(endpoint) {
    this.playersEndpoint = endpoint;
  }

  async getAllPlayers() {
    const response = await axios.get(this.playersEndpoint);
    return response.data.players.map((playerData) => new Player(playerData)) || [];
  }

  async getPlayerById(id) {
    console.log(typeof id);
    const response = await axios.get(this.playersEndpoint);
    const player = response.data?.players?.find((player) => player.id === id);
    if (!player) throw Error('Not found');
    return new Player(player);
  }
}

module.exports = AxiosPlayerRepository;

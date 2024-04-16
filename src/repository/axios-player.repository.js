const axios = require('axios');
const Player = require('../model/player.entity.js');

class AxiosPlayerRepository {
  constructor(endpoint) {
    this.playersEndpoint = endpoint;
  }

  async getAllPlayers() {
    const response = await axios.get(this.playersEndpoint);
    return response?.data?.players.map((playerData) => new Player(playerData)) || [];
  }

  async getAllPlayersNames() {
    const response = await axios.get(this.playersEndpoint);
    return response?.data?.players
      .reduce((acc, currentPlayer) => {
        return (acc += `${currentPlayer.firstname} ${currentPlayer.lastname}, `);
      }, '')
      .slice(0, -2);
  }

  async getPlayerById(id) {
    const response = await axios.get(this.playersEndpoint);
    const player = response.data?.players?.find((player) => player.id === id);
    if (!player) throw Error('Not found');
    return new Player(player);
  }
}

module.exports = AxiosPlayerRepository;

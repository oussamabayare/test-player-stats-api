const fastify = require('fastify');
const { sortArrayByIntegerKey, isNumber } = require('../utils');

class PlayerAPI {
  constructor(playersRepository) {
    this.app = fastify();
    this.playersRepository = playersRepository;

    this.setupRoutes();
  }

  setupRoutes() {
    this.app.get('/players', async (request, reply) => {
      try {
        console.log(request.query.test);
        const sortKey = request.query?.sortBy || 'id';
        const players =
          sortArrayByIntegerKey(await this.playersRepository.getAllPlayers(), sortKey) || [];
        reply.header('Content-Type', 'application/json');
        reply.send(players);
      } catch (error) {
        console.error(`Failed to fetch players`, error.message);
        return [];
      }
    });

    this.app.get('/players-names', async (request, reply) => {
      try {
        const players = await this.playersRepository.getAllPlayersNames();
        //reply.header('Content-Type', 'application/json');
        reply.send(players);
      } catch (error) {
        console.error(`Failed to fetch players`, error.message);
        return [];
      }
    });

    this.app.get('/players/:id', async (request, reply) => {
      try {
        const playerId = Number(request.params.id);

        if (!isNumber(playerId)) throw Error(`Wrong ID Format`);

        const player = await this.playersRepository.getPlayerById(playerId);

        if (!player) {
          throw new Error(`Player not found`);
        }

        reply.header('Content-Type', 'application/json');
        reply.send(player);
      } catch (error) {
        console.error(`Failed to fetch player with ID ${request.params.id}:`, error.message);
        reply.status(404).send();
      }
    });
  }

  start() {
    this.app.listen({ address: '127.0.0.1', port: 3000 }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server is running on port ${3000}`);
    });
  }
}

module.exports = PlayerAPI;

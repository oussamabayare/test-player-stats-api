const axios = require('axios');
const AxiosPlayerRepository = require('./axios-player.repository');

jest.mock('axios');

const mockPlayers = [
  {
    id: 52,
    firstname: 'Novak',
    lastname: 'Djokovic',
    shortname: 'N.DJO',
    sex: 'M',
    country: {
      picture: 'https://i.eurosport.com/_iss_/geo/country/flag/medium/6944.png',
      code: 'SRB',
    },
    picture: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg',
    data: {
      rank: 2,
      points: 2542,
      weight: 80000,
      height: 188,
      age: 31,
      last: [1, 1, 1, 1, 1],
    },
  },
  {
    id: 95,
    firstname: 'Venus',
    lastname: 'Williams',
    shortname: 'V.WIL',
    sex: 'F',
    country: {
      picture: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/136449.jpg',
      code: 'USA',
    },
    picture: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/136450.jpg',
    data: {
      rank: 52,
      points: 1105,
      weight: 74000,
      height: 185,
      age: 38,
      last: [0, 1, 0, 0, 1],
    },
  },
];

describe('PlayerRepository', () => {
  const endpoint = 'https://fake-url.com/players';
  const playerRepository = new AxiosPlayerRepository(endpoint);

  axios.get.mockResolvedValue({ data: { players: mockPlayers } });

  it('should fetch all players successfully', async () => {
    const result = await playerRepository.getAllPlayers();
    expect(result).toEqual(mockPlayers);
    expect(axios.get).toHaveBeenCalledWith(endpoint);
  });

  it('should fetch a player by id successfully', async () => {
    const playerId = 52;
    const mockPlayer = mockPlayers.find((player) => player.id === playerId);

    const result = await playerRepository.getPlayerById(playerId);
    expect(result).toEqual(mockPlayer);
    expect(axios.get).toHaveBeenCalledWith(endpoint);
  });
});

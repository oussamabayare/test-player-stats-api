const AxiosPlayerRepository = require('./repository/axios-player.repository.js');
//const FilePlayerRepository = require('./repository/file-player.repository.js');
const PlayerAPI = require('./api/player.api.js');

const axiosPlayerRepository = new AxiosPlayerRepository(
  'https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json',
);
//const filePlayerRepository = new FilePlayerRepository('src/utils/data.json');

const playerAPI = new PlayerAPI(axiosPlayerRepository);

playerAPI.start();

const { Client } = require("@botbind/klasa");

Client.use(require("./your-awesome-addon"));
Client.use(require("./another-addon"));

const client = new Client({
  prefix: "?",
  createPiecesFolders: false
}).login("YOUR_AWESOME_BOT_TOKEN");

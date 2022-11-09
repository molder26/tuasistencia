const server = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
	console.log('Modelos Sincronizados');
    server.listen(PORT || 3001, () => {
        console.log(`%s listening at ${PORT || 3001}`); // eslint-disable-line no-console
    });
});

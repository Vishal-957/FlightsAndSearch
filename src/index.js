const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const setupAndStartServer = async() => {
    // create the express object
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();
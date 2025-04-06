const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require("dotenv").config();

const firebaseConfig = require("./fbrtdbconfigs.json");

const firebaseApp = initializeApp(firebaseConfig);
const database2 = getDatabase(firebaseApp);

module.exports = { database2 };

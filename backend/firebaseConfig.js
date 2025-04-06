const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
const admin = require('firebase-admin');
require("dotenv").config();

var serviceAccount = require("./fbfirestoreconfigs.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL
});

const database = admin.firestore();

module.exports = { database };

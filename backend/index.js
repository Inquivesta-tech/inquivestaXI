const express = require("express");
const https = require("https");
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const fs=require('fs')
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const dataRoute = require("./routes/eventdata");
const verifyRoute = require("./routes/verify");

const app = express();
// const allowedDomain = "https://inquivesta.in";
const allowedDomains = [
  "https://inquivesta.in", 
  "https://www.inquivesta.in", 
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedDomains.includes(origin)) {
      callback(null, true); // Allow requests from the allowed domain
    } else {
      callback(new Error("Not allowed by CORS")); // Block requests from other domains
    }
  },
}));

/*
app.use((req, res, next) => {
	if (req.protocol === 'https') {
		const httpUrl = `http://${req.headers.host}${req.url}`;
		return res.redirect(httpUrl);
	}
	next();
})
*/

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('App is running..');
});

app.use("/register", registerRoute);
app.use("/verify", verifyRoute);
app.use("/login", loginRoute);
app.use("/data", dataRoute);

const PORT = process.env.PORT || 3001;
/*
 app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
// Adding SSL-Certificates
const options = {
 	key:fs.readFileSync('./ssl-certs/privkey.pem'),
 cert:fs.readFileSync('./ssl-certs/fullchain.pem')
 }
 const sslServer=https.createServer(options,app);
 sslServer.listen(PORT,()=>{
 	console.log('Secure server is listening on port 1337')
 })

module.exports.handler = serverless(app);

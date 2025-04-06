const express = require("express");
const { onValue, ref, get, set, push } = require("firebase/database");
const { database } = require("../firebaseConfig");

const router = express.Router();

const nodemailer = require("nodemailer");
const qr = require("qrcode");
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

router.get("/", async (req, res) => {
	console.log(req.query);
    let img = await qr.toDataURL(req.query.qrcode ? req.query.qrcode : "https://www.youtube.com/watch?v=xvFZjo5PgG0");
	res.send(`<h1>Download this QR Code</h1> <br/> <img src='${img}'style='width: 500px; max-width: 80vw;'/>`);
});
router.post("/", async (req, res) => {
	try {
		const eventName = req.body["event"];
		delete req.body["event"];
		console.log(req.body);
		const now = new Date().getTime();
		const docRef = await database.collection(eventName).add({...req.body, ["timestamp"]: now});
		console.log(docRef.id);
		if (req.body.utr) {
			let img = await qr.toDataURL(req.body.utr);
			const info = await transporter.sendMail({
			    from: process.env.EMAIL, // sender address
			    to: req.body.email, // list of receivers
			    replyTo: process.env.EMAIL,
			    subject: "Event Ticket for "+eventName, // Subject line
			    attachDataUrls: true,
			    html: "Thanks a lot for registering for "+eventName+". Below is your Event Ticket. <br/> <img style='width: 200px; height: 200px;' src='"+img+"'/>"
			});
			res.status(201).json({message: "Registration Successful!! Check Your Email for the Event Ticket. Also, Download the QR Code just to be safe :)", utr: req.body.utr});
		} else {
			res.status(201).json({message: "Registration Successful!!"});
		}
        // console.log(img)

        // console.log("Message sent: %s", info.messageId);
	} catch (error) {
		res.status(500).json({error:error.message})
	}
});

module.exports = router;

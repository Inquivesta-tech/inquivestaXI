const express = require("express");
const router = express.Router();
const { database2 } = require("../firebaseConfig2");
const { onValue, ref, get, set, push, child } = require("firebase/database");
const crypto = require('crypto')
function sha256(content) {  
  return crypto.createHash('sha256').update(content).digest('hex');
}

router.get("/", async (req, res) => {
	// console.log(req);
	res.send("hulala");
});
router.post("/", async (req, res) => {
    // console.log(req.body);
    let login = false;
    let events = "";
    try {
        const dbRef = ref(database2, `/users/${req.body.username}`);
        const seshRef = ref(database2, `/users/${req.body.username}/sessions`);
        const now = new Date().getTime();
        if (req.body.sessionCookie) {
            // Cookie Login
            // console.log(req.body.sessionCookie);
            if (seshRef) {
                get(seshRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        const sessions = snapshot.val();
                        for(seshId in sessions) {
                            const session = sessions[seshId];
                            if (session.token === req.body.sessionCookie) {
                                // console.log(session);
                                // console.log(now);
                                    get(dbRef).then(async (snapshot2) => {
                                        if (snapshot2.exists()) {
                                            const permEvents = snapshot2.val().events;
                                            const resData = {message: "Valid Cookie!", status: true, events: permEvents};
                                            res.status(201).json(resData);
                                            return;
                                        }
                                        return;
                                    });
                                    return;
                            }
                        }
                    }
                });
                return;
            } else {
                res.status(500).json({message: "Incorrect Credentials!"});
                return;
            }

        } else {
            // Normal Login
            if (dbRef) {
                get(dbRef).then(async (snapshot) => {
                    if (snapshot.exists()) {
                        const value = snapshot.val();
                        // console.log(value);
                        if (value.password === sha256(req.body.password)) {
                            login = true;
                            events = value.events;
                            const buf = crypto.randomBytes(20).toString("hex");
                            await push(seshRef, {token: buf, timestamp: now, expiry: now + 864000});
                            res.status(201).json({message: "Successfully Logged In!!", status: true, userdata: {username: req.body.username, token: buf, events: events}});
                        } else {
                            res.status(500).json({message: "Incorrect Credentials!", status: false});
                            return;
                        }
                    }

                });
            } else {
                res.status(500).json({message: "Incorrect Credentials!", status: false});
                return;
            }
        }
    } catch (error) {
            // omygodo its error-san (T_T)
            // console.log(error.message)
            res.status(500).json({message: "An Error Occured (T_T)", status: false});
    }
});

module.exports = router;

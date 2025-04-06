const express = require("express");
const { ref, get } = require("firebase/database");
const { database } = require("../firebaseConfig");
const { database2 } = require("../firebaseConfig2");

const router = express.Router();
router.get("/", async (req, res) => {
	res.send("Huhuhuhuhhu");
});
router.post("/", async (req, res) => {
    // console.log(req.body);
	try {
        const dbRef = ref(database2, `/users/${req.body.username}`);
        const seshRef = ref(database2, `/users/${req.body.username}/sessions`);
        const now = new Date().getTime();
        var permEvents = '';
        if (req.body.sessionCookie) {
            // console.log(req.body.sessionCookie);
            if (seshRef) {
                get(seshRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        // console.log("here");
                        const sessions = snapshot.val();
                        for(seshId in sessions) {
                            const session = sessions[seshId];
                            if (session.token === req.body.sessionCookie) {
                                // console.log(session);
                                // console.log(now);
                                get(dbRef).then((snapshot2) => {
                                    if (snapshot2.exists()) {
                                        permEvents = snapshot2.val().events;
                                        // console.log(permEvents);
                                        const eventsArr = permEvents.split(",");
                                        const eventData = new Object();
                                        eventsArr.map(async (eventName, i) => {
                                            const eventsRef = database.collection(eventName);
                                            const eventSnapshot = await eventsRef.get();
                                            if (eventSnapshot.empty) {
                                                // console.log('No matching documents.');
                                                return;
                                            }
                                            eventData[eventName] = {};
                                            eventSnapshot.forEach((doc) => {
                                                // eventData[eventName][doc.id] = doc.data()
                                                if (doc.id == req.body.docID) {
                                                    var recordRef = eventsRef.doc(doc.id);
                                                    var setWithMerge = recordRef.set({
                                                        verified: true
                                                    }, { merge: true });
                                                res.status(201).json({message: "Set the verification flag"});
                                                }
                                                
                                            });
                                            // if (i == eventsArr.length - 1) {
                                            //     // console.log(eventData);
                                            //     res.status(201).json({message: "Fetched all data", events: permEvents, status: true, eventData: eventData});
                                            // }
                                        })
                                        return;
                                    }
                                    return;
                                });
                                return;
                            }
                        }
                    }
                });
            } else {
                res.status(500).json({message: "An Error Occurred! :("});
                return;
            }

        } else {
        }
	} catch (error) {
        // console.log(error.message);
		res.status(500).json({error:error.message})
	}
});

module.exports = router;

import admin from "firebase-admin"
import { initializeApp, getApps } from "firebase-admin/app"
import serviceKey from "../../config/serviceKey.json"


if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert(serviceKey),
        databaseURL: "https://dmit2008-assessment-2-website-default-rtdb.firebaseio.com/",
        // databaseAuthVariableOverride: {
        //     uid: "your service name"
        // }
    });
}

// app/api/test/route.js
const db = admin.database()

export { db }

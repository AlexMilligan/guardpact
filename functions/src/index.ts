import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as express from "express";
import * as cors from "cors";

initializeApp();

const app = express();
app.use(cors({ origin: true }));

// The rewrite in firebase.json directs requests for /api/pledge to this Cloud Function.
// We need to handle the full path here.
app.post("/api/pledge", async (req, res) => {
  const { firstName, lastName, email, state, zip } = req.body;

  if (!firstName || !lastName || !email || !state) {
    res.status(400).send({ success: false, message: "Missing required fields" });
    return;
  }

  try {
    const db = getFirestore();
    await db.collection("pledges").add({
      firstName,
      lastName,
      email,
      state,
      zip,
      timestamp: new Date(),
    });
    res.status(200).send({ success: true, message: "Pledge signed successfully!" });
  } catch (error) {
    console.error("Error saving pledge:", error);
    res.status(500).send({ success: false, message: "An error occurred while signing the pledge." });
  }
});

// All other routes will be rejected.
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Export the Express app as the HTTP function
export const pledge = onRequest(app);

import { https } from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();

export const pledge = https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { firstName, lastName, email, state, zip } = req.body;

  if (!firstName || !lastName || !email || !state) {
    res.status(400).send("Missing required fields");
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

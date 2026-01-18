const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to add a Bollywood Actor
async function addActor(actorObj) {
  try {
    const res = await db.collection('actors').add(actorObj);
    console.log('Added actor with ID: ', res.id);
  } catch (e) {
    console.error('Error adding actor: ', e)
  }
}

// Example usage
addActor({
  name: "Hrithik Roshan",
  height: "5'11\"",
  age: 50,
  dancing_skill: 10,
  vibe: "Action Hero"
});
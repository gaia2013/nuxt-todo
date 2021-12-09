import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

//  初期化
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

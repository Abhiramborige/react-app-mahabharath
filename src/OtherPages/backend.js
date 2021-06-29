import firebase from "firebase/app";
import "firebase/firestore";

// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const handleClick = (args) => {
  var page = document.querySelector(".contact-form");
  let data = db.collection("user_data");
  const { name, rating, message } = args;
  data.add({
    name: name,
    rating: rating,
    message: message,
  });
  page.innerHTML = `
  <h1>Submitted !</h1>
  <h2>Testimonials</h2>`;
  var review = document.createElement("p");
  function render(doc) {
    review.innerHTML +=
      doc.data().name +
      ": " +
      doc.data().message +
      " " +
      doc.data().rating +
      "/5<br>";
    page.appendChild(review);
  }

  db.collection("user_data")
    .orderBy("name")
    .onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          render(change.doc);
        }
      });
    });
};

export default handleClick;

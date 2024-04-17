
const wrapper=document.querySelector(".wrapper");
const loginlink=document.querySelector(".loginlink");
const registerlink=document.querySelector(".registerlink");
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});































/*
      
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";




const firebaseConfig = {

apiKey: "AIzaSyBCe69pxxRjaQtmqLuYgkKqdkTB4-S4Ei8",

authDomain: "webauth-75203.firebaseapp.com",

databaseURL: "https://webauth-75203-default-rtdb.firebaseio.com",

projectId: "webauth-75203",

storageBucket: "webauth-75203.appspot.com",

messagingSenderId: "1075319863945",

appId: "1:1075319863945:web:04159513c2e9d2bbe32458",

measurementId: "G-SF3TWZ4QV2"

};


// Initialize Firebase






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();
// Create new user account .....
signup.addEventListener("click",(e)=>{
  var email=document.getElementById("gmail").value;
  var password=document.getElementById("pass").value;
  var username=document.getElementById("username").value;
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    alert("created New user account successfully....");
    window.location.href="index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errorMessage");
  });
})
// Login to new usert account ... 
login.addEventListener("click",(e)=>{
  var email=document.getElementById("gmail").value;
  var password=document.getElementById("pass").value;
  var username=document.getElementById("username").value;
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    window.location.href="home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  
    if (errorMessage=="Firebase: Error (auth/invalid-email).") {
      document.getElementById("errortext").innerHTML = " Invalid-email !";       
    }
    alert(errorMessage);
   
  
    
  });

})




*/
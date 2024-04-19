

// Sign up
const signupButton = document.querySelector('.signup-button');
signupButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email1 = document.querySelector('#email1').value;
  const password1 = document.querySelector('#password1').value;
  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User account created successfully....");
      // Add user data to the database
      setDoc(doc(database, "users", user.uid), {
        email: user.email,
        createdAt: new Date()
      });
      window.location.href = "login1.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

// Login
const loginButton = document.querySelector('login');
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("successfully logined");
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});
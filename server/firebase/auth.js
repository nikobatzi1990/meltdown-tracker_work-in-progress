const { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } = require("firebase/auth");

module.exports = {
  // signup
  handleSignUp: async function (email, password) {
    try {
      let newUser = await createUserWithEmailAndPassword(auth, email, password);
      return newUser.user;
    } catch (error) {
      console.log("SIGNUP ERROR: ", err);
    }
  },

  // login
  handleLogin: async function (email, password) {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      console.log("LOGIN ERROR: ", err);
      return undefined;
    }
  },

  // signout
  handleLogout: async function () {
    try {
      await signOut(auth).then(() => {
        console.log("User is signed out");
      }) 
    } catch (error) {
        console.log("LOGOUT: ", error);
    }
  }
}
// const isEmailInUse = (email) => {
  //   const user = fetchSignInMethodsForEmail(auth, email);
  //   console.log(user);
  //   return user.length > 0;
  // }
  // const signUp = () => {
  //   createUserWithEmailAndPassword(auth,email, '1343429384893')
  //   .then((userCredential) => {
  //   const user = userCredential.user;
  //   navigation.navigate()
  //   })
  //   .catch((err) => {
  //     console.log(err.code);
  //     console.log(err.message);
  //   });
  // }
  // const navigateToVerification = () => {
  //   const usedEmail = isEmailInUse(email);
  //   if (usedEmail) {
  //     console.log('Email already in Use');
  //   }else{
  //     console.log('Email is available');
  //   }
  //   navigation.navigate('Enter Verification Code', {email: email})
  // }
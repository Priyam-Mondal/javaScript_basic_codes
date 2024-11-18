function validatePassword(password) {
    // Define the password validation criteria using regular expressions
    const minLength = 8;
    const maxLength = 12;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /[0-9]/;
    const specialCharPattern = /[@$#_]/;
  
    // Check password length
    if (password.length < minLength || password.length > maxLength) {
      return "Password must be between 8 and 12 characters.";
    }
  
    // Check for at least one uppercase letter
    if (!uppercasePattern.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
  
    // Check for at least one lowercase letter
    if (!lowercasePattern.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
  
    // Check for at least one digit
    if (!digitPattern.test(password)) {
      return "Password must include at least one digit.";
    }
  
    // Check for at least one special character (@, $, #, _)
    if (!specialCharPattern.test(password)) {
      return "Password must include at least one special character (@, $, #, _).";
    }
  
    // If all conditions are met
    return "Password is valid.";
  }
  
  const password1 = "Test@1234";
  const password2 = "Test1234";
  console.log(validatePassword(password1)); 
  console.log(validatePassword(password2)); 
  
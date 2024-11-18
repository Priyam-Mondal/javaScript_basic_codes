function validateRegistrationForm(firstName, lastName, password) {
    // Validate first name
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      return "First name cannot be empty and must contain only alphabets.";
    }
  
    // Validate last name (can be empty, but if present must contain only alphabets)
    if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
      return "Last name must contain only alphabets.";
    }
  
    // Validate password
    if (!validatePassword(password)) {
      return "Password must be at least 8 characters long and contain at least one letter and one digit.";
    }
  
    // If all validations pass
    return "Registration successful!";
}

function validatePassword(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    let hasLetter = false;
    let hasDigit = false;
  
    // Loop through each character in the password
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      // Check if the character is a letter
      if (/[a-zA-Z]/.test(char)) {
        hasLetter = true;
      }
  
      // Check if the character is a digit
      if (/\d/.test(char)) {
        hasDigit = true;
      }
  
      // If both conditions are met, break
      if (hasLetter && hasDigit) {
        return true;
      }
    }
  
    return false;
}
  

console.log(validateRegistrationForm("John", "Doe", "Password123"));  
console.log(validateRegistrationForm("John", "", "Password123"));    
console.log(validateRegistrationForm("", "Doe", "Password123"));    
console.log(validateRegistrationForm("John", "Doe", "short")); 

  
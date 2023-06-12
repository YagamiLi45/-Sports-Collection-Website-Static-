function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
 
    if (firstName == "" || lastName == "" || birthdate == "" || gender == "") {
      alert("Please fill in all required fields.");
      return false;
    }
 
    if (email == "") {
      alert("Please enter your email.");
      return false;
    } else {
      // Email validation using regular expression
      var regex = /\S+@\S+\.\S+/;
      if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }
 
    if (password == "") {
      alert("Please enter your password.");
      return false;
    } else if (password.length < 8) {
      alert("Your password must be at least 8 characters long.");
      return false;
    } else {
      // Password validation using regular expression
      var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
      if (!regex.test(password)) {
        alert("Your password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.");
        return false;
      }
    }
 
    if (confirmPassword == "") {
      alert("Please confirm your password.");
      return false;
    } else if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
 
    return true;
  }

  
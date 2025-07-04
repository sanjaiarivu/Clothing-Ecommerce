let form = document.getElementById("login-form");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");

let mailError = document.getElementById("mailError");
let passError = document.getElementById("passError");

form.addEventListener("submit", (e) => {
  mailError.textContent = "";
  passError.textContent = "";
  e.preventDefault();

  let valid = true;

  let mailvaue = mail.value.trim();
  if (!mailvaue) {
    mailError.textContent = "Email cannot be empty";
    valid = true;
  } else if (!/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(mailvaue)
  ) {
    mailError.textContent = "Invalid Email";
    valid = true;
  }
  let passwordvalue=pass.value.trim();
if (!passwordvalue) {
   passError.textContent="Password cannot be empty";
   valid = true; 
}
else if(!/^(?=.*[a-z])/.test(passwordvalue)){
    passError.textContent="Invalid Password"; 
    valid = true;
}
else if(!/^(?=.*[A-Z])/.test(passwordvalue)){
    passError.textContent="Invalid Password"; 
    valid = true;
}
else if(!/^(?=.*\d)/.test(passwordvalue)){
    passError.textContent="Invalid Password"; 
    valid = true;
}
else if(!/^(?=.[&#@])/.test(passwordvalue)){
    passError.textContent="Invalid Password"; 
    valid = true;
}

if (valid) {
    let user=JSON.parse(localStorage.getItem('signupData'))
    if (!user) {
        return alert('no user found,please signin')
    }
    if (mailvaue===user.mail && passwordvalue===user.password) {
        alert("login successfull")
        window.location.href="home.html";
    }
    else{
        alert("Invalid Cridential")
    }
}

});
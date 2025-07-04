let form=document.getElementById('Signup-form');
let un=document.getElementById('username');
let pass=document.getElementById('password');
let cpass=document.getElementById('Cpassword');
let num=document.getElementById('num')
let mail=document.getElementById('mail');
let genderRadio=document.getElementsByClassName('gender');
let dob=document.getElementById('date');


let unError=document.getElementById('unError');
let passError=document.getElementById('passwordError');
let cpassError=document.getElementById('CpasswordError');
let mailError=document.getElementById('mailError')
let NumError=document.getElementById('NumberError')
let genError=document.getElementById('genderError');
let dateError=document.getElementById('dateError')

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    unError.textContent="";
    passError.textContent="";
    cpassError.textContent="";
    mailError.textContent="";
    NumError.textContent="";
    genError.textContent="";


    let isvalid=true;

    let usernamevalue=un.value.trim();
    if(!usernamevalue){
        unError.textContent="Username can not be empty";
        isvalid=false;

        // alert("Username can not be empty");

    }
    else if(usernamevalue.length<3){
        unError.textContent="Username can not be less than 3 characters";
        isvalid=false;
        
    }
    else if(usernamevalue.length>15){
        unError.textContent="User can not be more than characters";
        isvalid=false;
    }
    else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(usernamevalue))
        {
          unError.textContent='Username must be an uppercase,lowercase and Numbers';
          isvalid=false;
        }


        let passwordvalue=pass.value.trim();
        if (!passwordvalue) {
           passError.textContent="Password cannot be empty";
           isvalid=false;
        //    alert("password cannot be emplty")

        }
        else if(!/(?=.*[a-z])/.test(passwordvalue)){
            passError.textContent="Password must uppercase and number"; 
            isvalid=false;
        }
        else if(!/(?=.*[A-Z])/.test(passwordvalue)){
            passError.textContent="Password must lowercase and number"; 
            isvalid=false;
        }
        else if(!/(?=.*\d)/.test(passwordvalue)){
            passError.textContent="Password must lowercase and number"; 
            isvalid=false;
        }
        else if(!/(?=.[&#@])/.test(passwordvalue)){
            passError.textContent="Password must lowercase and number"; 
            isvalid=false;
        }
        let confirmvalue=cpass.value.trim();
        if (!confirmvalue) {
            cpassError.textContent="Password cannot be empty";
            isvalid=false;
        }
        else if(passwordvalue!==confirmvalue){
            cpassError.textContent="password is not matching";
            isvalid=false;
        }

        let emailvalue=mail.value.trim();
        if(!emailvalue){
            mailError.textContent="Enter the Mail Id";
            isvalid=false;
        }
        else if(!/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(emailvalue)){
            mailError.textContent="Email is mandatory"
            isvalid=false;
        }

        if(!dob.value){
            dateError.textContent="Date is mandatory"
            isvalid=false;
        }

        let genderValue="";
        
        for(let radio of genderRadio){
            if(radio.checked){
                genderValue=radio.value;
                break;
            }
        }
        if(!genderValue){
            genError.textContent="Gender id mandatory"
            isvalid=false;
        }

        let numberValue=num.value.trim();
        if(!numberValue){
            NumError.textContent="Enter the number"
            isvalid=false;
        }
        else if(!/^\d{10}$/.test(numberValue))
        {
            NumError.textContent="Enter valid Number"
            isvalid=false;
        }


    if(isvalid){
let useData={
    username:usernamevalue,
    password:passwordvalue,
    mail:emailvalue,
    number:numberValue,
    dob:dob.value,
    gender:genderValue
}
localStorage.setItem('signupData',JSON.stringify(useData))
alert("signup succesfully")
form.reset();
window.location.href="login.html"

}

})






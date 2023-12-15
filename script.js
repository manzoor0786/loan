var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var emirateError=document.getElementById('eid-error')








function validateEid(){
    var emirate = document.getElementById('eid-num').value

    if(emirate.length == 0){
        emirateError.innerHTML='ID No is required';
        return false;
    }

    if(emirate.length !== 10){
        emirateError.innerHTML='ID No Should Be 10 Digits'
return false;
    }

    if(!emirate.match(/^[0-9]{10}$/)){
        emirateError.innerHTML='Only Digits'
return false;
    }
    emirateError.innerHTML='<i class="fa-solid fa-circle-check" ></i>'
    return true;
        
}









function validatePhone(){
    var phone = document.getElementById('contact-phone').value

    if(phone.length == 0){
        phoneError.innerHTML='Phone No is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML='Phone No Should Be 10 Digits'
return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only Digits'
return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check" ></i>'
    return true;
        
}

function validateEmail(){
    var email = document.getElementById('contact-email').value

    if(email.length == 0){
     emailError.innerHTML='Email is required';
        return false;
    }

if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    emailError.innerHTML='You have entered an invalid email address!"'
    
    return (false)
}

emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
return true;
}



function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}



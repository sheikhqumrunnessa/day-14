$('#checkbox').click(function () {
 if (this.checked){
     $('#password').attr('type','text');
 }   else {
     $('#password').attr('type','password');
 }
})


function checkFirstName() {
    var firstNameLength = $('#firstName').val().length;
    if (firstNameLength >=6 && firstNameLength <=15){
        $('#firstNameError').text('');
        return true;
    }else {
        $('#firstNameError').text('First name should be between 6 to 15 characters');
    return false;
    }
};

$('#firstName').click(function () {
    checkFirstName();
});

$('#firstName').blur(function () {
    checkFirstName();
});

$('#firstName').keyup(function () {
    checkFirstName();

});

//----------------------------------------------------------------------

function checkLastName() {
    var lastNameLength = $('#lastName').val().length;
    if (lastNameLength >=6 && lastNameLength <=15){
        $('#lastNameError').text('');
        return true;
    }else {
        $('#lastNameError').text('First name should be between 6 to 15 characters');
    return false;
    }
};

$('#lastName').click(function () {
    checkLastName();
});

$('#lastName').blur(function () {
    checkLastName();
});
$('#lastName').keyup(function () {
    checkLastName();
});
//----------------------------------------------------------------------
function checkGender() {
    var  genderValue = $('input[type="radio"]:checked').val();
    if (genderValue){
        $('#genderError').text(' ');
        return true;
    }else {
        $('#genderError').text('Please select a gender');
        return false;
    }
}
$('input[type="radio"]').blur(function () {
    checkGender();
});

//----------------------------------------------------------------------

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if (pattern.test($(emailAddress).val())) {
        $('#emailAddressError').text(' ');
        return true;
    }else {
        $('#emailAddressError').text('Email address is invalid');
    return false;
    }
}
// $('#emailAddress').click(function () {
//     checkEmailAddress();
// });

$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});
//---------------------------------------------------------------------------------
function checkPassword(){
   var passwordLength = $('#password').val().length;
    if (passwordLength >=6){
        $('#passwordError').text('');
    return true;
    }else {
        $('#passwordError').text('Password length at least 8 characters');
    return false;
    }

}
$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();

});
//-----------------------------------------------------------------------------
function checkConfirmPassword(){
    var passwordValue = $('#password').val();
    var passwordValue1 = $('#confirmPassword').val();
    if (passwordValue=passwordValue1){
        $('#passwordError').text('');
    return true;
    }else {
        $('#confirmPasswordError').text('Password not matched');
    return  false;
    }

}
$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();

});
//--------------------------------------------------------------------------------------------------
function checkDistrictName() {
    var districtName =$('#districtName').val();
    if(districtName == ' '){
        $('#districtNameError').text('please select a valid district name');
        return false;
    }else {
        $('#districtNameError').text(' ');
        return true;
    }
}
$('#districtName').change(function () {
    checkDistrictName();

});
//----------------------------------------------------------------------
$('#registrationForm').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkEmailAddress()== true && checkPassword()==true &&
    checkConfirmPassword()== true && checkDistrictName()== true && checkGender() == true){
        return true;
    }else {
        return false;
    }

});











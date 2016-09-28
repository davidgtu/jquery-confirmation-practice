//hints are shown when form is valid
//hide and show them at appropiate times


var $password = $("#password");
var $confirmPassword = $("#confirm_password");
// hide hints

$("form span").hide();

function isPasswordValid() {
  return $password.val() === $confirmPassword.val()
}

function passwordEvent() {
  if($password.val().length > 8) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

//if password is valid
  //hide hint
  //else show hint

function confirmPasswordEvt() {
  if(isPasswordValid){
    $confirmPassword.next().hide()
  } else {
    $confirmPassword.next().show();
  }
}

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvt).keyup(confirmPasswordEvt);

//when event happens on confirmation
  //find out if password === confirmation
    //hide hint if match
    //else show hint

$confirmPassword.focus(confirmPasswordEvt).keyup(confirmPasswordEvt);

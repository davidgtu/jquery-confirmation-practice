//hints are shown when form is valid
//hide and show them at appropiate times


var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");
// hide hints

$("form span").hide();

function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid() {
  return $password.val().length > 8
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val()
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
  if(isPasswordValid()) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

//if password is valid
  //hide hint
  //else show hint

function confirmPasswordEvt() {
  if(arePasswordsMatching()){
    $confirmPassword.next().hide()
  } else {
    $confirmPassword.next().show();
  }
}

function enableSubmitEvt(){
  $("#submit").prop("disabled", !canSubmit())
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvt).keyup(enableSubmitEvt());

//when event happens on confirmation
  //find out if password === confirmation
    //hide hint if match
    //else show hint

$confirmPassword.focus(confirmPasswordEvt).keyup(confirmPasswordEvt).keyup(enableSubmitEvt());

enableSubmitEvt();

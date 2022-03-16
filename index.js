const formSignup = document.querySelector(".form-signup");
const firstNameField = document.querySelector("#firstName");
const lastNameField = document.querySelector("#lastName");
const emailAddressField = document.querySelector("#emailAddress");
const passwordField = document.querySelector("#password");

// Validation text
const validationFirstName = document.querySelector(".validation-first-name");
const validationLastName = document.querySelector(".validation-last-name");
const validationEmail  = document.querySelector(".validation-email");
const validationPassword = document.querySelector(".validation-password");

/**TODO 
 * Override default for valid email check
 * Password length and strength check
 * 
*/
formSignup.addEventListener("submit", event => {
  event.preventDefault();
  
  let userData  = new FormData(event.target);
  let firstName = userData.get("firstName");
  let lastName  = userData.get("lastName");
  let email     = userData.get("emailAddress");
  let password  = userData.get("password");  

  emptyFieldValidation(firstName, firstNameField, validationFirstName);
  emptyFieldValidation(lastName, lastNameField, validationLastName);
  emptyFieldValidation(email, emailAddressField, validationEmail);
  emptyFieldValidation(password, passwordField, validationPassword);
});

function emptyFieldValidation(fieldValue, inputField, errorText) {
  if (fieldValue == "" || fieldValue == null) {
    inputField.style.border = "solid hsl(0, 100%, 74%) 2px";
    inputField.classList.add("icon-error");
    inputField.placeholder = "";
    errorText.style.display = "block"
  }
}

function validEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return mailFormat;
}
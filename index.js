let allFilled = true;

const main = document.querySelector(".main");

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

formSignup.addEventListener("submit", event => {
  event.preventDefault();
  
  let userData  = new FormData(event.target);
  let firstName = userData.get("firstName");
  let lastName  = userData.get("lastName");
  let email     = userData.get("emailAddress");
  let password  = userData.get("password");  

  if (firstName === "") {
    allFilled = false;
    fieldValidationStyling(firstNameField, validationFirstName);
  }  

  if (lastName === "") {
    allFilled = false;
    fieldValidationStyling(lastNameField, validationLastName);
  }

  if (email === "") {
    allFilled = false;
    fieldValidationStyling(emailAddressField, validationEmail);
  } else if (!validEmail(email)) {
    allFilled = false;
    validationEmail.textContent = "Looks like this is not an email"
    fieldValidationStyling(emailAddressField, validationEmail);
  }

  if (password === "") {
    allFilled = false;
    fieldValidationStyling(passwordField, validationPassword);
  }

  // Update page if all fields are valid and filled
  if (allFilled) {
    let updatedPage = `
      <div class="subscription">
        <h2 class="subscrition-title"> Thank you ${firstName}!</h2>
        <p class="subscription-text">An Invitation Link is on it's way</p>
        <p class="subscription-policy">For security reasons, we've sent you an email that contains the sign up details</p>
      </div>
    `
    main.innerHTML = updatedPage;

  }

});

function fieldValidationStyling(inputField, errorText) {
    inputField.style.border = "solid hsl(0, 100%, 74%) 2px";
    inputField.classList.add("icon-error");
    inputField.placeholder = "";
    errorText.style.display = "block"
}

function validEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return mailFormat;
}
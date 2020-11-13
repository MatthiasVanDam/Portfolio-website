const form = document.getElementById("myForm");
const fullName = document.getElementById("fullName");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  //input values
  const fullNameValue = fullName.value.trim();
  const mailValue = mail.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  //fullName
  if (fullNameValue === "" || fullNameValue == null) {
    //show error
    //add error class
    setErrorFor(fullName, "Volledige naam invullen");
    e.preventDefault();
  } else {
    //add success class
    setSuccessFor(fullName, "success");
  }

  //MAIL
  if (mailValue === "" || mailValue == null) {
    setErrorFor(mail, "Email invullen");
    e.preventDefault();
  } else if (!mailVal(mailValue)) {
    setErrorFor(mail, "Ongeldige email!");
    e.preventDefault();
  } else {
    setSuccessFor(mail, "success");
  }

  //SUBJECT
  if (subjectValue === "" || subjectValue == null) {
    setErrorFor(subject, "Onderwerp invullen");
    e.preventDefault();
  } else {
    setSuccessFor(subject, "success");
  }

  //MESSAGE
  if (messageValue === "" || messageValue == null) {
    setErrorFor(message, "Vraag invullen");
    e.preventDefault();
  } else {
    setSuccessFor(message, "success");
  }
});

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;

  formGroup.className = "form-group error";
}

function setSuccessFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;

  formGroup.className = "form-group success";
}

function mailVal(mail) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    mail
  );
}

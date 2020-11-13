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
    setErrorFor(fullName, "Full name required");
    e.preventDefault();
  } else {
    //add success class
    setSuccessFor(fullName);
  }

  //MAIL
  if (mailValue === "" || mailValue == null) {
    setErrorFor(mail, "Email required");
    e.preventDefault();
  } else if (!mailVal(mailValue)) {
    setErrorFor(mail, "invalid e-mail!");
    e.preventDefault();
  } else {
    setSuccessFor(mail);
  }

  //SUBJECT
  if (subjectValue === "" || subjectValue == null) {
    setErrorFor(subject, "Subject required");
    e.preventDefault();
  } else {
    setSuccessFor(subject);
  }

  //MESSAGE
  if (messageValue === "" || messageValue == null) {
    setErrorFor(message, "Message required");
    e.preventDefault();
  } else {
    setSuccessFor(message);
  }
});

function setErrorFor(input, message) {
  input.value = "";
  input.placeholder = message;

  input.className = "error";
}

function setSuccessFor(input) {
  input.className = "success";
}

function mailVal(mail) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    mail
  );
}

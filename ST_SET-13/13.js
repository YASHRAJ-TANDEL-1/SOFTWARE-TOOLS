// const formEl = document.getElementById("form");

// formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { name, password, phone, email, birthday, pin } = event.target;

  console.log(event);

  // Name check
  if (!/^[a-zA-Z]+$/.test(name.value)) {
    alert("Name must contain on letters");
  }

  // Password check
  if (
    password.value.length < 8 ||
    password.value.length > 12 ||
    password.value[0] !== password.value[0].toUpperCase()
  ) {
    alert(
      "Password must be 8 to 12 characters long with first letter being capital"
    );
  }

  // Phone check
  if (phone.value.length !== 10 || !/^\d+$/.test(phone.value)) {
    alert("Phone number must be 10 digits only");
  }

  // Email check
  if (!/^[a-z]@[a-z].[a-z]$/.test(email.value)) {
    alert(
      "Email address must be a valid email address with format xyz@abc.com"
    );
  }

  // Birthday check
  if (!/^\d\/\d\/\d$/.test(birthday.value)) {
    alert("Birthday must be in the format DD/MM/YYYY");
  }

  // Pin code check
  if (pin.value.length !== 6 || !/^\d+$/.test(pin.value)) {
    alert("Pin code must be 6 digits only");
  }
}

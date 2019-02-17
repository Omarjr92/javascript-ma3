function validation() {
  var Name = document.getElementById('Name');
  var Lastname = document.getElementById('Lastname');

  if (Name.value === "" || LastName.value == "") {
    alert("no blank values allowed");
    return false;
  }
  else {
    true;
  }
}
function validation(Telephone) {
  var Telephone = document.getElementById('Telephone');
  var re = "/\d{9,12}/";
  return re.test(Telephone);
}

if (validation(Telephone)) {
  alert("Valid :");

}
else {
  false;
}
}

function validation(Email) {
  var Email = document.getElementById('Email');
  var re = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  return re.test(Email);
}

if (validation(Email)) {
  alert("Valid :");

}
else {
  false;
}
}

// In the event of button click
function formRefresh() {
  document.getElementById("midd").reset();
}

function akanNames() {
  var dateOfBirth = document.getElementById("dob").value;
  var actualDateEntered = dateOfBirth.split("-");
  var day = parseInt(actualDateEntered[2]);
  var month = parseInt(actualDateEntered[1]);
  var year = parseInt(actualDateEntered[0]);

  // Calculating the Century
  var century = (year-1)/100+1;
  var dayOfTheWeek = (century/4-2 * century-1 +5 * year/4 + 26 * (month + 1)/10 +day) %7;

  //Naming and Day Display
  document.getElementById("display").innerHTML = Math.round(dayOfTheWeek);
  var masculineNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var feminineNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  var gender = document.getElementById("gender").value;
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayOfWeek = Math.round(dayOfTheWeek);

  // Validating the form and its output
  if (!isNaN(dayOfWeek)) {
    if (gender === "Male") {
      document.getElementById("display").innerHTML =
        "Your Akan Name is " +
        masculineNames[Math.round(dayOfTheWeek)] +
        " and you were born on " +
        daysOfTheWeek[dayOfWeek];
    } else if (gender === "Female") {
      document.getElementById("display").innerHTML =
        "Your Akan Name is " +
        feminineNames[Math.round(dayOfTheWeek)] +
        " and you were born on " +
        daysOfTheWeek[dayOfWeek];
    }
    else {
        alert("Enter valid dates and choose your gender!");
        document.getElementById("display").innerHTML = "Thank You";
    }
  }
  else {
    alert("Enter valid birthday date and choose your gender!");
    document.getElementById("display").innerHTML = "Thank You!";
  }
  //Refreshing the function
  formRefresh();
}

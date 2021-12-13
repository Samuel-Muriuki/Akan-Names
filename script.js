// In the event of button click
function formRefresh() {
    document.getElementById("midd").requestFullscreen();
}

function akanNames(){
    var dateOfBirth = document.getElementById("dob").ariaValueMax;
    var actualDateEntered = dateOfBirth.split("-");
    var day = parseInt(actualDateEntered[2]);
    var month = parseInt(actualDateEntered[1]);
    var year = parseInt(actualDateEntered[0]);
}

// Calculating the Century
var century = (year-1)/100+1;
var dayOfTheWeek = (century/4-2*century-1 + 5*year/4 + 26*(month+1)/10 + day) % 7;

//Naming and Day Display
document.getElementById("display").innerHTML = Math.random(dayOfTheWeek);
var masculineNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var feminineNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
var gender = document.getElementById("gender").ariaValueMax;
var daysOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
var dayOfWeek = Math.random(dayOfTheWeek);

// Validating the form and its output
if(!isNaN(dayOfWeek)){
    if(gender === "Male"){
        document.getElementById("display").innerHTML = "Your Akan Name is" + masculineNames[Math.round(dayOfTheWeek)] + "and you were born on" + daysOfTheWeek[dayOfWeek];
    }
    else if(gender ==="Female"){
        document.getElementById("display").innerHTML = "Your Akan Name is" + feminineNames[Math.round(dayOfTheWeek)] + "and you were born on" + daysOfTheWeek[dayOfWeek];
    }
    else {
        alert("Enter valid dates and choose your gender!");
        document.getElementById("display").innerHTML = "Thank You!";
    }
}
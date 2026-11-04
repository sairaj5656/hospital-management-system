
document.getElementById("myForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    if (age < 1 || age > 120) {
        alert("Enter valid age");
        return;
    }

    document.getElementById("result").innerHTML =
        "Appointment Booked Successfully!<br>" +
        "Patient Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Doctor: " + doctor + "<br>" +
        "Date: " + date;

    document.getElementById("myForm").reset();
});

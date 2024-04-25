const emailPopup = document.querySelector("#email-popup");
const phonePopup = document.querySelector("#phone-popup");
const mailPopup = document.querySelector("#mail-popup");
const faxPopup = document.querySelector("#fax-popup");

emailPopup.addEventListener('click', emailAlert);
phonePopup.addEventListener('click', phoneAlert);
mailPopup.addEventListener('click', mailAlert);
faxPopup.addEventListener('click', faxAlert);

function validateContactForm() {
    event.preventDefault();

    let finalAlert = "Error: ";
    let fname = document.forms["contact-form"]["fname"].value;
    let regex = /^[0-9]{1,50}$/;
    if (fname === "" || regex.test(fname)) {
        finalAlert += "Enter your valid first name.\n";
    }

    let lname = document.forms["contact-form"]["lname"].value;
    if (lname === "" || regex.test(lname)) {
        finalAlert += "Enter your valid last name.\n";
    }

    if (finalAlert === "Error: ") {
        window.location.assign("thankyou.html");
    } else {
        alert(finalAlert);
    }
}

function emailAlert() {
    event.preventDefault();

    alert("Email: bridgetohome@gmail.com");
}
function phoneAlert() {
    event.preventDefault();

    alert("Phone: (704) 971-2300");
}
function mailAlert() {
    event.preventDefault();

    alert("Mailing address: 1101 Red Ventures Dr, Fort Mill, SC 29707");
}
function faxAlert() {
    event.preventDefault();

    alert("fax: +1-704-987-6543");
}
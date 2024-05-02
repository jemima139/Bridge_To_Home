//Get 10, 100, and 1000 donate button elements.
const donateThousand = document.querySelector("#thousand");
const donateHundred = document.querySelector("#hundred");
const donateTen = document.querySelector("#ten");

//get footer contact info elements
const emailPopup = document.querySelector("#email-popup");
const phonePopup = document.querySelector("#phone-popup");
const mailPopup = document.querySelector("#mail-popup");
const faxPopup = document.querySelector("#fax-popup");

//listens for a click on the 10, 100, 1000 donate buttons
donateThousand.addEventListener('click', () => donateAmount(1000));
donateHundred.addEventListener('click', () => donateAmount(100));
donateTen.addEventListener('click', () => donateAmount(10));

//Listens for a click on the footer contact info elements
emailPopup.addEventListener('click', emailAlert);
phonePopup.addEventListener('click', phoneAlert);
mailPopup.addEventListener('click', mailAlert);
faxPopup.addEventListener('click', faxAlert);

//Get element for custom input box
const inputBox = document.querySelector(".input-amount");

//function to edit input box when the 10, 100, or 1000 button element is clicked
function donateAmount(amount) {
    inputBox.value = amount;
    console.log("CLICKED");
}

//Data validation
function validateDonateForm() {
    //Prevents default form submision behavior
    event.preventDefault();

    //String to store errors
    let finalAlert = "Error: ";
    //Runs validation and stores any retrieved error strings
    firstAlert = validateDonation();
    secondAlert = validateFirstName();
    thirdAlert = validateLastName();
    fourthAlert = validateCountry();
    //Combines all errors to a final string
    finalAlert += firstAlert + secondAlert + thirdAlert + fourthAlert;

    //If no errors were added to original variable, then there are no errors so thankyou.html is loaded
    if (finalAlert === "Error: ") {
        window.location.assign("thankyou.html");
    } else {
    //Else display the erros
        alert(finalAlert);
    }
}

//Validate 
function validateDonation() {
    //Grabs donate amount value from donate form 
    //donate-form correlates to name="" inside <form> and donate-amount correlates to name="" inside <input>
    let amount = document.forms["donate-form"]["donate-amount"].value;
    
    //Checks if donate amount is more than $1
    if (amount <= 1) {
        return "Donation must be more than $1.\n";
    }
    //Returns empty string for finalAlert if validation is passed
    return "";
}

function validateFirstName() {

    //donate-form correlates to name="" inside <form> and fname correlates to name="" inside <input>
    let name = document.forms["donate-form"]["fname"].value;
    //sets regular expression
    // /^ indicates the start of a match, [0-9] searches for any number, {1,50} searches for upto 50 characters, $/ indicates the end of a match
    let regex = /^[0-9]{1,50}$/;
    if (name === "" || regex.test(name)) {
        return "Enter your valid first name.\n";
    }
    //Returns empty string for finalAlert if validation is passed
    return "";
}

function validateLastName() {
    //donate-form correlates to name="" inside <form> and lname correlates to name="" inside <input>
    let name = document.forms["donate-form"]["lname"].value;
    // /^ indicates the start of a match, [0-9] searches for any number, {1,50} searches for upto 50 characters, $/ indicates the end of a match
    let regex = /^[0-9]{1,50}$/;
    if (name === "" || regex.test(name)) {
        return "Enter your valid last name.\n";
    }
    //Returns empty string for finalAlert if validation is passed
    return "";
}

function validateZipCode() {
    //donate-form correlates to name="" inside <form> and zipcode correlates to name="" inside <input>
    let zipCode = document.forms["donate-form"]["zipcode"].value
    // /^ indicates the start of a match, [0-9] searches for any number, {5} searches for exactly 5 characters, $/ indicates the end of a match
    let regex = /^[0-9]{5}$/;

    if (!regex.test(zipCode)) {
        return "Enter valid zipcode.\n";
    }
    //Returns empty string for finalAlert if validation is passed'
    return "";
}

function validateCCN() {
    //donate-form correlates to name="" inside <form> and ccn correlates to name="" inside <input>
    let ccn = document.forms["donate-form"]["ccn"].value
    // /^ indicates the start of a match, [0-9] searches for any number, {4} searches for exactly 4 characters, \s indicates a space, $/ indicates the end of a match
    let regex = /^[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/;

    if (!regex.test(ccn)) {
        return "Enter valid credit card number.\n";
    }
    //Returns empty string for finalAlert if validation is passed
    return "";
}

function validateCountry() {
    //Grabs the country name input from the form
    //donate-form correlates to name="" inside <form> and country correlates to name="" inside <input>
    let country = document.forms["donate-form"]["country"].value;
    // initalize an array of all country names
    const countries = ['united states', 'united states of america', 'afghanistan', 'aland islands', 'albania', 'algeria', 'american samoa', 'andorra', 'angola', 'anguilla', 'antigua and barbuda', 'argentina', 'armenia', 'aruba', 'australia', 'austria', 'azerbaijan', 'bangladesh', 'barbados', 'bahamas', 'bahrain', 'belarus', 'belgium', 'belize', 'benin', 'bermuda', 'bhutan', 'bolivia', 'bosnia and herzegovina', 'botswana', 'brazil', 'british indian ocean territory', 'british virgin islands', 'brunei darussalam', 'bulgaria', 'burkina faso', 'burma', 'burundi', 'cambodia', 'cameroon', 'canada', 'cape verde', 'cayman islands', 'central african republic', 'chad', 'chile', 'china', 'christmas island', 'cocos (keeling) islands', 'colombia', 'comoros', 'congo-brazzaville', 'congo-kinshasa', 'cook islands', 'costa rica', 'croatia', 'curacao', 'cyprus', 'czech republic', 'denmark', 'djibouti', 'dominica', 'dominican republic', 'east timor', 'ecuador', 'el salvador', 'egypt', 'equatorial guinea', 'eritrea', 'estonia', 'ethiopia', 'falkland islands', 'faroe islands', 'federated states of micronesia', 'fiji', 'finland', 'france', 'french guiana', 'french polynesia', 'french southern lands', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'greenland', 'grenada', 'guadeloupe', 'guam', 'guatemala', 'guernsey', 'guinea', 'guinea-bissau', 'guyana', 'haiti', 'heard and mcdonald islands', 'honduras', 'hong kong', 'hungary', 'iceland', 'india', 'indonesia', 'iraq', 'ireland', 'isle of man', 'israel', 'italy', 'jamaica', 'japan', 'jersey', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein',
        'lithuania', 'luxembourg', 'macau', 'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands', 'martinique', 'mauritania', 'mauritius', 'mayotte', 'mexico', 'moldova', 'monaco', 'mongolia', 'montenegro', 'montserrat', 'morocco', 'mozambique', 'namibia', 'nauru', 'nepal', 'netherlands', 'new caledonia', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'niue', 'norfolk island', 'northern mariana islands', 'norway', 'oman', 'pakistan', 'palau', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'pitcairn islands', 'poland', 'portugal', 'puerto rico', 'qatar', 'réunion', 'romania', 'russia', 'rwanda', 'saint barthelemy', 'saint helena', 'saint kitts and nevis', 'saint lucia', 'saint martin', 'saint pierre and miquelon', 'saint vincent', 'samoa', 'san marino', 'são tomé and príncipe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'sint maarten', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'south africa', 'south georgia', 'south korea', 'spain', 'sri lanka', 'sudan', 'suriname', 'svalbard and jan mayen', 'sweden', 'swaziland', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'togo', 'tokelau', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'turks and caicos islands', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'vietnam', 'venezuela', 'wallis and futuna', 'western sahara', 'yemen', 'zambia', 'zimbabwe'];
    //Checks if country input is found inside list of valid countries 
    if (!countries.includes(country.toLowerCase())) {
        return "Invalid Country Name.\n";
    }
    //Returns empty string for finalAlert if validation is passed
    return "";
}

function emailAlert() {
    //Prevents default form submision behavior
    event.preventDefault();

    alert("Email: bridgetohome@gmail.com");
}
function phoneAlert() {
    //Prevents default form submision behavior
    event.preventDefault();

    alert("Phone: (704) 971-2300");
}
function mailAlert() {
    //Prevents default form submision behavior
    event.preventDefault();

    alert("Mailing address: 1101 Red Ventures Dr, Fort Mill, SC 29707");
}
function faxAlert() {
    //Prevents default form submision behavior
    event.preventDefault();

    alert("fax: +1-704-987-6543");
}
const donateThousand = document.querySelector("#thousand");
const donateHundred = document.querySelector("#hundred");
const donateTen = document.querySelector("#ten");

const emailPopup = document.querySelector("#email-popup");
const phonePopup = document.querySelector("#phone-popup");
const mailPopup = document.querySelector("#mail-popup");
const faxPopup = document.querySelector("#fax-popup");

donateThousand.addEventListener('click', () => donateAmount(1000));
donateHundred.addEventListener('click', () => donateAmount(100));
donateTen.addEventListener('click', () => donateAmount(10));

emailPopup.addEventListener('click', emailAlert);
phonePopup.addEventListener('click', phoneAlert);
mailPopup.addEventListener('click', mailAlert);
faxPopup.addEventListener('click', faxAlert);

const inputBox = document.querySelector(".input-amount");


function donateAmount(amount) {
    inputBox.value = amount;
    console.log("CLICKED");
}

function validateDonateForm() {
    event.preventDefault();

    let finalAlert = "Error: ";
    firstAlert = validateDonation();
    secondAlert = validateFirstName();
    thirdAlert = validateLastName();
    fourthAlert = validateCountry();
    finalAlert += firstAlert + secondAlert + thirdAlert + fourthAlert;

    if (finalAlert === "Error: ") {
        window.location.assign("thankyou.html");
    } else {
        alert(finalAlert);
    }
}

function validateDonation() {
    let amount = document.forms["donate-form"]["donate-amount"].value;
    if (amount <= 1) {
        return "Donation must be more than $1.\n";
    }
    return "";
}

function validateFirstName() {
    let name = document.forms["donate-form"]["fname"].value;
    let regex = /^[0-9]{1,50}$/;
    if (name === "" || regex.test(name)) {
        return "Enter your valid first name.\n";
    }
    return "";
}

function validateLastName() {
    let name = document.forms["donate-form"]["lname"].value;
    let regex = /^[0-9]{1,50}$/;
    if (name === "" || regex.test(name)) {
        return "Enter your valid last name.\n";
    }
    return "";
}

function validateZipCode() {
    let zipCode = document.forms["donate-form"]["zipcode"].value
    let regex = /^[0-9]{5}$/;

    if (!regex.test(zipCode)) {
        return "Enter valid zipcode.\n";
    }
    return "";
}

function validateCCN() {
    let ccn = document.forms["donate-form"]["ccn"].value
    let regex = /^[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/;

    if (!regex.test(ccn)) {
        return "Enter valid credit card number.\n";
    }
    return "";
}

function validateCountry() {
    let country = document.forms["donate-form"]["country"].value;
    const countries = ['united states', 'united states of america', 'afghanistan', 'aland islands', 'albania', 'algeria', 'american samoa', 'andorra', 'angola', 'anguilla', 'antigua and barbuda', 'argentina', 'armenia', 'aruba', 'australia', 'austria', 'azerbaijan', 'bangladesh', 'barbados', 'bahamas', 'bahrain', 'belarus', 'belgium', 'belize', 'benin', 'bermuda', 'bhutan', 'bolivia', 'bosnia and herzegovina', 'botswana', 'brazil', 'british indian ocean territory', 'british virgin islands', 'brunei darussalam', 'bulgaria', 'burkina faso', 'burma', 'burundi', 'cambodia', 'cameroon', 'canada', 'cape verde', 'cayman islands', 'central african republic', 'chad', 'chile', 'china', 'christmas island', 'cocos (keeling) islands', 'colombia', 'comoros', 'congo-brazzaville', 'congo-kinshasa', 'cook islands', 'costa rica', 'croatia', 'curacao', 'cyprus', 'czech republic', 'denmark', 'djibouti', 'dominica', 'dominican republic', 'east timor', 'ecuador', 'el salvador', 'egypt', 'equatorial guinea', 'eritrea', 'estonia', 'ethiopia', 'falkland islands', 'faroe islands', 'federated states of micronesia', 'fiji', 'finland', 'france', 'french guiana', 'french polynesia', 'french southern lands', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'greenland', 'grenada', 'guadeloupe', 'guam', 'guatemala', 'guernsey', 'guinea', 'guinea-bissau', 'guyana', 'haiti', 'heard and mcdonald islands', 'honduras', 'hong kong', 'hungary', 'iceland', 'india', 'indonesia', 'iraq', 'ireland', 'isle of man', 'israel', 'italy', 'jamaica', 'japan', 'jersey', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein',
        'lithuania', 'luxembourg', 'macau', 'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands', 'martinique', 'mauritania', 'mauritius', 'mayotte', 'mexico', 'moldova', 'monaco', 'mongolia', 'montenegro', 'montserrat', 'morocco', 'mozambique', 'namibia', 'nauru', 'nepal', 'netherlands', 'new caledonia', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'niue', 'norfolk island', 'northern mariana islands', 'norway', 'oman', 'pakistan', 'palau', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'pitcairn islands', 'poland', 'portugal', 'puerto rico', 'qatar', 'réunion', 'romania', 'russia', 'rwanda', 'saint barthelemy', 'saint helena', 'saint kitts and nevis', 'saint lucia', 'saint martin', 'saint pierre and miquelon', 'saint vincent', 'samoa', 'san marino', 'são tomé and príncipe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'sint maarten', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'south africa', 'south georgia', 'south korea', 'spain', 'sri lanka', 'sudan', 'suriname', 'svalbard and jan mayen', 'sweden', 'swaziland', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'togo', 'tokelau', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'turks and caicos islands', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'vietnam', 'venezuela', 'wallis and futuna', 'western sahara', 'yemen', 'zambia', 'zimbabwe'];

    if (!countries.includes(country.toLowerCase())) {
        return "Invalid Country Name.\n";
    }
    return "";
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
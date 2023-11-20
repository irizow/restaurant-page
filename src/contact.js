function createContact() {
    const contactBox = document.createElement("div");
    contactBox.classList.add("contactbox");
    const title = document.createElement("h3");
    title.textContent = "Contact Us";
    const email = document.createElement("h4");
    email.textContent = "Email";
    const emailP = document.createElement("p");
    emailP.textContent = "vegangrill@gmail.com";
    const phone = document.createElement("h4");
    phone.textContent = "Phone number";
    const phoneP = document.createElement("p");
    phoneP.textContent = "+34-656-656-567";
    const information = document.createElement("h4");
    information.textContent = "INFORMATION";
    const informationP = document.createElement("p");
    informationP.textContent = "We are located in Squirrel street, number 66. We are open from Mondays to Sundays from 11pm to 7am. If you want to make a reservation send us an email or call us at the number provided. We can't wait to see you!"
 
    contactBox.appendChild(title);
    contactBox.appendChild(email);
    contactBox.appendChild(emailP);
    contactBox.appendChild(phone);
    contactBox.appendChild(phoneP);
    contactBox.appendChild(information);
    contactBox.appendChild(informationP);
    content.appendChild(contactBox);

    return contactBox

}

function loadContact() {
    const content = document.getElementById("content");
    content.appendChild(createContact())
}

export default loadContact;


function createMenu() {
    const content = document.getElementById("content")
    const menu = document.createElement("div");
    menu.classList.add("menu")
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("maintitle");
    mainTitle.textContent = "Our Menu"

    content.appendChild(mainTitle);
    content.appendChild(menu);
    
    menu.appendChild(createDish("Shiitake burger", "Shiitake and soy protein burger with maple syrup, chilli and lime dressing, fried caramelised onions and seasonal veggies"));
    menu.appendChild(createDish("Mac n' Cheese", "Macaroni with creamy cashew and lemon cheese sauce, with vegan ham and topped with oregano and pepper"));
    menu.appendChild(createDish("Bolognese Lasagna", "Lasagna filled with lentil and texturized soy bolognese, with homemade tomato sauce and vegan parmesan"));
    menu.appendChild(createDish("White pizza", "Creamy pizza made with vegan mozzarella, vegan parmesan and vegan blue cheese, topped with sauteéd onions, garlic oil and black kalamata olives"));
    menu.appendChild(createDish("No-chicken croquettes", "Croquettes filled with garlic cheesy beshamel, shiitake mushrooms, onion and vegan no-chicken"));
    menu.appendChild(createDish("Teriyaki Bowl", "Rice bowl with no-beef, avocado, satay tempeh, edamame, corn, spring onion and with a dressing of sesame teriyaki sauce"));

    
    return menu;
}

function createDish(name, description) {
    const dishBox = document.createElement("div")
    dishBox.classList.add("dishbox")

    const dishTitle = document.createElement("h3");
    dishTitle.textContent = name;
    const dishDescription = document.createElement("p");
    dishDescription.textContent = description;

    dishBox.appendChild(dishTitle);
    dishBox.appendChild(dishDescription);

    return dishBox; 
}

function loadMenu() {
    const content = document.getElementById("content");
    content.style.justifyContent = "space-between"
    content.appendChild(createMenu())
}

export default loadMenu;
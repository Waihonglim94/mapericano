 // List of coffee shops
 const coffeeShops = [
    {
        name: "Shenzhen | 山池 Shaanchi",
        description: "🛜 WIFI: Strong, 🔌Outlet: 5",
        image: "coffeeShops/Shaanchi.svg"
    },

    {
        name: "Shenzhen | abit coffee",
        description: "🛜 WIFI: Medium, 🔌Outlet: 0",
        image: "coffeeShops/abitCoffee.svg"
    },

    {
        name: "Shenzhen | 非啡 Fit Coffee",
        description: "🛜 WIFI: Slow, 🔌Outlet: 2",
        image: "coffeeShops/fitCoffee.svg"
    }
    
    // Add more coffee shops here
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function pickRandomCoffeeShop() {
    // Disable the "Randomize" button during shuffling
    const randomButton = document.getElementById('random-button');
    randomButton.disabled = true;

    // Shuffle the coffeeShops array with animation
    const shuffleInterval = setInterval(() => {
        shuffleArray(coffeeShops);
        displayRandomCoffeeShop();
    }, 150); // Adjust the animation speed (in milliseconds)

    // After a specified duration, stop the animation and display the final result
    setTimeout(() => {
        clearInterval(shuffleInterval);
        displayRandomCoffeeShop();

        // Enable the "Randomize" button
        randomButton.disabled = false;
    }, 2000); // Total animation duration (in milliseconds)
}

function displayRandomCoffeeShop() {
    const randomIndex = Math.floor(Math.random() * coffeeShops.length);
    const randomCoffeeShop = coffeeShops[randomIndex];

    // Update the coffee shop name
    document.getElementById('coffee-shop-name').textContent = randomCoffeeShop.name;

    // Update the coffee shop description
    document.getElementById('coffee-shop-description').textContent = randomCoffeeShop.description;

    // Update the coffee shop image
    const coffeeShopImage = document.getElementById('coffee-shop-image');
    coffeeShopImage.src = randomCoffeeShop.image;
    coffeeShopImage.alt = randomCoffeeShop.name; // Set alt text for accessibility
}

// Add event listener to the "Randomize" button
document.getElementById('random-button').addEventListener('click', pickRandomCoffeeShop);


// Initially, display a random coffee shop
pickRandomCoffeeShop();


//user input

var email = window.prompt("Enter your email to join our waitlist!");
alert(email);



"use strict";

/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
let kripa = {
    firstName: "Kripa",
    lastName: "Nayak",
    age: 22,
    address:{
        addressLocality: "Shirva",
        addressRegion: "Udupi",
        state: "Karnatka",
        postalCode: 574116
    },
    email: "nayakkripa48@gmail.com",
    employeeCode: "RT02419",
    jobTitle: "Trainee Software Engineer",
    birthDate: "1998-08-04",
    gender: "female",
    telephone: "+91 9740327845",
    socialMediaAccounts: [
        "www.facebook.com/kripa",
        "www.linkedin.com/kripa",
        "www.twitter.com/kripa"
    ],
    interests: ["painting", "gardening"],
};

/*
Model bank account as a javascript object.
*/
// eslint-disable-next-line strict
// eslint-disable-next-line no-unused-vars
let bankAccount = {
    accountHolderName: "Ravi",
    bank:"CANARA Bank",
    branch: "Udupi",
    accountNumber: 3076542788,
    accountType: "saving",
    balance: 120000
};

/*
Model state of your favorite computer game as a javascript object.
*/
let computerGame = {
    name: "Doom Eternal",
    developedBy: "id Software",
    releasedOn: "March 2020",
    genre: "First-person shooter",
    mode: "Single-player, multiplayer",
};

/*
Model shopping list as an object. Each item in the list is also an object.
*/
// eslint-disable-next-line no-unused-vars
let shoppingList = {
    item1:{
        itemName: "bag",
        price: 2000,
        quantity: 1
    },
    item2:{
        itemName: "shoes",
        price: 1000,
        quantity: 2 
    },
    item3: {
        itemName: "dress",
        price: 2000,
        quantity: 2
    },
};
/*
Model a credit card as a javascript object.
*/
let creditCard = {
    cardHolderName: "Ravi",
    cardNumber: 3476863585244702,
    bankName: "CANARA",
    type: "VISA",
    validFrom: "05/20",
    validThru: "05/24"
};

/*
Model a car as a javascript object. 
*/
let car = {
    brand: "Maruti Swift",
    mileage: "21.21 kmpl",
    transmission: "manual",
    fuelType: "petrol",
    cost: "5.19 lakh",
    color: "red",   
};

/*
Model a file in computer as javascript object. 
*/
let file = {
    fileName: "Data",
    size: "1KB",
    dateCreated: "2020/09/15",
    dateModified: "2020/09/19",
    path: "C:\\Users\\hp\\Documents\\js-training-ejs\\Exercises",
    type: "Javascript File" ,
};

/*
 Model a recipe of a dish as an object
 */
let burfiRecipe = {
    coconut: "1 cup",
    sugar: "1 cup",
    freshCream: "1 cup",
    cardamomPowder: "a pinch",
    powderedSugar: "2 tablespoons",
    ghee: "1/2 tablespoon"
};

/*
 Model a book as an object
 */
let book = {
    title: "Beyond Good and Evil",
    category: "Philosophy",
    authorName: "Friedrich Nietzsche",
    publisherName: "Vintage",
    publishedYear: 2010,
    ISBN: 9780307432957
};

/*
 Model a restaurant menu as an object
 */
let restaurantMenu = {
    northIndian: {
        "Chole Bhature": "Rs.60",
        "Butter Naan": "Rs.150",
        Parathe: "Rs.100",
        "Rajma Chawal": "Rs.200",
        "Dahi Vada": "Rs.100"
    },
    southIndian: {
        Chiroti: "Rs.150",
        Idli: "Rs.50",
        "Masala Dosa": "Rs.70",
        "Ghee Rice": "Rs.150"
    },
    soup: {
        "Tomato Soup": "Rs.35",
        "Cucumber Soup": "Rs.30",
        "Potato Soup": "Rs.30"
    }
};
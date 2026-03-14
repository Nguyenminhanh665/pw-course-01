//1. 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
}
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
console.log(firstName, lastName, age);
//2.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
    };
const {brand, model, year, color} = car;
console.log(brand, model, year, color);
//3.
const user = {
    //...
}
const {nameUser = 'Guest'} = user;
console.log(nameUser);
//4. 
const price = {
    //...
}
const { priceProduct = 0 } = user;
console.log( priceProduct);
//5. 
const book = {
    title: "De Men phieu luu ki",
}
const {title: bookTitle } = book
console.log(bookTitle);
//6.
const film = {
    director: "John Wick",
}
const {director: filmDirector } = film;
console.log(filmDirector);
//7.
const person1 = {
    address: {
        street: "Le Loi",
        city: "Ho Chi Minh",
        country: "Vietnam"
    }
}
const {address: {street}} = person1;
console.log(street);
//8. 
const product = {
    details: {
        brand: "Toyota",
        model: "Kia morning",
        color1: "white"
    }
}
const {details: {color1}} = product;
console.log(color1);
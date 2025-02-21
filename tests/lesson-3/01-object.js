const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}
console.log(car.year);
//
const person = {
    "name": "Minh Anh",
    "address": {
        "street": "Nguyen Tat Thanh",
        "city": "Vinh Yen",
        "country": "Viet Nam"
    }
}
console.log(person.address.street);
//
const student = {
    "name": "Alex",
    "grades": {
        "math": 8,
        "english": 7
    }
}
console.log(student["grades"]["math"]);
//
const product = {
    "giao trinh": 60000,
    "but": 10000,
    "giay note": 1000,
    "thuoc": 5000
}
for (let key in product) {
    console.log(key + ": " + product[key]);
}
//
const settings = {
    "volume": 50,
    "brightness": "high"
}

settings.volume = 75
console.log(`Volume: ${settings.volume}, Brightness: ${settings.brightness}`);
//
const bike = {
    "price": 600,
    "manufacturer": {
        "year": 2011,
        "name": "Yamaha"
    }
}
bike["color"] = "yellow"
console.log(`Price: ${bike.price}, Manufacturer: ${bike.manufacturer.name}, Year: ${bike.manufacturer.year}, Color: ${bike.color}`);
//
const employee = {
    "name": "Nguyen Van A",
    "age": 26,
    "department": "Sales"
}
delete employee.age
console.log(employee);
//
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

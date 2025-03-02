1.// In ten va gia tri cua thuoc tinh trong 1 doi tuong
const personal = {
    "name": "Minh Anhh",
    "age": 18,
    "school": "AOF"
}
for(let feature in personal) {
    console.log(`${feature}=${personal[feature]}`);
}
2.// Tính tổng các giá trị số của các thuộc tính của 1 đối tượng
const product = {"banana": 20, "orange": 18, "origin": "Japan"};
let sum = 0;
for(let property in product) {
    if(typeof product[property] === "number" ) {
        sum += product[property];
    }
}
console.log('sum: ', sum);
3.// Tạo 1 mảng chứa tất cả các thuộc tính của một đối tượng
const student = {"name": "Anhh", "school": "AOF"};
const newStudent = [];
for(let information in student) {
    newStudent.push(information);
}
console.log(newStudent);
4.//Tạo mảng chứa các ký tự nghịch đảo từ 1 chuỗi đã cho
const string = "Google";
let newString = [];
for(let char of string) {
    newString.unshift(char);
}
console.log(newString);



//BÀI CHỮA
const arr = [1, 1, 3, 4, 3, 55, 23];

let firstIndex = -1;
let lastIndex = -1;
let count = 0
let target = 23;

for (let i of arr) {
    if(i === target) {
        if(firstIndex === -1) {
            firstIndex = count;
        }
        lastIndex = count;
    }
    count++;
}

if(firstIndex === -1 && lastIndex === -1) {
    console.log(`So ${target} khong ton tai trong mang`);
} else {
    console.log(`firstIndex: ${firstIndex} - lastIndex: ${lastIndex}`);
}





3.// Lọc ra tất cả các phần tử chỉ xuất hiện một lần trong một mảng.
const number2 = [3, 4, 6, 4, 8, 3];
for(let num of number2) {
    if(number2.indexOf(num) === number2.lastIndexOf(num)) {
        console.log(num);
    }
}

2.//Tạo mảng chứa các ký tự nghịch đảo từ 1 chuỗi đã cho
const string = "Google";
let newString = [];
for(let char of string) {
    newString.unshift(char);
}
console.log(newString);

// Cách 2
let str1 = "Playwright";
let mangNghichDao = [];
for(let i = str1.length - 1; i >= 0; i--) {
    mangNghichDao.push[i];
}
console.log(mangNghichDao);
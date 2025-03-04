1.// Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước.
const arr1 = [5, 6, 3, 55, 25]; 
for (let value of arr1) {
    let index = arr1.indexOf(value); 
    let j = arr1[index - 1] ;
    let k = arr1[index + 1];
    if (value === 5 && value === 25) {
        continue;
    } else {
        console.log(`Số ${value} có số đứng trước là ${j} và số đứng sau là ${k}`);
    }
}
//BÀI CHỮA
const arr = [1, 1, 3, 4, 3, 55, 23];

let firstIndex = -1;
let lastIndex = -1;
let count = 0
let target = 55;

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
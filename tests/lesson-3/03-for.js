1.
let arr11 = [];
for (let i = 1; i <= 100; i++) {
    console.log(arr[i - 1] = i);
}
console.log("Mảng số từ 1 đến 100: ", arr);
let sum11 = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Tổng các số từ 1 đến 100: ", sum);
//
2.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// 
3.
let arr22 = []
for (let i = 1; i <= 99; i += 2) {
    console.log(arr.push(i));
}
console.log("Mảng số lẻ từ 1 đến 99 là: ", arr);
//
4.
for (let i = 1; i <= 10; i++) {
    console.log(`user-${i}@gmail.com`);
}
//
5.
let arr = []
const doanhThu12Thang = [
    { "month": 2, "total": 120 },
    { "month": 1, "total": 100 },
    { "mmonth": 3, "total": 230 },
    { "month": 4, "total": 490 },
    { "month": 5, "total": 289 },
    { "month": 6, "total": 384 },
    { "month": 7, "total": 294 },
    { "month": 8, "total": 194 },
    { "month": 9, "total": 120 },
    { "month": 10, "total": 384 },
    { "month": 11, "total": 284 },
    { "month": 12, "total": 192 }
]

let sum22 = 0
for (let i = 0; i < doanhThu12Thang.length; i++) {
    sum = sum + doanhThu12Thang[i].total;
}
console.log("Tổng doanh thu 12 tháng", sum);
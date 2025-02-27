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
3.// Lọc ra tất cả các phần tử chỉ xuất hiện một lần trong một mảng.
const number2 = [3, 4, 6, 4, 8, 3];
for(let num of number2) {
    if(number2.indexOf(num) === number2.lastIndexOf(num)) {
        console.log(num);
    }
}

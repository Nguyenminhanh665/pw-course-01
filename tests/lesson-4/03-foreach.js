1.// In ra tất cả các phần tử của một mảng.
const alphabet = ["abc", "def", "ghi"];
alphabet.forEach((value, index) => {
    console.log(value);
})
2.// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng.

const number = [1, 2, 3];
let sum = 0;
let max = 0;
number.forEach ((value) => {
    sum = sum + value
    if (max < value ) {
        max = value;
    }
});
console.log(`Tổng của tất cả các giá trị trong mảng là ${sum}`);
console.log(`Giá trị lớn nhất trong mảng là ${max}`);
3.// Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi.
const number1 = [1, 2, 3];
let number1Double = [];
let j = 0;
number.forEach ((value) => {
    j = value * 2;
    number1Double.push(j);
    console.log(j);     
});    
    
        
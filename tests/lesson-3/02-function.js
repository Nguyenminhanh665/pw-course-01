1.
function tinhChiSoBMI(height, weight)  {
    let BMI = weight / (height * height);
    if(BMI < 18.5) {
        return("Thieu can");
    }
    if(BMI < 25) {
        return("Binh thuong");
    }
    if(BMI < 30) {
        return("Thua can");
    }
    if(BMI >= 30) {
        return("Beo phi");
    }
}
const result1 = tinhChiSoBMI(1.70, 50);
console.log(result1);
//
2.
function translateTemperature(temperature, type) {
    let doF = temperature * 9/5 + 32
    let doC = (temperature - 32) * 5 / 9
    if(type === 'C') {
        console.log(`Nhiệt độ chuyển đổi là ${doF}`);
    }
    if(type === 'F') {
        console.log(`Nhiệt độ chuyển đổi là ${doC}`);
    }
}
const result2 = translateTemperature(40, 'C');
console.log(result2);
//
3.
const arr = [3, 4, 7, 5, 8, 9]
let sum = 0
function tongSo(arr) {
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const result = tongSo(arr)
console.log(result);
//
4. 
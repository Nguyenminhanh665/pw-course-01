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
const result = tinhChiSoBMI(1.70, 50);
console.log(result);
//
2.

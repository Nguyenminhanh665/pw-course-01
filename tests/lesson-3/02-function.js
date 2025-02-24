1.
function tinhChiSoBMI(height, weight) {
    let BMI = weight / (height * height);
    if (BMI < 18.5) {
        return ("Thieu can");
    }
    if (BMI < 25) {
        return ("Binh thuong");
    }
    if (BMI < 30) {
        return ("Thua can");
    }
    if (BMI >= 30) {
        return ("Beo phi");
    }
}
const result1 = tinhChiSoBMI(1.70, 50);
console.log(result1);
//
2.
function translateTemperature(temperature, type) {
    let doF = temperature * 9 / 5 + 32
    let doC = (temperature - 32) * 5 / 9
    if (type === 'C') {
        console.log(`Nhiệt độ chuyển đổi là ${doF}`);
    }
    if (type === 'F') {
        console.log(`Nhiệt độ chuyển đổi là ${doC}`);
    }
}
const result2 = translateTemperature(40, 'C');
console.log(result2);
//
3.
const arr = [3, 4, 7, 5, 8, 9]
let sum1 = 0
function tongSo(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum1;
}
const result3 = tongSo(arr)
console.log(result3);
//
6.
const diemSo = [
    { name: "Alex", score: 85 },
    { name: "Anh", score: 74 },
    { name: "Ngan", score: 80 },
    { name: "My", score: 90 },
]
let sum = 0
function tinhDiemTrungBinh() {
    for (let i = 0; i < diemSo.length; i++) {
        sum = sum + diemSo[i].score;
    }
    return sum / diemSo.length;
}
const result4 = tinhDiemTrungBinh(diemSo)
console.log(result4);
//
7.
const hangHoa = [
    { name: "xa phong", price: 100 },
    { name: "dien thoai", price: 200.5 },
    { name: "xe dap", price: 150 },
    { name: "hop but", price: 65 },
]
function kiemTraGiaCa() {
    for (let i = 0; i < hangHoa.length; i++) {
        if (i < 0) {
            return ("false");
        }
        if (i > 0) {
            return ("true");
        }
    }
}
const result = kiemTraGiaCa(hangHoa)
console.log(result);
//
8.
let time = 10;
function scheduleShop(hour) {
    if (time >= 9 && time <= 21) {
        return ("Open");
    }
    if (time < 9 || time > 21) {
        return ("Close");
    }
}
const result5 = scheduleShop(15)
console.log(result5);
//
9.
function ticketPrice(age) {
    if (age < 5) {
        return ("Free");
    }
    if (age >= 18) {
        return ("Pay 100k");
    }
    if (age >= 6 && age <= 17) {
        return ("Pay 50k");
    }
}
const result6 = ticketPrice(15)
console.log(result6);
//
11.
function kiemTraDiemSo(diemSo) {
    if (diemSo >= 8) {
        console.log("Gioi");
    }
    if (diemSo >= 6.5 && diemSo < 8) {
        console.log("Kha");
    }
    if (diemSo > 5 && diemSo < 6.5) {
        console.log("Trung binh");
    }
    if (diemSo < 5) {
        console.log("Yeu");
    }
}
const diemSoArr = [8, 6.5, 7, 2]
for (let i = 0; i < diemSoArr.length; i++) {
    kiemTraDiemSo(diemSoArr[i]);
}
//
12.
function trangThaiNhietDo(nhietDo) {
    if (nhietDo > 30) {
        Console.log(`${nhietDo} độ C - Trời nóng`);
    }
    if (nhietDo < 30 && nhietDo >= 20) {
        console.log(`${nhietDo} độ C - Trời mát`);
    }
    if (nhietDo < 20) {
        console.log(`${nhietDo} độ C - Trời lạnh`);
    }
}
const nhietDoArr = [20, 4, 15, 27]
for (let i = 0; i < nhietDoArr.length; i++) {
    trangThaiNhietDo(nhietDoArr[i]);
}
//
10.
let month = 8;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("FebuaryFebuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octorber");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Không tìm thấy tên tháng");
}
//
5.
const globalUser = [
    { name: "Alex", email: "alex34@gmail.com" },
    { name: "Ngan", email: "ngann@684gmail.com" },
    { name: "My", email: "mytran@gmail.com" },
    { name: "Tuan", email: "tuan93@gmail.com" },
]
function updateEmail(name, newEmail) {
    for (let i = 0; i < globalUser.length; i++) {
        if (globalUser[i].name === name) {
            globalUser[i].email = newEmail;
            console.log(`${name} co Email moi la ${newEmail}`);
            return;
        }
    }
}
updateEmail("Tuan", "tuantrannew@email.com");
updateEmail("Alice", "alice62new@email.com"); 

1.// Khởi động Tàu vũ trụ K12
let departureEarth = "Trái Đát";
let mission = "Khám phá vũ trụ K12";
let crew = ["Candy Vie ", "Hạnh", "Minh Châu", "Thùy An", "Mai Uyên", "Minh", "Thảo Vy", "Thanh Thiên", "Khánh Vân", "Nhật Khánh", "Thảo Đoàn", "Lê My", "Minh Trang"];
function launchShip() {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`);
    return;
}
launchShip();
2.// Du Hành đến Hành tinh bí ẩn
function caculatedDistance(speed, time) {
    let Distance = speed * time;
    console.log(`Khoảng cách đến hành tinh bí ẩn là ${Distance} km/h`);
    return;
}
caculatedDistance(1000, 24);
3.// Hành tinh kỳ lạ
function convertTimeToHex(time) {
    let hexadecimalNumber = time.toString(16);
    return (`Thời gian trên hành tinh bí ẩn là ${hexadecimalNumber} giây`);
}
const result = convertTimeToHex(120);
console.log(result);
4.// Khám phá kho báu
let originCode = "K12 Challenging";
let newCode = "";
function decryptCode(code) {
    for (let i = 0; i < code.length; i++) {
        if (code[i] === code[i].toUpperCase()) {
            newCode += code[i].toLowerCase();
        } else {
            newCode += code[i].toUpperCase();
        }
    }
    console.log(`Mật mã mới là ${newCode}`);
}
decryptCode("K12 Challenge");
5.// Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị về Trái Đất");
}
returnToEarth();




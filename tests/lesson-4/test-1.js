//1. Khởi động Tàu vũ trụ K12
let departureEarth = "Trái Đát";
let mission = "Khám phá vũ trụ K12";
let crew = ["Candy Vie ", "Hạnh", "Minh Châu", "Thùy An", "Mai Uyên", "Minh", "Thảo Vy", "Thanh Thiên", "Khánh Vân", "Nhật Khánh", "Thảo Đoàn", "Lê My", "Minh Trang"];
//Cách 1
function launchShip(crew) {
    let listMember = "";
    for (let i = 0; i < crew.length; i++) {
        if (i == crew.length - 1) {
            listMember += crew[i] + " ";
        } else {
            listMember += crew[i] + ", ";
        }
    }


    return (`Chuẩn bị khởi động! Phi hành đoàn gồm: ${listMember} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);//trả về thông điệp

}
console.log(launchShip(crew));//gọi hàm => giá trị trả về của hàm (return) được truyền vào console.log để in ra
//Cách 2: dùng for...in
function launchShip(crew) {
    let member = "";
    for (let index in crew) {
        member += crew[index] + ", ";
    }
    return (`Chuẩn bị khởi động! Phi hành đoàn gồm: ${member} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`)
}
//Cách 3: dùng join
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let message = launchShip(crew);//kết nối với trung tâm điều khiển - Gọi hàm launchShip
console.log(message);//In ra thông điệpđiệp

//2. Du Hành đến Hành tinh bí ẩn
function caculatedDistance(speed, time) {
    let Distance = speed * time;
    return Distance;
}
let Distance = caculatedDistance(1000, 24);
console.log(`Khoảng cách là: ${Distance} km`);


//3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    let hexadecimalNumber = time.toString(16);
    return (`Thời gian trên hành tinh bí ẩn là ${hexadecimalNumber} giây`);
}
const result = convertTimeToHex(120);
console.log(result);// cứng nhắc, chưa linh hoạt, làm 2 việc vừa tính tóan data và vừa phải định dạng chuỗi để hiển thị => khó reuse lại
//Cách 2: tối ưu hơnhơn
function convertTimeToHex(time) {
    return time.toString(16);
}//hàm chỉ có chức năng là chuyển đổi số => linh hoạt, dễ tái sử dụng

console.log(`Thời gian trên hành tinh này là: ${convertTimeToHex(120)}`);//việc hiển thị chuỗi được xử lý riêng ở console.log


//4. Khám phá kho báu
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
    return newCode;
}
console.log(`Mật mã mới là ${decryptCode("K12 Challenge")}`);

//5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị về Trái Đất");
}
returnToEarth();




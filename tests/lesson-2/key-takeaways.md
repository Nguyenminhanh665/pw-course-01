# Lesson 2: Git&Javascript basic
## Version control system
### Git-three states
- Working directory: file mới hoặc file có tahy đổi
- Staging area: các file đưa vào vùng chuẩn bị commit
- Repository: các commit
### Git-keytakeways
1. Khởi tạo
- **git init**
2. Cấu hình (email thì tương tự)
- cho 1 repo: **git config user.name "<Tên của bạn>"**
- cho default: **git config --global user.name "user"**
3. Thêm file vào Staging area
- thêm 1 file: **git add <file_name>**
- thêm toàn bộ file: **git add .**
- xem trạng thái file: **git status** (gồm 2 trạng tháithái)
- *Changes to be committed*: file đã trong vùng Saging
- *Untracking files*: file trong vùng Directory
4. Commit
- **git commit -m"message**
- kiểm tra lịch sử commit: **git log**
### Git-convention
**&lt;type&gt;: &lt;short_description&gt;**

*type: loại commit*
- **chore**: sửa nhỏ lẻ, chính tả, xóa file ko cần thiết, ...
- **feat**: thêm tính năng mới, test case mới
- **fix**: sửa lỗi test trước đó

*short_description: mô tả ngắn gọn (50 ký tự Anh or Vie không dấu)*
## Javascript
### Hello world
- tạo thư mục *lesson-2/javascript*
- tạo file *01-hello.js*
- ghi **console.log("Hello World!");**
- chạy lệnh **node lesson-2/javascript/01-hello.js**
### Biến, hằng số, kiểu dữ liệu
#### Biến (Variable): dùng để lưu giữ giá trị, có thể thay đổi giá trị được
**1. Khai báo**
- Cú pháp

**var &lt;ten_bien&gt; = &lt;gia tri&gt;;**

**let &lt;ten_bien&gt; = &lt;gia tri&gt;;**

- *Trong đó*: <ten_bien>
- bắt đầu bằng ký tự **chữ**, hoặc **gạch dưới**, hoặc **$**
- **không** chứa dấu cách
- **không** là các **từ khóa** đã có trong Java (VD: var, let, if, for, ...)

**2. Ví dụ, sử dụng, kiểm tra, thực hành xem lại chi tiết trên Record và Slide**
**Note**: *Var* có thể khai báo lại còn *let* thì không
- var item1 = "a"; 
- var item1 = "b"; // Ok

- let item2 = "a";
- let item2 = "b"; // error

**Note**: *Var* khai báo trong phạm vi toàn cục còn *let* khai báo trong phạm vi cặp ngoặc
#### Hằng số (Constant): dùng để khai báo các giá trị không thể thay đổi
**1. Khai báo**

constant &lt;name&gt; = &lt;value&gt;

**2. Ví dụ, sử dụng, thực hành xem lại trên Slide**

**Note**: khi nào dùng *var/let*, khi nào dùng *constant*
- Var/let: khi biến sẽ **gán lại**
- Constant: khi biến **không gán lại**
#### Kiểu dữ liệu (Data type)
- Có 8 kiểu dữ liệu: String, Number, Bigint, Boolean, Underfined, Null, Symbol, Object
- Ở Lesson-2 sẽ quan tâm đến 3 data type sau:
- **String**: dùng để khai báo **1 chuỗi** (chuỗi được đặt trong dấu "")
- **Number**: dùng để kahi báo **một số**
- **Boolean**: dùng để khai báo một giá trị **kiểu đúng sai (true or false)**
### Toán tử so sánh (Comparison operator)
- Dùng để **so sánh giá trị** 2 biến với nhau. Kết quả sẽ trả về **Boolean** (true or faulse)
- Các toán tử so sánh:
- so sánh hơn kém: >, <
- so sánh bằng: ==, ===. !=, !==. >=, <=
### Toán tử một ngôi (Unary operator)
- Dùng để tăng giảm giá trị
- **i++ bằng với i=i+1**
- **i-- bằng với i=i-1**
### Toán tử số học (Athrimetic operator)
- Dùng tính toán giá trị biểu thức.
- Các phép toán: +, -, *, /
### Điều kiện (Conditioanl)
- Dùng để kiểm tra xem có nên thực hiện một đoạn logic hay không 
- Cú pháp (nếu điều kiện đúng sẽ chạy đoạn code)

- if (<điều kiện>) { // code}
- Ví dụ:

if ( 5 > 3 ) {
    console.log("5 lớn hơn 3");
}
### Vòng lặp (Loops)
- Dùng để thực hiện một đoạn logic một số lần nhất định
- Cú pháp: 

- for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code }
- Ví dụ:

for (let i = 1; i <= 10; i++) {
    console.log("Giá trị của i là: ", i);
}
## VSCode
**Format code**
- Mac: Option + Shift + F
- Window: Alt + Shift + F



# Lesson 2: Git&Javascript basic
## Version control system
### Git-three states
- Working directory: file mới hoặc file có thay đổi
- Stagging area: các file đưa vào vùng chuẩn bị commit
- Repository: các commit
### Git-key takeaways
1. Khởi tạo: 
- git init
2. Cấu hình (email tương tự):
- cho 1 repo: git config user.name "<Tên của bạn>"
- cho toàn bộ máy: git config --global user.name "user"
3. Thêm file vào Stagging area
- thêm 1 file: git add <file_name>
- thêm toàn bộ: git add .
4. Xem trang thái file:
git status
- Changes to be committed: file đã trong vùng Stagging
- Untracking files: file trong vùng Directory
5. Commit:
- git commit -m "message"
- git log (kiểm tra lịch sử commit)
### Git-convention
&lt;type&gt;: &lt;short_description&gt;

 *type: loại commit*

- **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới, ...
- **feat**: thêm tính năng mới, test case mới
- **fix**: sửa 1 lỗi test trước đó

*short_description*: mô tả ngắn gọn (50 ký tự Anh or Vie không dấu)
## Javascript
### Hello world
- tạo thư mục *lesson-2/javascript*
- mở VSCode
- tạo file *01-hello.js*
- ghi *console.log("Hello World!")*
- chạy lệnh *node lesson-2/javascript/01-hello.js*
### Biến, hằng số, kiểu dữ liệu
#### Biến (Variation): dùng để lưu giữ giá trị, có thể thay đổi giá trị được
1. **Khai báo:** 
- var &lt;ten_bien&gt; = &lt;gia tri&gt;;
- letlet &lt;ten_bien&gt; = &lt;gia tri&gt;;
- *Trong đó*: <ten_bien>
- bắt đầu bằng ký tự *chữ*, hoặc *gạch dưới*, hoặc *$*
- không chứa dấu cách
- không là các "từ khóa" đã có trong Java (VD: var, let, for, if, ...)
2. **Ví dụ:**

 var firstName = "Playwright";

 let lastName = "Automation class";

 3. **Sử dụng:**
 
 console. log("firstname = " + firstname);

 console. log("lastname = " + lastname);

 - Gán lại: 
 
 lastName = "Lesson 2";

 4. **Kiểm tra:**

 console .log("lastName = " + lastName);
 
 *Chi tiết ví dụ và thực hành xem lại tại Recording*
 
 #### Hằng số (Constant): Dùng để khai báo các giá trị không thể thay đổi
 1. **Khai báo:**
  
  constant &lt;name> = &lt;value>;

 2. **Chú ý**
  - **var/let**: khi biến sẽ gán lại
  - **const**: khi biến không gán lại
  - *Chi tiết ví dụ và thực hành xem lại tại Recording*
  
  #### Kiểu dữ liệu (Data type)
  - Có 8 kiểu dữ liệu: String, Number, Bigint, Boolean, Underfined, Null, Symbol, Object
  - Kiểu *String* dùng để khai báo một **chuỗi**
  - Kiểu *Number* dùng để khia báo **một số**
  - Kiểu *Boolean* dùng để khai báo một giá trị **kiểu đúng sai**

  ### Comparison operator (Toán tử so sánh)
  - Dùng để **so sánh giá trị** giữa 2 biến với nhau. Kết quả sẽ trả về **Boolean**
  - Các toán tử so sánh:
  - *So sánh hơn kém*: >, <
  - *So sánh bằng*: ==, ===, !=, !==, >=, <=

  ### Unary operator (Toán tử một ngôi)
  - Dùng để tăng giảm giá trị
  - **i++** bằng với **i=i+1**
  - **i--** bằng với **i=i-1**

  ### Athrimetic operator (Toán tử số học)
  - Dùng tính toán giá trị biểu thức
  - Các phép toán: +, -, *, /

  ### Conditional (Điều kiện)
  - Dùng để kiểm tra có nên thực hiện một đoạn logic hay không
  - Cú pháp (nếu đúng sẽ run code, nếu sai sẽ không runrun)
 
 if (<điều kiện>) { // code }
 
 - *Ví dụ và thực hành xem chi tiết trên Recording*

### Loops (Vòng lặp)
- Dùng để thực hiện 1 đoạn logic một số lần nhất định
- Cú pháp: 

for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code }

## VSCode
### Format code
- Mac: Option + Shift + F
- Win: Alt + Shift + FF

 








# Lesson 5: DOM terminology & Playwright basic
## 1. DOM (Document Object Model)
**Cấu trúc DOM cơ bản của 1 trang web bao gồm các thẻ sau:**
- thẻ &lt;!DOCTYPE html&gt;
- thẻ &lt;html&gt;
- thẻ &lt;head&gt;: gồm các thẻ link, title, meta, script, ...
- thẻ &lt;body&gt;: gồm các thẻ div, a, p, &lt;h1&gt;&lt;/h1&gt; đến &lt;h6&gt;&lt;/h6&gt;, table, script, ...

### a. Node: đơn vị cơ bản của 1 cấu trúc trong cây DOM
**Cấu trúc**: 
&lt;option value = "usa"&gt;United States&lt;/option&gt;

**Trong đó:**
- &lt;option value = "usa"&gt; là thẻ mở (Opening tag <>)
- &lt;/option&gt; là thẻ đóng (Closing tag </>)
- value : là thuộc tính của thẻ
- "usa" là giá trị của thuộc tính
- United States: là text
- **Note**: nếu 1 thẻ có nhiều thuộc tính, các thuộc tính sẽ cách nhau bởi dấu cách.

**Các thẻ HTML thường gặp**
- Thẻ &lt;div&gt; (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ &lt;h1&gt;&lt;/h1&gt; đến &lt;h6&gt;&lt;/h6&gt; (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ &lt;form&gt;&lt;/form&gt;: dùng để chứa một form thông tin.
- Thẻ input: **text, email, radio, checkbox, file, color, range, date**
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

### b. Selector
- là cách chọn phần tử trên trang
- Có nhiều kiểu chọn: XPath selector, CSS Selector, Playwright Selector
- Bài này sẽ học về XPath Selector

#### b.1. XPath Selector

XPath = XML Path

Có 2 loại:
- **Tuyệt đối**: đi dọc theo cây DOM và bắt đầu bởi `/`
  - VD: ```/html/body/div[2]/form/div[1]/input```
- **Tương đối**: tìm dựa vào đặc tính và bắt đầu bởi `//`
  - VD: ```//select[@id='country']```
- Nên dùng XPath tương đối

## 3. Playwright basic syntax
### a. Test
- Đơn vị cơ bản để khai báo một test
  - Cú pháp: `test('Test case name', async ({ page }) => { //code logic}`

### b. Step
- Đơn vị nhỏ hơn test, để khai báo từng step của test case
  - Cú pháp: `await test.step('Tên step', async () => {// code here});`
- Lưu ý: step nên được map 1-1 với tets case để dễ dàng maintain

### c. Basic action
- **Navigate**: 
  - Cú pháp: `await page.goto('https://pw-practice.playwrightvn.com/');`
- **Click**
  - Single click: `await page.locator("//button").click();`
  - Double click: `await page.locator("//button").dblclick();`
  - Click chuột phải: `await page.locator("//button").click({ button: 'right' })`
  - Click chuột kèm bấm phím khác: `await page.locator("").click({ modifier ['Shift'], })`
- **Input**
  - Fill: `await page.locator("//input").fill('Playwright Viet Nam');`
  - pressSequentially: `await page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100,});`
- **Radio/checkbox**
  - Kiểm tra checkbox đang được check hay không: `const isChecked = page.locator("//input").isChecked();`
  - Dùng để chọn checkbox: `await page.locator("//input").check();`
  - Dùng để chọn(true) hoặc bỏ chọn(false) checkbox: `await page.locator("//input").setChecked(false);`
- **Select option**
  - Ví dụ: `await page.locator('input').selectOption({value: 'uk'});`
- **Set input file**
  - Ví dụ: `await page.locator('input').setInputFiles();`











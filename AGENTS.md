# Quy tắc làm việc cho dự án Quản lý sinh viên

Tệp này áp dụng cho toàn bộ repository. Mọi agent phải đọc trước khi phân tích, sửa hoặc tạo mã nguồn.

## 1. Mục tiêu chung

- Xây dựng hệ thống quản lý sinh viên cấp khoa CNTT dễ đọc, dễ bảo trì và có thể phát triển từ prototype HTML/CSS/JavaScript hiện tại thành ứng dụng full-stack.
- Chưa mặc định backend hoặc database. Chỉ chốt Laravel, Express, Django, ASP.NET và MySQL/PostgreSQL/SQL Server khi nhóm đưa ra quyết định chính thức.
- Ưu tiên giải pháp đơn giản, đúng yêu cầu trong `docs/project-specification.md`; không tự ý thêm framework, thư viện hoặc tính năng ngoài phạm vi.
- Mỗi thay đổi phải nhỏ, có mục đích rõ ràng và không làm hỏng chức năng đang hoạt động.
- Khi đặc tả, mã nguồn và yêu cầu mới nhất của người dùng mâu thuẫn nhau, ưu tiên yêu cầu mới nhất của người dùng và nêu rõ phần mâu thuẫn.

## 2. Tổ chức file và thư mục

### 2.1. Nguyên tắc

- Không đặt file sinh ra tạm thời, file tải về, log, dữ liệu thử hoặc bản sao như `*_copy`, `*_new`, `*_final` ở thư mục gốc.
- Không tạo nhiều file có cùng trách nhiệm. Trước khi tạo file mới, kiểm tra xem chức năng đó đã có nơi phù hợp chưa.
- Mỗi file chỉ nên có một trách nhiệm chính. Khi file trở nên khó đọc, tách theo tính năng hoặc tầng kiến trúc, không tách tùy tiện theo kích thước.
- Giữ tài liệu trong `docs/`, mã kiểm thử trong `tests/`, script hỗ trợ trong `scripts/`, dữ liệu mẫu trong `data/` hoặc `tests/fixtures/`.
- Không commit thư mục môi trường và file sinh tự động như `.venv/`, `__pycache__/`, `.pytest_cache/`, coverage, log, file database cục bộ và secrets.
- Khi di chuyển hoặc đổi tên file, phải cập nhật đồng thời mọi đường dẫn import, liên kết CSS/JS, template, tài liệu và test liên quan.

### 2.2. Cấu trúc frontend hiện tại

```text
quanLySinhVien/
├── index.html
├── style.md
├── public-home/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── icons/
│   │   ├── banners/
│   │   ├── teachers/
│   │   ├── partners/
│   │   └── students/
│   └── fonts/
├── pages/
│   ├── students/
│   ├── classes/
│   ├── subjects/
│   ├── grades/
│   ├── reports/
│   ├── communication/
│   └── account/
├── assets/
├── docs/
│   └── project-specification.md
├── database/
│   ├── migrations/
│   └── seeds/
├── server/
├── tests/
├── AGENTS.md
└── README.md
```

- `index.html` là landing page duy nhất và là entry point của GitHub Pages.
- `style.md` là style guide của dự án: không xóa và phải cập nhật khi thay đổi màu sắc, typography, spacing hoặc component chung.
- `public-home/` chỉ chứa tài nguyên được homepage sử dụng. CSS riêng đặt trong `css/`, JavaScript riêng đặt trong `js/`.
- Thư viện bên thứ ba chỉ được self-host trong `public-home/` khi dự án thực sự sử dụng và có lý do rõ ràng; không thêm jQuery, Slick, AOS hoặc Bootstrap local chỉ để dự phòng.
- `pages/` dành cho các trang HTML phụ; `assets/` dành cho SVG, video, PDF và tài nguyên dùng chung giữa nhiều trang.
- Các trang/module nghiệp vụ bám theo đặc tả: sinh viên, lớp-ngành, môn học-điểm, người dùng-phân quyền, thống kê-báo cáo và giao tiếp.
- Chat GV-SV, chat SV-SV và diễn đàn cùng thuộc nhóm `communication/`; không tạo ba hệ thống component/data tách biệt nếu có thể tái sử dụng.
- `database/` chỉ được tạo khi bắt đầu schema/migration; `server/` chỉ được tạo sau khi chốt backend. Cấu trúc con của `server/` phải theo convention chính thức của framework được chọn.
- `tests/` phản chiếu các module nghiệp vụ, ưu tiên auth/RBAC, CRUD sinh viên, tính điểm, import/export, cảnh báo học tập và quyền truy cập chat.
- Chỉ tạo thư mục con khi có file thực tế cần đặt vào; không tạo hàng loạt thư mục rỗng để mô phỏng cấu trúc.
- CSS/JS có thể dùng query version như `?v=1.0.0`. Phải tăng version khi thay đổi có thể bị trình duyệt hoặc CDN cache.
- Khi tích hợp backend, giữ contract API và module nghiệp vụ rõ ràng; không di chuyển frontend vào cấu trúc framework cho đến khi stack được chốt.

## 3. Quy ước đặt tên

- Python, module, hàm và biến: `snake_case`; class: `PascalCase`; hằng số: `UPPER_SNAKE_CASE`.
- JavaScript: biến và hàm dùng `camelCase`; class dùng `PascalCase`; hằng số dùng `UPPER_SNAKE_CASE`.
- CSS class và tên file web mới: chữ thường, dùng `kebab-case`.
- Route và URL: chữ thường, rõ nghĩa, dùng `kebab-case`; API dùng tiền tố thống nhất như `/api/students`.
- Tên bảng và cột database dùng `snake_case`; khóa chính và khóa ngoại phải có tên rõ nghĩa.
- Không dùng tên mơ hồ như `data1`, `temp`, `item2`, `x`, `handleThing`. Tên phải thể hiện đúng nghiệp vụ.
- Dữ liệu nghiệp vụ có thể dùng tiếng Việt có dấu ở giao diện; identifier trong code ưu tiên tiếng Anh nhất quán. Không trộn nhiều cách gọi cho cùng một khái niệm.

## 4. Chất lượng mã nguồn

### 4.1. Quy tắc chung

- Đọc luồng liên quan trước khi sửa; ưu tiên sửa nguyên nhân gốc thay vì vá biểu hiện.
- Không lặp logic. Tách hàm dùng chung khi có từ hai nơi sử dụng thực tế.
- Hàm ngắn, làm một việc và có đầu vào/đầu ra rõ ràng. Dùng guard clause để giảm lồng nhau.
- Không để magic number, chuỗi trạng thái hoặc selector quan trọng rải rác; gom thành hằng số khi chúng được dùng lại.
- Chỉ comment để giải thích lý do, ràng buộc nghiệp vụ hoặc quyết định khó hiểu; không comment lại điều code đã nói rõ.
- Xóa code chết, import thừa và log debug trước khi hoàn thành. Không giữ code cũ dưới dạng comment.
- Không tự ý sửa file hoặc định dạng ngoài phạm vi chỉ để “làm sạch”. Tôn trọng thay đổi hiện có của người dùng.
- Tất cả file văn bản phải dùng UTF-8. Phải giữ tiếng Việt hiển thị đúng, không tạo chuỗi lỗi mã hóa như `Quáº£n lÃ½`.

### 4.2. HTML và giao diện

- Dùng HTML semantic (`header`, `nav`, `main`, `section`, `form`, `button`) và cấu trúc heading hợp lý.
- Mọi `input`, `select`, `textarea` phải có `label`; nút chỉ có icon phải có tên truy cập (`aria-label`).
- Không dùng inline CSS hoặc inline JavaScript, trừ dữ liệu cấu hình tối thiểu có lý do rõ ràng.
- Không lặp `id`; hook dùng cho JavaScript phải ổn định. Ưu tiên `data-*` cho hành vi, class cho trình bày.
- Giao diện phải dùng được trên desktop và mobile, có trạng thái loading, empty, error và disabled khi phù hợp.
- Tận dụng component và token thiết kế hiện có; không thêm màu, font, khoảng cách tùy ý nếu đã có quy ước.

### 4.3. CSS

- Sắp xếp theo: token/reset, layout, component, page, responsive, utility.
- Ưu tiên class thay vì selector theo cấu trúc DOM quá sâu; tránh `!important` trừ trường hợp ghi đè thư viện có giải thích.
- Dùng CSS custom properties cho màu sắc, khoảng cách và kích thước lặp lại.
- Không sao chép style Bootstrap đã cung cấp nếu không có yêu cầu thiết kế riêng.

### 4.4. JavaScript

- Dùng `const` mặc định, chỉ dùng `let` khi cần gán lại; không dùng `var`.
- Tách dữ liệu, thao tác DOM và logic nghiệp vụ. Không đặt toàn bộ ứng dụng trong một file khi đã có nhiều module/tính năng.
- Không chèn dữ liệu người dùng trực tiếp bằng `innerHTML`. Dùng `textContent` hoặc escape/sanitize rõ ràng để tránh XSS.
- Kiểm tra phần tử tồn tại trước khi gắn sự kiện nếu script được dùng trên nhiều trang.
- Xử lý lỗi bất đồng bộ bằng `try/catch`, hiển thị thông báo hữu ích và không nuốt lỗi.
- Không gắn hàm mới vào `window`; dùng ES modules khi cấu trúc ứng dụng cho phép.

### 4.5. Backend và API

- Tuân thủ convention chính thức của framework được nhóm chọn; không trộn pattern từ nhiều framework.
- Controller/route chỉ nhận request, kiểm tra xác thực/phân quyền, gọi tầng nghiệp vụ và tạo response.
- Logic nghiệp vụ đặt ở service/use-case; truy cập dữ liệu đặt ở model/repository, không viết query dài trực tiếp trong controller.
- API tổ chức theo các module trong đặc tả và có response/error schema nhất quán.
- Validate và chuẩn hóa mọi dữ liệu đầu vào ở phía server. Không tin dữ liệu hoặc quyền được gửi từ frontend.
- Điểm tổng kết, GPA, cảnh báo học tập và phân quyền phải được tính/kiểm tra ở backend, không chỉ ở JavaScript phía client.
- Dùng migration cho thay đổi schema và seed cho dữ liệu demo; không sửa database dùng chung bằng thao tác thủ công không được ghi lại.
- Chat và thông báo real-time phải có cơ chế lưu bền vững, kiểm tra người tham gia và giới hạn loại/kích thước file đính kèm.

## 5. Dữ liệu, bảo mật và quyền truy cập

- Không hard-code mật khẩu, secret key, chuỗi kết nối hoặc token. Đọc từ biến môi trường và cung cấp `.env.example` không chứa giá trị bí mật.
- Mật khẩu phải được hash bằng thư viện phù hợp; không lưu hoặc ghi log mật khẩu dạng rõ.
- Mọi thao tác thêm, sửa, xóa và xem dữ liệu nhạy cảm phải kiểm tra xác thực và phân quyền ở backend.
- Dùng parameterized query/ORM; không nối chuỗi SQL từ dữ liệu người dùng.
- Bảo vệ form thay đổi dữ liệu bằng CSRF khi dùng session/cookie.
- Chỉ thu thập dữ liệu sinh viên cần thiết; không đưa dữ liệu cá nhân thật vào fixture, ảnh chụp, log hoặc repository.
- Thao tác xóa phải có xác nhận ở UI và kiểm soát ở backend; ưu tiên soft delete/audit log nếu đặc tả yêu cầu truy vết.

## 6. Kiểm thử và xác minh

- Mọi sửa lỗi phải có test tái hiện lỗi khi dự án đã có hạ tầng test.
- Tính năng mới cần test cho luồng thành công, dữ liệu không hợp lệ, không có quyền và trường hợp biên quan trọng.
- Test backend ưu tiên tầng service và API; test giao diện tập trung vào hành vi người dùng thay vì chi tiết triển khai.
- Test phải độc lập, lặp lại được và không phụ thuộc database hoặc mạng production.
- Trước khi hoàn thành, chạy các lệnh lint/test/build sẵn có. Nếu dự án chưa có công cụ tương ứng, kiểm tra thủ công phần đã đổi và ghi rõ điều chưa thể kiểm tra.
- Với thay đổi giao diện, kiểm tra ít nhất viewport mobile và desktop, bàn phím cơ bản và console trình duyệt.

## 7. Quy trình làm việc của agent

1. Đọc `AGENTS.md`, `docs/project-specification.md` và các file trực tiếp liên quan.
2. Kiểm tra trạng thái repository; không ghi đè thay đổi chưa commit của người dùng.
3. Xác định phạm vi nhỏ nhất đáp ứng yêu cầu và nêu giả định quan trọng nếu có.
4. Tìm cách tái sử dụng component, hàm và pattern hiện có trước khi tạo mới.
5. Thực hiện thay đổi theo từng nhóm logic; không trộn refactor lớn với sửa lỗi/tính năng nếu không cần thiết.
6. Chạy kiểm tra phù hợp, xem lại diff và xác nhận không có secret, code debug hoặc file rác.
7. Báo cáo ngắn gọn: đã đổi gì, file nào, đã kiểm tra gì và còn rủi ro/hạn chế nào.

Agent phải hỏi lại trước khi:

- Thay đổi stack công nghệ, database hoặc kiến trúc nền tảng.
- Xóa dữ liệu/file quan trọng, đổi schema có nguy cơ mất dữ liệu hoặc thay đổi API không tương thích.
- Bổ sung dependency production mới khi có nhiều lựa chọn với trade-off đáng kể.
- Thực hiện thay đổi vượt ngoài phạm vi yêu cầu hoặc mâu thuẫn với đặc tả.

## 8. Tiêu chí hoàn thành

Một công việc chỉ được coi là hoàn thành khi:

- Hành vi đáp ứng yêu cầu và không phá luồng hiện có liên quan.
- File nằm đúng thư mục, tên rõ nghĩa, không có bản sao hoặc artifact thừa.
- Code đã được format/lint theo cấu hình dự án và các test liên quan đã chạy thành công.
- Dữ liệu đầu vào, lỗi, bảo mật và quyền truy cập đã được xử lý phù hợp với phạm vi.
- Tiếng Việt hiển thị đúng UTF-8 và giao diện liên quan hoạt động ở mobile/desktop.
- Tài liệu hoặc `.env.example` được cập nhật nếu cách cài đặt, cấu hình hoặc sử dụng thay đổi.


# Phân công công việc và gợi ý công nghệ

## 1. Thông tin chung

- **Đề tài:** Website quản lý kết quả học tập
- **Phạm vi:** Lớp K10TIN trong 01 học kỳ
- **Số thành viên:** 05 người
- **Hạn hoàn thành:** 01/12/2026
- **Đặc tả nghiệp vụ:** [`../dacTa.md`](../dacTa.md)

## 2. Công nghệ đề xuất

### 2.1. Stack chính

| Thành phần | Công nghệ | Mục đích |
|---|---|---|
| Giao diện | HTML5 | Xây dựng cấu trúc trang có ngữ nghĩa và hỗ trợ khả năng truy cập. |
| Trình bày | CSS3 | Xây dựng giao diện responsive cho máy tính và điện thoại. |
| Tương tác phía trình duyệt | JavaScript thuần | Kiểm tra dữ liệu cơ bản, thao tác DOM và gọi backend bằng `fetch`. |
| Backend | PHP | Xử lý đăng nhập, phân quyền, nghiệp vụ và các yêu cầu từ frontend. |
| Cơ sở dữ liệu | MySQL | Lưu trữ tập trung tài khoản, sinh viên, giáo viên, lớp, môn học và điểm. |
| Trao đổi dữ liệu | JSON | Định dạng dữ liệu giữa JavaScript và các endpoint PHP. |
| Quản lý mã nguồn | Git và GitHub | Lưu trữ mã nguồn, chia nhánh, review và theo dõi công việc. |

### 2.2. Công nghệ lưu trữ được chọn: MySQL

MySQL được chọn thay cho SQLite và JSON vì:

- Phù hợp với dữ liệu có nhiều quan hệ như sinh viên, lớp, môn học, giáo viên, phân công và điểm.
- Hỗ trợ ràng buộc khóa chính, khóa ngoại, giá trị duy nhất và transaction để bảo đảm toàn vẹn dữ liệu.
- Phù hợp hơn khi nhiều giáo viên và sinh viên truy cập hệ thống cùng lúc.
- Dễ kết nối với PHP bằng PDO và prepared statement.
- Thuận tiện cho việc sao lưu, phục hồi và mở rộng sau này.

SQLite không được dùng trong sản phẩm chính. JSON chỉ dùng làm định dạng trao đổi dữ liệu hoặc dữ liệu mẫu, không dùng thay cơ sở dữ liệu.

### 2.3. Kiến trúc đề xuất

```text
Trình duyệt
   │
   ├── HTML + CSS + JavaScript
   │          │
   │          └── fetch / JSON
   │                    │
   └──────────────── PHP backend
                         │
                         └── PDO + prepared statement
                                      │
                                    MySQL
```

Backend nên được chia theo trách nhiệm:

- **Controller/endpoint:** nhận request, kiểm tra đăng nhập và tạo response JSON.
- **Service:** xử lý nghiệp vụ như tính điểm tổng kết, trung bình học kỳ và xếp loại.
- **Repository:** thực hiện truy vấn MySQL bằng PDO.
- **Validation:** kiểm tra dữ liệu bắt buộc, định dạng và giới hạn điểm.

Không tính điểm hoặc kiểm tra quyền chỉ ở JavaScript. Backend PHP phải kiểm tra lại trước khi đọc hoặc thay đổi dữ liệu.

### 2.4. Vai trò của Python

Python không cần thiết trong stack chính vì PHP đã đảm nhận backend. Chỉ sử dụng Python cho script hỗ trợ độc lập nếu nhóm thật sự cần, ví dụ tạo dữ liệu mẫu hoặc kiểm tra dữ liệu; không xây hai backend PHP và Python song song.

## 3. Phân công công việc cho 5 thành viên

Nguyên tắc chung: mỗi thành viên chịu trách nhiệm phát triển, kiểm thử và viết tài liệu ngắn cho module mình phụ trách. Mỗi phần quan trọng phải có ít nhất một thành viên khác review trước khi ghép vào nhánh chính.

### 3.1. Thành viên 1 — Trưởng nhóm, cơ sở dữ liệu và xác thực

**Công việc chính:**

- Theo dõi tiến độ, phân chia task và kiểm soát phạm vi theo `dacTa.md`.
- Thiết kế ERD và schema MySQL.
- Tạo script khởi tạo bảng, khóa ngoại, dữ liệu mẫu và tài khoản thử nghiệm.
- Xây dựng đăng nhập, đăng xuất, đổi mật khẩu và session.
- Xây dựng kiểm tra quyền giáo viên/sinh viên ở backend.
- Quản lý cấu hình kết nối qua biến môi trường; không commit mật khẩu cơ sở dữ liệu.
- Chủ trì tích hợp các module và xử lý xung đột mã nguồn.

**Sản phẩm bàn giao:**

- ERD và tài liệu dữ liệu.
- Schema, migration hoặc script SQL có thể chạy lại.
- Module xác thực và phân quyền.
- Hướng dẫn cài đặt môi trường.

### 3.2. Thành viên 2 — Backend quản lý lớp, sinh viên và giáo viên

**Công việc chính:**

- Xây dựng chức năng thêm, sửa, xóa, tìm kiếm và xem sinh viên.
- Xây dựng chức năng quản lý lớp K10TIN và danh sách sinh viên của lớp.
- Xây dựng chức năng quản lý thông tin giáo viên.
- Validate mã sinh viên, email, số điện thoại và các trường bắt buộc.
- Ngăn trùng mã sinh viên, mã giáo viên và dữ liệu liên quan.
- Viết kiểm thử cho các luồng hợp lệ, dữ liệu sai và truy cập sai quyền.

**Sản phẩm bàn giao:**

- Các endpoint PHP cho sinh viên, lớp và giáo viên.
- Repository truy cập dữ liệu tương ứng.
- Bộ kiểm thử và dữ liệu mẫu của module.

### 3.3. Thành viên 3 — Backend môn học, điểm và thống kê

**Công việc chính:**

- Xây dựng chức năng quản lý môn học và phân công giảng dạy.
- Xây dựng chức năng nhập, sửa và xem điểm.
- Kiểm tra điểm thuộc thang điểm hợp lệ.
- Kiểm tra giáo viên chỉ sửa điểm của môn được phân công.
- Xây dựng logic tính điểm tổng kết, trung bình học kỳ, xếp loại và thứ hạng.
- Xây dựng dữ liệu thống kê theo sinh viên và môn học.
- Viết kiểm thử cho công thức tính điểm và các trường hợp biên.

**Sản phẩm bàn giao:**

- Các endpoint PHP cho môn học, phân công, điểm và thống kê.
- Service tính điểm và xếp loại.
- Bộ kiểm thử nghiệp vụ tính điểm.

### 3.4. Thành viên 4 — Frontend dành cho giáo viên

**Công việc chính:**

- Xây dựng layout chung, thanh điều hướng và component có thể tái sử dụng.
- Xây dựng màn hình đăng nhập và tài khoản cá nhân.
- Xây dựng giao diện quản lý lớp, sinh viên, giáo viên và môn học.
- Xây dựng bảng nhập/sửa điểm cho giáo viên.
- Kết nối giao diện với endpoint PHP bằng `fetch` và JSON.
- Hiển thị đầy đủ trạng thái loading, empty, error, success và disabled.
- Kiểm tra giao diện trên desktop, mobile và thao tác bằng bàn phím.

**Sản phẩm bàn giao:**

- Giao diện và JavaScript cho các luồng của giáo viên.
- Component giao diện dùng chung.
- Biên bản kiểm tra responsive và khả năng truy cập cơ bản.

### 3.5. Thành viên 5 — Frontend sinh viên, kiểm thử và triển khai

**Công việc chính:**

- Xây dựng trang thông tin cá nhân của sinh viên.
- Xây dựng trang xem điểm từng môn, điểm trung bình, xếp loại và thứ hạng.
- Bảo đảm các màn hình sinh viên ở chế độ chỉ xem.
- Phối hợp với thành viên 4 hoàn thiện responsive và thông báo lỗi.
- Lập test case tích hợp cho hai vai trò giáo viên và sinh viên.
- Kiểm thử luồng chính, ghi nhận lỗi và xác minh sau khi sửa.
- Chuẩn bị dữ liệu demo, tài liệu hướng dẫn sử dụng và bản trình bày.
- Thiết lập bản demo frontend tĩnh trên GitHub Pages.

**Sản phẩm bàn giao:**

- Giao diện và JavaScript cho các luồng của sinh viên.
- Danh sách test case, kết quả kiểm thử và danh sách lỗi.
- Bản demo frontend và tài liệu hướng dẫn sử dụng.

## 4. Ma trận phối hợp

| Hạng mục | Phụ trách chính | Người review |
|---|---|---|
| Đặc tả và phạm vi | Thành viên 1 | Cả nhóm |
| Cơ sở dữ liệu | Thành viên 1 | Thành viên 2, 3 |
| Xác thực và phân quyền | Thành viên 1 | Thành viên 3 |
| Lớp, sinh viên, giáo viên | Thành viên 2 | Thành viên 1, 4 |
| Môn học, phân công, điểm | Thành viên 3 | Thành viên 1, 4 |
| Giao diện giáo viên | Thành viên 4 | Thành viên 2, 5 |
| Giao diện sinh viên | Thành viên 5 | Thành viên 3, 4 |
| Kiểm thử tích hợp | Thành viên 5 | Cả nhóm |
| Tích hợp và phát hành | Thành viên 1 | Thành viên 4, 5 |

## 5. Quy trình làm việc trên GitHub

### 5.1. Nhánh đề xuất

- `main`: phiên bản ổn định, có thể demo.
- `develop`: nơi tích hợp các chức năng đã review.
- `feature/<ten-chuc-nang>`: nhánh phát triển từng chức năng.
- `fix/<ten-loi>`: nhánh sửa lỗi.

### 5.2. Quy tắc phối hợp

- Mỗi task có phạm vi và người phụ trách rõ ràng.
- Không làm trực tiếp trên `main`.
- Commit nhỏ, nội dung rõ ràng và không đưa mật khẩu hoặc dữ liệu cá nhân thật lên GitHub.
- Tạo pull request vào `develop`; ít nhất một người khác review trước khi merge.
- Đồng bộ `develop` trước khi bắt đầu task mới để giảm xung đột.
- Chỉ merge `develop` vào `main` khi các luồng chính đã được kiểm thử.

## 6. Kế hoạch thực hiện gợi ý

| Giai đoạn | Công việc | Kết quả |
|---|---|---|
| Tuần 1 | Chốt yêu cầu, wireframe, ERD và schema | Đặc tả ổn định, giao diện phác thảo, database chạy được |
| Tuần 2 | Xác thực, phân quyền, layout chung | Đăng nhập đúng hai vai trò và có khung giao diện |
| Tuần 3 | Module lớp, sinh viên, giáo viên và môn học | Hoàn thành các luồng quản lý dữ liệu nền |
| Tuần 4 | Module điểm, tính toán, báo cáo và giao diện sinh viên | Hoàn thành nghiệp vụ cốt lõi |
| Tuần 5 | Tích hợp frontend-backend, kiểm thử và sửa lỗi | Các luồng chính hoạt động đồng bộ |
| Tuần 6 | Hoàn thiện responsive, bảo mật, tài liệu và demo | Sản phẩm sẵn sàng trình bày |

## 7. Phương án triển khai

### 7.1. GitHub

GitHub được dùng để lưu trữ mã nguồn, phối hợp nhóm, review và quản lý phiên bản.

GitHub Pages chỉ xuất bản các tệp tĩnh như HTML, CSS và JavaScript; GitHub Pages không chạy PHP, Python hoặc MySQL. Vì vậy:

- Có thể đưa bản demo giao diện tĩnh lên GitHub Pages.
- Không đưa mật khẩu, file `.env`, dữ liệu cá nhân thật hoặc bản sao MySQL lên repository công khai.
- Bản full-stack cần một máy chủ hỗ trợ PHP và MySQL; mã nguồn vẫn được quản lý trên GitHub.
- Nếu chỉ được phép dùng GitHub Pages, bản demo phải dùng dữ liệu giả và JSON tĩnh, đồng thời ghi rõ đăng nhập và lưu dữ liệu chỉ là mô phỏng.

Tài liệu tham khảo: [Creating a GitHub Pages site — GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

### 7.2. Môi trường chạy cục bộ

- PHP và MySQL được chạy trong môi trường local phù hợp với máy của nhóm.
- Mỗi thành viên sử dụng file cấu hình riêng cho thông tin kết nối database.
- Repository chỉ cung cấp file cấu hình mẫu không chứa secret.
- Database phải có script tạo cấu trúc và seed dữ liệu giả để mọi thành viên dựng lại được.

## 8. Tiêu chí hoàn thành chung

- Giáo viên chỉ sửa điểm của môn học được phân công.
- Sinh viên chỉ xem thông tin và kết quả của chính mình.
- Dữ liệu đầu vào được kiểm tra ở cả frontend và backend.
- Mật khẩu được băm và truy vấn database dùng prepared statement.
- Công thức tính điểm và xếp loại có kiểm thử.
- Giao diện dùng được trên desktop và mobile.
- Không có secret, dữ liệu cá nhân thật, log debug hoặc file tạm trong repository.
- Có hướng dẫn cài đặt, dữ liệu demo và kịch bản trình bày.

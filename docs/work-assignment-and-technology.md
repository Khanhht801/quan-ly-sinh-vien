# Phân công công việc và gợi ý công nghệ

## 1. Thông tin chung

- **Đề tài:** Website quản lý kết quả học tập
- **Phạm vi:** Lớp K10TIN trong 01 học kỳ
- **Số thành viên:** 05 người
- **Hạn hoàn thành:** 01/12/2026
- **Đặc tả nghiệp vụ:** [`dacTa.md`](dacTa.md)

## 2. Công nghệ đề xuất

### 2.1. Stack chính

| Thành phần | Công nghệ | Mục đích |
|---|---|---|
| Giao diện | HTML5 | Xây dựng cấu trúc trang có ngữ nghĩa và hỗ trợ khả năng truy cập. |
| Trình bày | CSS3 | Xây dựng giao diện responsive cho máy tính và điện thoại. |
| Tương tác phía trình duyệt | JavaScript thuần | Kiểm tra dữ liệu cơ bản, thao tác DOM và bổ sung các tương tác cần thiết. |
| Backend | Python + Flask | Xử lý đăng nhập, phân quyền, nghiệp vụ và các yêu cầu từ frontend. |
| Cơ sở dữ liệu | SQLite | Lưu trữ tài khoản, sinh viên, giáo viên, lớp, môn học và điểm trong một file database. |
| Quản lý mã nguồn | Git và GitHub | Lưu trữ mã nguồn, chia nhánh, review và theo dõi công việc. |

### 2.2. Công nghệ lưu trữ được chọn: SQLite

SQLite được chọn vì:

- Python có sẵn module `sqlite3`, nhóm không cần cài đặt database server hoặc thư viện kết nối riêng.
- Toàn bộ database nằm trong một file, thuận tiện cho việc học, chạy thử và demo trên máy cá nhân.
- Vẫn hỗ trợ bảng, khóa chính, khóa ngoại, giá trị duy nhất và transaction để bảo đảm toàn vẹn dữ liệu.
- Phù hợp với phạm vi một lớp K10TIN trong một học kỳ và lượng truy cập demo không lớn.
- Có thể sử dụng lại kiến thức SQL đã học để tạo bảng, thêm, sửa, xóa và truy vấn dữ liệu.

JSON không được dùng thay database. Khi cần, JSON chỉ dùng cho dữ liệu mẫu hoặc trao đổi một lượng dữ liệu nhỏ với JavaScript.

### 2.3. Kiến trúc đề xuất

```text
Trình duyệt
    │
    ├── Gửi form HTML
    │
    ▼
Python + Flask
    │
    ├── Kiểm tra dữ liệu và quyền truy cập
    ├── Xử lý nghiệp vụ
    └── Đọc/ghi bằng module sqlite3
                 │
                 ▼
              SQLite
                 │
                 ▼
       Flask render trang HTML
```

Luồng xử lý nên được giữ đơn giản:

- **Flask route:** nhận yêu cầu từ trình duyệt và kiểm tra đăng nhập.
- **Hàm nghiệp vụ:** tính điểm tổng kết, trung bình học kỳ và xếp loại.
- **Hàm database:** kết nối SQLite và chạy câu lệnh SQL bằng module `sqlite3`.
- **Template HTML:** hiển thị dữ liệu được Flask truyền vào.
- **Validation:** kiểm tra dữ liệu bắt buộc, định dạng và giới hạn điểm.

Trong giai đoạn đầu, chưa cần tách thành nhiều tầng phức tạp hoặc xây REST API riêng. Chỉ tách file khi một file có quá nhiều trách nhiệm. Không tính điểm hoặc kiểm tra quyền chỉ ở JavaScript; Flask phải kiểm tra lại trước khi đọc hoặc thay đổi dữ liệu.

### 2.4. Vai trò của Python và Flask

Python là ngôn ngữ backend chính của dự án. Flask giúp Python nhận request, định nghĩa route, quản lý session và render các template HTML. Nhóm chỉ sử dụng một backend Python + Flask, không xây thêm backend bằng ngôn ngữ khác.

Để làm việc với SQLite, dự án dùng module `sqlite3` có sẵn trong Python. Nhóm vẫn sử dụng câu lệnh SQL đã học và không cần cài thêm thư viện kết nối database trong giai đoạn đầu.

## 3. Phân công công việc cho 5 thành viên

Nguyên tắc chung: mỗi thành viên chịu trách nhiệm phát triển, kiểm thử và viết tài liệu ngắn cho module mình phụ trách. Mỗi phần quan trọng phải có ít nhất một thành viên khác review trước khi ghép vào nhánh chính.

### 3.1. Thành viên 1 — Trưởng nhóm, cơ sở dữ liệu và xác thực

**Công việc chính:**

- Theo dõi tiến độ, phân chia task và kiểm soát phạm vi theo `dacTa.md`.
- Thiết kế ERD và schema SQLite.
- Tạo script khởi tạo bảng, khóa ngoại, dữ liệu mẫu và tài khoản thử nghiệm.
- Xây dựng đăng nhập, đăng xuất, đổi mật khẩu và session.
- Xây dựng kiểm tra quyền giáo viên/sinh viên ở backend.
- Quản lý khóa bí mật của Flask qua biến môi trường; không commit secret hoặc database chứa dữ liệu thật.
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

- Các Flask route cho sinh viên, lớp và giáo viên.
- Các hàm đọc/ghi SQLite tương ứng.
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

- Các Flask route cho môn học, phân công, điểm và thống kê.
- Các hàm tính điểm và xếp loại.
- Bộ kiểm thử nghiệp vụ tính điểm.

### 3.4. Thành viên 4 — Frontend dành cho giáo viên

**Công việc chính:**

- Xây dựng layout chung, thanh điều hướng và component có thể tái sử dụng.
- Xây dựng màn hình đăng nhập và tài khoản cá nhân.
- Xây dựng giao diện quản lý lớp, sinh viên, giáo viên và môn học.
- Xây dựng bảng nhập/sửa điểm cho giáo viên.
- Kết nối form và template HTML với các Flask route.
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

GitHub Pages chỉ xuất bản các tệp tĩnh như HTML, CSS và JavaScript; GitHub Pages không chạy backend Python hoặc SQLite. Vì vậy:

- Có thể đưa bản demo giao diện tĩnh lên GitHub Pages.
- Không đưa mật khẩu, file `.env`, dữ liệu cá nhân thật hoặc file SQLite chứa dữ liệu thật lên repository công khai.
- Bản full-stack cần một máy chủ hỗ trợ Python và có vùng lưu trữ bền vững cho file SQLite; mã nguồn vẫn được quản lý trên GitHub.
- Nếu chỉ được phép dùng GitHub Pages, bản demo phải dùng dữ liệu giả và JSON tĩnh, đồng thời ghi rõ đăng nhập và lưu dữ liệu chỉ là mô phỏng.

Tài liệu tham khảo: [Creating a GitHub Pages site — GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

### 7.2. Môi trường chạy cục bộ

- Python, Flask và SQLite được chạy trong môi trường local trên máy của nhóm.
- Các thư viện Python được cài trong môi trường ảo `.venv` và liệt kê trong `requirements.txt`.
- Mỗi thành viên tạo file SQLite cục bộ từ cùng một script khởi tạo.
- Repository chỉ cung cấp file cấu hình mẫu không chứa secret.
- Không commit file database cục bộ; repository phải có script tạo cấu trúc và dữ liệu giả để mọi thành viên dựng lại được.

## 8. Tiêu chí hoàn thành chung

- Giáo viên chỉ sửa điểm của môn học được phân công.
- Sinh viên chỉ xem thông tin và kết quả của chính mình.
- Dữ liệu đầu vào được kiểm tra ở cả frontend và backend.
- Mật khẩu được băm và truy vấn database dùng tham số thay vì nối dữ liệu trực tiếp vào câu SQL.
- Công thức tính điểm và xếp loại có kiểm thử.
- Giao diện dùng được trên desktop và mobile.
- Không có secret, dữ liệu cá nhân thật, log debug hoặc file tạm trong repository.
- Có hướng dẫn cài đặt, dữ liệu demo và kịch bản trình bày.

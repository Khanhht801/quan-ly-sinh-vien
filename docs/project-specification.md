# BẢN ĐẶC TẢ WEBSITE QUẢN LÝ SINH VIÊN
## Khoa Công nghệ thông tin

| Thông tin | Chi tiết |
|-----------|----------|
| **Dự án** | Hệ thống Quản lý Sinh viên |
| **Đơn vị** | Khoa Công nghệ thông tin |
| **Phiên bản** | 1.0 |
| **Ngày tạo** | 18/09/2026 |
| **Nhóm thực hiện** | 5 thành viên |
| **Loại tài liệu** | Software Requirements Specification (SRS) |

---

## MỤC LỤC

1. [Giới thiệu dự án](#1-giới-thiệu-dự-án)
2. [Phạm vi xử lý](#2-phạm-vi-xử-lý)
3. [Đối tượng sử dụng](#3-đối-tượng-sử-dụng)
4. [Dữ liệu cần quản lý](#4-dữ-liệu-cần-quản-lý)
5. [Các thao tác nghiệp vụ](#5-các-thao-tác-nghiệp-vụ)
6. [Đặc tả chức năng chi tiết](#6-đặc-tả-chức-năng-chi-tiết)
7. [Sơ đồ Use Case](#7-sơ-đồ-use-case)
8. [Thiết kế cơ sở dữ liệu](#8-thiết-kế-cơ-sở-dữ-liệu)
9. [Yêu cầu phi chức năng](#9-yêu-cầu-phi-chức-năng)
10. [Sơ bộ báo cáo](#10-sơ-bộ-báo-cáo)
11. [Phân công nhóm](#11-phân-công-nhóm-5-thành-viên)
12. [Kế hoạch thực hiện](#12-kế-hoạch-thực-hiện)

---

## 1. GIỚI THIỆU DỰ ÁN

### 1.1. Bối cảnh

Hiện nay, Trường đã có hệ thống quản lý sinh viên cấp **toàn trường** (do Phòng Đào tạo vận hành), đáp ứng được các nghiệp vụ chung như: đăng ký môn học, xem điểm, xét tốt nghiệp,... Tuy nhiên, khi nhìn ở **góc độ quản lý cấp khoa**, hệ thống này còn tồn tại một số hạn chế:

- **Khó tùy biến theo đặc thù ngành:** Mỗi ngành trong khoa CNTT (Công nghệ phần mềm, Trí tuệ nhân tạo, Mạng máy tính,...) có chương trình đào tạo riêng, hệ thống cấp trường ít hỗ trợ các nghiệp vụ chuyên sâu.
- **Thiếu công cụ cho Cố vấn học tập (CVHT):** CVHT của khoa cần theo dõi sát tình hình học tập của từng lớp được phụ trách, nhưng hệ thống hiện tại chưa có dashboard chuyên biệt.
- **Khó tổng hợp số liệu phục vụ họp khoa, họp ban chủ nhiệm:** Mỗi lần cần báo cáo, giáo vụ khoa phải xuất từ hệ thống trường rồi tổng hợp lại bằng Excel, tốn thời gian.
- **Sinh viên CNTT thiếu một "sân chơi" học thuật riêng:** Không có nơi chia sẻ tài liệu, hỏi bài, thảo luận giữa các khóa/ngành trong khoa.

Vì vậy, nhóm quyết định xây dựng một **website quản lý sinh viên quy mô khoa CNTT** — không nhằm thay thế hệ thống cấp trường, mà **bổ sung** các chức năng chuyên biệt phục vụ riêng cho khoa.

> 📌 **Mục đích chính của dự án:** Là một **bài tập môn học (đồ án/đề tài)** của nhóm sinh viên khoa CNTT. Mục tiêu không phải đưa vào vận hành thực tế, mà là để **rèn luyện tư duy phân tích - thiết kế - lập trình - triển khai một hệ thống web hoàn chỉnh**. Do đó, nhóm chú trọng vào việc:
> - Áp dụng đầy đủ quy trình phát triển phần mềm
> - Thử nghiệm các công nghệ mới
> - Có những **điểm sáng tạo, điểm mới** để hệ thống trở nên thú vị hơn so với các bài tập quản lý sinh viên thông thường.

### 1.2. So sánh với hệ thống cấp trường & các hệ thống truyền thống

| Tiêu chí | Hệ thống cấp trường | **Hệ thống quản lý khoa CNTT (đồ án)** |
|----------|---------------------|----------------------------------------|
| Phạm vi | Toàn trường (nhiều khoa) | **Riêng khoa CNTT** |
| Tính chuyên biệt | Tổng quát cho mọi ngành | **Chuyên biệt cho các ngành CNTT** |
| CVHT | Không có dashboard riêng | **Có dashboard riêng cho từng CVHT** |
| Phân tích học tập | Báo cáo cơ bản | **Có cảnh báo học tập sớm (Early Warning)** |
| Tương tác sinh viên | Một chiều (xem điểm) | **Có diễn đàn, chia sẻ tài liệu, đánh giá giảng viên** |
| AI gợi ý | Không | **Không dùng AI, thay bằng chat trực tiếp GV-SV và SV-SV** |
| Tương tác sinh viên | Một chiều (xem điểm) | **Hai chiều: diễn đàn, chat GV-SV, chat SV-SV, đánh giá GV** |
| Công nghệ | Thường là hệ thống cũ | **Hiện đại: Real-time, PWA, Dark mode** |
| Trải nghiệm | Giao diện form cổ điển | **Dashboard trực quan, biểu đồ động, gamification** |

### 1.3. Các điểm mới (Điểm sáng tạo) của hệ thống

Để hệ thống không trở nên "na ná" các bài tập quản lý sinh viên thông thường, nhóm đề xuất tích hợp các **tính năng sáng tạo** sau:

#### 🚀 Nhóm 1: Phân tích thông minh (Python + pandas)

1. **Cảnh báo học tập sớm (Early Warning System)**
   - Tự động phát hiện sinh viên có nguy cơ không đủ điều kiện dự thi kết thúc học phần (dựa trên số buổi vắng, điểm chuyên cần, điểm giữa kỳ)
   - Triển khai bằng **MySQL Trigger** (tự động chạy khi nhập điểm) + **Python script** (chạy định kỳ)
   - Hiển thị danh sách cảnh báo trên Dashboard của CVHT


2. **Phân tích xu hướng điểm (Trend Analytics)**
   - Dùng **Python pandas + matplotlib** phân tích dữ liệu điểm từ MySQL
   - Xuất biểu đồ xu hướng GPA qua các kỳ
   - Top 10 sinh viên có điểm cải thiện vượt bậc
   - Biểu đồ được nhúng vào trang Dashboard (dạng ảnh PNG tĩnh)

#### 💻 Nhóm 2: Tiện ích giao diện

3. **AJAX auto-refresh (Cập nhật không cần reload)**
   - Dùng **JavaScript fetch()** + `setInterval()` để tự động reload một số khu vực
   - Áp dụng cho: tin nhắn chat mới, thông báo điểm mới
   - Không cần WebSocket — đơn giản, phù hợp đồ án

4. **Responsive Design (Bootstrap 5)**
   - Giao diện tương thích Desktop, Tablet, Mobile
   - Dùng class Bootstrap: `container-fluid`, `row`, `col-md-*`

5. **Dark Mode (Tùy chọn)**
   - Nút chuyển đổi Sáng/Tối
   - Lưu lựa chọn vào `localStorage` của trình duyệt
   - Chỉ cần CSS variables — không cần framework phức tạp

#### 👥 Nhóm 3: Tính năng xã hội hóa & học tập

6. **Hệ thống Chat (gộp GV-SV và SV-SV)**
   - **Mục đích:** Một module chat duy nhất, dùng chung cho cả 3 loại cuộc trò chuyện:
     - **Chat 1-1 Giảng viên - Sinh viên:** SV ↔ CVHT/GV bộ môn (hỏi bài, xin tài liệu)
     - **Chat 1-1 Sinh viên - Sinh viên:** SV ↔ SV (cùng lớp/cùng ngành)
     - **Chat nhóm:** Nhóm theo lớp, nhóm tự tạo, nhóm theo môn học
   - **Giao diện thống nhất:** Giống Messenger/Zalo — danh sách cuộc trò chuyện bên trái, khung chat bên phải
   - **Chức năng chung:**
     - Gửi text, emoji, file đính kèm (ảnh, PDF, Word — tối đa 5MB)
     - Hiển thị avatar, họ tên, trạng thái online/offline
     - Hiển thị "đã gửi ✓", "đã nhận ✓✓", "đã đọc ✓✓ (xanh)"
     - Tìm kiếm trong lịch sử chat
     - Lưu lịch sử chat, có thể cuộn lên xem lại
   - **Cập nhật real-time đơn giản:** AJAX polling mỗi 3 giây (dùng chung 1 endpoint)
   - **Triển khai:**
     - Flask route `/api/chat/messages?conv_id=<id>&since=<timestamp>` trả JSON
     - JS dùng chung 1 file `static/js/chat.js` cho mọi loại chat
     - Database dùng chung 1 schema (`Conversation`, `Message`)

7. **Diễn đàn khoa CNTT**
   - Đăng bài theo tag (theo ngành, môn học)
   - Upload tài liệu (ảnh, PDF, Word) — lưu vào `static/uploads/`
   - Upvote/downvote cho câu trả lời (1 user chỉ vote 1 lần/bài)
   - Bình luận nhiều cấp
   - Đánh dấu câu trả lời hay nhất
   - CRUD cơ bản: Tạo, xem, sửa, xóa bài viết

8. **Gamification (Bảng xếp hạng & Huy hiệu)**
   - **Bảng xếp hạng** Top 10 SV có GPA cao nhất (query đơn giản)
   - **Huy hiệu (badges)** sinh viên xuất sắc — hiển thị trên trang cá nhân
   - Một số huy hiệu:
     - 🏆 "Sinh viên xuất sắc" - GPA ≥ 9.0
     - ⭐ "Cải thiện vượt bậc" - Tăng ≥ 1.0 điểm GPA so với kỳ trước
     - 📚 "Đóng góp viên" - Đăng ≥ 10 bài hữu ích trên diễn đàn
     - 💯 "Điểm tuyệt đối" - Đạt 10/10 một môn học

### 1.4. Mục tiêu dự án

Xây dựng một **website quản lý sinh viên cấp khoa CNTT** nhằm:

**Về chức năng:**
- Số hóa dữ liệu sinh viên, lớp, ngành, điểm của khoa CNTT
- Hỗ trợ CVHT theo dõi sát lớp được phụ trách
- Tự động hóa báo cáo phục vụ họp khoa, họp ban chủ nhiệm
- Cung cấp các công cụ tương tác hai chiều giữa khoa và sinh viên

**Về học thuật (mục tiêu chính của đồ án):**
- Áp dụng quy trình phát triển phần mềm hoàn chỉnh (Phân tích → Thiết kế → Code → Test)
- Thực hành làm việc nhóm với Git, phân công task, code review
- Trải nghiệm các công nghệ web hiện đại
- Rèn luyện kỹ năng viết tài liệu, thuyết trình, bảo vệ đồ án

### 1.5. Phạm vi sản phẩm

Hệ thống tập trung vào:
- Quản lý thông tin sinh viên, lớp học, môn học, điểm số trong **Khoa CNTT**
- Các nghiệp vụ quản lý cấp khoa (không trùng lặp với hệ thống cấp trường)
- Các tính năng sáng tạo nêu tại mục 1.3

Hệ thống **không bao gồm:**
- Các chức năng quản lý tài chính, ký túc xá
- Đăng ký môn học trực tuyến (do hệ thống trường đã đảm nhiệm)
- Thanh toán trực tuyến
- Hệ thống LMS riêng biệt

---

## 2. PHẠM VI XỬ LÝ

### 2.1. Phạm vi tổ chức
| Hạng mục | Mô tả |
|----------|-------|
| **Đơn vị áp dụng** | Khoa Công nghệ thông tin |
| **Đơn vị liên quan** | Phòng Đào tạo, Phòng Công tác sinh viên, Cố vấn học tập |
| **Đối tượng quản lý** | Sinh viên đang học tập tại khoa CNTT |
| **Các ngành trong khoa** | Công nghệ thông tin, Kỹ thuật phần mềm, Hệ thống thông tin, Khoa học máy tính, Trí tuệ nhân tạo (tùy thực tế khoa) |

### 2.2. Phạm vi chức năng
Hệ thống xử lý trong **5 phân hệ chính**:

```
┌────────────────────────────────────────────────────────────┐
│              HỆ THỐNG QUẢN LÝ SINH VIÊN                    │
├────────────────────────────────────────────────────────────┤
│  1. Quản lý Sinh viên                                      │
│  2. Quản lý Lớp học & Ngành học                           │
│  3. Quản lý Môn học & Điểm số                              │
│  4. Quản lý Người dùng & Phân quyền                        │
│  5. Thống kê & Xuất báo cáo                                │
└────────────────────────────────────────────────────────────┘


### 2.3. Phạm vi dữ liệu
- Thông tin cá nhân của sinh viên (hồ sơ, liên lạc, quê quán,...)
- Thông tin học tập (lớp, ngành, khóa, chuyên ngành)
- Kết quả học tập (điểm các môn, GPA, xếp loại)
- Thông tin giảng viên, cố vấn học tập
- Dữ liệu phục vụ thống kê và báo cáo

### 2.4. Ngoài phạm vi
Hệ thống **KHÔNG** xử lý:
- Quản lý tài chính, học phí
- Quản lý ký túc xá, hoạt động ngoại khóa
- Thanh toán trực tuyến
- Hệ thống LMS (Learning Management System) riêng biệt

---

## 3. ĐỐI TƯỢNG SỬ DỤNG

Hệ thống phục vụ **4 nhóm người dùng chính**:

| # | Đối tượng | Mô tả | Quyền hạn chính |
|---|-----------|-------|------------------|
| 1 | **Admin (Quản trị viên)** | Nhân viên phòng ban/giáo vụ khoa | Toàn quyền quản lý hệ thống, phân quyền người dùng |
| 2 | **Giáo vụ khoa** | Cán bộ quản lý đào tạo | Cập nhật sinh viên, lớp, môn học, điểm; xuất báo cáo |
| 3 | **Giảng viên** | Giảng viên giảng dạy | Xem danh sách lớp, cập nhật điểm sinh viên |
| 4 | **Sinh viên** | Sinh viên đang theo học | Xem thông tin cá nhân, kết quả học tập của mình |

---

## 4. DỮ LIỆU CẦN QUẢN LÝ

### 4.1. Danh sách các thực thể dữ liệu

Hệ thống cần quản lý **10 thực thể dữ liệu chính**:

#### a) Thông tin Sinh viên (`Student`)
| Trường | Kiểu dữ liệu | Mô tả |
|--------|--------------|-------|
| MaSV (Mã sinh viên) | VARCHAR(10) | Khóa chính, duy nhất |
| HoTen | NVARCHAR(100) | Họ và tên sinh viên |
| NgaySinh | DATE | Ngày tháng năm sinh |
| GioiTinh | BIT/NVARCHAR(10) | Giới tính (Nam/Nữ) |
| CCCD | VARCHAR(12) | Số CMND/CCCD |
| Email | VARCHAR(100) | Email liên hệ |
| SoDienThoai | VARCHAR(15) | Số điện thoại |
| DiaChi | NVARCHAR(255) | Địa chỉ thường trú |
| QueQuan | NVARCHAR(100) | Quê quán |
| MaLop | VARCHAR(10) | FK → Lớp |
| MaNganh | VARCHAR(10) | FK → Ngành |
| KhoaHoc | VARCHAR(10) | Khóa học (VD: K16) |
| TrangThai | NVARCHAR(50) | Đang học / Bảo lưu / Tốt nghiệp / Đã thôi học |
| NgayNhapHoc | DATE | Ngày nhập học |
| AnhDaiDien | VARCHAR(255) | Đường dẫn ảnh đại diện |

#### b) Thông tin Lớp học (`Class`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaLop | VARCHAR(10) | Khóa chính |
| TenLop | NVARCHAR(100) | Tên lớp |
| MaNganh | VARCHAR(10) | FK → Ngành |
| MaCoVan | VARCHAR(10) | FK → Giảng viên (Cố vấn) |
| KhoaHoc | VARCHAR(10) | Khóa học |
| SiSo | INT | Sĩ số lớp |
| TrangThai | BIT | Hoạt động / Ngừng |

#### c) Thông tin Ngành học (`Major`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaNganh | VARCHAR(10) | Khóa chính |
| TenNganh | NVARCHAR(100) | Tên ngành |
| MaKhoa | VARCHAR(10) | FK → Khoa |
| MoTa | NVARCHAR(255) | Mô tả ngành |

#### d) Thông tin Khoa (`Faculty`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaKhoa | VARCHAR(10) | Khóa chính |
| TenKhoa | NVARCHAR(100) | Tên khoa |
| SoDienThoai | VARCHAR(15) | Sĩ số khoa |
| Email | VARCHAR(100) | Email khoa |

#### e) Thông tin Môn học (`Subject`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaMon | VARCHAR(10) | Khóa chính |
| TenMon | NVARCHAR(100) | Tên môn học |
| SoTinChi | INT | Số tín chỉ |
| SoTietLT | INT | Số tiết lý thuyết |
| SoTietTH | INT | Số tiết thực hành |
| MaNganh | VARCHAR(10) | FK → Ngành |
| LoaiMon | NVARCHAR(50) | Bắt buộc / Tự chọn |

#### f) Thông tin Điểm (`Grade`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaDiem | INT | Khóa chính, tự tăng |
| MaSV | VARCHAR(10) | FK → Sinh viên |
| MaMon | VARCHAR(10) | FK → Môn học |
| DiemChuyenCan | FLOAT | Điểm chuyên cần (10%) |
| DiemGiuaKy | FLOAT | Điểm giữa kỳ (20%) |
| DiemCuoiKy | FLOAT | Điểm cuối kỳ (70%) |
| DiemTongKet | FLOAT | Điểm tổng kết (hệ 10) |
| DiemChu | NVARCHAR(5) | A, B+, B, C+, C, D+, D, F |
| HocKy | INT | Học kỳ |
| NamHoc | VARCHAR(10) | Năm học (VD: 2025-2026) |

#### g) Thông tin Giảng viên (`Lecturer`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaGV | VARCHAR(10) | Khóa chính |
| HoTen | NVARCHAR(100) | Họ tên giảng viên |
| Email | VARCHAR(100) | Email |
| SoDienThoai | VARCHAR(15) | Số điện thoại |
| MaKhoa | VARCHAR(10) | FK → Khoa |
| ChuyenMon | NVARCHAR(100) | Chuyên môn |
| HocVi | NVARCHAR(50) | Học vị (TS, ThS,...) |

#### h) Thông tin Người dùng (`User`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaNguoiDung | INT | Khóa chính, tự tăng |
| TenDangNhap | VARCHAR(50) | Tên đăng nhập (unique) |
| MatKhau | VARCHAR(255) | Mật khẩu (mã hóa) |
| Email | VARCHAR(100) | Email |
| VaiTro | NVARCHAR(50) | Admin / Giáo vụ / Giảng viên / Sinh viên |
| MaLienKet | VARCHAR(10) | FK đến Sinh viên / Giảng viên tương ứng |
| TrangThai | BIT | Hoạt động / Khóa |

#### i) Thông tin Học kỳ (`Semester`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaHK | INT | Khóa chính |
| TenHK | NVARCHAR(50) | Tên học kỳ (HK1, HK2, HK hè) |
| NamHoc | VARCHAR(10) | Năm học |
| NgayBatDau | DATE | Ngày bắt đầu |
| NgayKetThuc | DATE | Ngày kết thúc |

#### j) Lịch sử thao tác (`AuditLog`)
| Trường | Kiểu | Mô tả |
|--------|------|-------|
| MaLog | INT | Khóa chính, tự tăng |
| MaNguoiDung | INT | FK → Người dùng |
| HanhDong | NVARCHAR(255) | Mô tả hành động |
| Bang | NVARCHAR(50) | Bảng bị tác động |
| ThoiGian | DATETIME | Thời gian thực hiện |
| DiaChiIP | VARCHAR(45) | IP thực hiện |

### 4.2. Mối quan hệ giữa các thực thể

```
Khoa (1) ──< (N) Ngành (1) ──< (N) Lớp (1) ──< (N) Sinh viên
                                       │
                                       └──< (N) Giảng viên (Cố vấn)

Ngành (1) ──< (N) Môn học
Sinh viên (1) ──< (N) Điểm >── (N) Môn học
Giảng viên (1) ──< (N) Môn học (Giảng dạy)

User (1) ──< (1) Sinh viên | Giảng viên | Giáo vụ
User (1) ──< (N) AuditLog
```

---

## 5. CÁC THAO TÁC NGHIỆP VỤ

### 5.1. Nhóm chức năng **CẬP NHẬT** (CRUD Operations)

Đây là nhóm chức năng cốt lõi cho phép thêm, sửa, xóa và truy vấn dữ liệu.

| STT | Chức năng | Mô tả chi tiết |
|-----|-----------|----------------|
| C1 | Thêm sinh viên mới | Nhập thông tin sinh viên mới nhập học, kiểm tra trùng mã SV |
| C2 | Cập nhật thông tin sinh viên | Sửa thông tin cá nhân, lớp, trạng thái học tập |
| C3 | Xóa sinh viên | Soft delete (chuyển trạng thái) hoặc xóa vĩnh viễn |
| C4 | Thêm/Cập nhật lớp học | Tạo lớp mới, phân công cố vấn |
| C5 | Quản lý ngành học | Thêm ngành mới, cập nhật mô tả ngành |
| C6 | Thêm/Cập nhật môn học | Đăng ký môn học, số tín chỉ, phân loại |
| C7 | Nhập điểm sinh viên | Nhập điểm chuyên cần, giữa kỳ, cuối kỳ |
| C8 | Sửa điểm | Cập nhật điểm, có lý do và log lại |
| C9 | Import dữ liệu hàng loạt | Import danh sách sinh viên từ file Excel/CSV |
| C10 | Quản lý tài khoản | Tạo tài khoản, phân quyền, khóa/mở tài khoản |

### 5.2. Nhóm chức năng **XUẤT DỮ LIỆU** (Export Operations)

Cho phép trích xuất dữ liệu ra các định dạng phổ biến để phục vụ báo cáo, lưu trữ.

| STT | Chức năng | Mô tả chi tiết |
|-----|-----------|----------------|
| X1 | Xuất danh sách sinh viên | Xuất theo lớp, ngành, khóa, trạng thái |
| X2 | Xuất bảng điểm sinh viên | Xuất điểm tổng kết theo cá nhân/lớp/môn |
| X3 | Xuất danh sách lớp | Kèm thông tin cố vấn, sĩ số |
| X4 | Xuất danh sách giảng viên | Theo khoa, chuyên môn |
| X5 | Xuất báo cáo thống kê | Theo biểu mẫu có sẵn |
| X6 | In phiếu điểm | Phiếu điểm cá nhân cho sinh viên |
| X7 | Sao lưu dữ liệu | Backup database định kỳ |

**Định dạng xuất hỗ trợ:**
- 📄 **Excel (.xlsx)** - Phổ biến nhất, dễ xử lý tiếp
- 📄 **PDF (.pdf)** - Dùng cho báo cáo chính thức
- 📄 **CSV (.csv)** - Dữ liệu thô, tích hợp hệ thống khác
- 📄 **Word (.docx)** - Mẫu biên bản, quyết định

### 5.3. Nhóm chức năng **TỔNG HỢP** (Statistics & Reports)

Cho phép tổng hợp, phân tích dữ liệu phục vụ công tác quản lý và ra quyết định.

| STT | Chức năng | Mô tả chi tiết |
|-----|-----------|----------------|
| T1 | Thống kê tổng số sinh viên | Tổng số theo khoa/ngành/khóa/trạng thái |
| T2 | Thống kê sĩ số từng lớp | Bảng sĩ số các lớp, so sánh giữa các lớp |
| T3 | Thống kê kết quả học tập | GPA trung bình toàn khoa, theo lớp, theo ngành |
| T4 | Thống kê xếp loại | Phân loại học lực (Xuất sắc, Giỏi, Khá, TB, Yếu) |
| T5 | Thống kê tỷ lệ đậu/rớt môn | Theo môn học, theo học kỳ |
| T6 | Báo cáo sinh viên theo giới tính | Biểu đồ phân bố nam/nữ theo ngành |
| T7 | Báo cáo sinh viên theo quê quán | Phân bố sinh viên theo tỉnh thành |
| T8 | Dashboard tổng quan | Trang tổng quan với các biểu đồ trực quan |
| T9 | Báo cáo biến động sinh viên | Theo dõi nhập học, bảo lưu, thôi học theo thời gian |
| T10 | Tìm kiếm & Lọc nâng cao | Tìm theo nhiều tiêu chí kết hợp |

### 5.4. Tổng hợp các Use Case

| Mã | Use Case | Actor chính |
|----|----------|-------------|
| UC01 | Đăng nhập hệ thống | Tất cả |
| UC02 | Quản lý sinh viên (CRUD) | Admin, Giáo vụ |
| UC03 | Quản lý lớp học (CRUD) | Admin, Giáo vụ |
| UC04 | Quản lý ngành/khoa (CRUD) | Admin |
| UC05 | Quản lý môn học (CRUD) | Admin, Giáo vụ |
| UC06 | Nhập/Sửa điểm | Giáo vụ, Giảng viên |
| UC07 | Xem điểm cá nhân | Sinh viên |
| UC08 | Tìm kiếm sinh viên | Tất cả |
| UC09 | Xuất danh sách sinh viên | Admin, Giáo vụ |
| UC10 | Xuất bảng điểm | Admin, Giáo vụ, Giảng viên, Sinh viên |
| UC11 | Thống kê tổng hợp | Admin, Giáo vụ |
| UC12 | Xem báo cáo Dashboard | Admin, Giáo vụ, CVHT |
| UC13 | Quản lý người dùng | Admin |
| UC14 | Phân quyền | Admin |
| UC15 | Import dữ liệu từ Excel | Admin, Giáo vụ |
| **UC16** | **Cảnh báo học tập sớm (Early Warning)** | **CVHT, Giáo vụ** |
| **UC17** | **Hệ thống Chat (gộp GV-SV, SV-SV, nhóm)** | **GV, SV, Giáo vụ** |
| **UC18** | **Diễn đàn khoa CNTT** | **Sinh viên, Giảng viên** |
| **UC19** | **Phân tích xu hướng điểm (Python pandas)** | **Giáo vụ, CVHT** |
| **UC20** | **Bảng xếp hạng & Huy hiệu (Gamification)** | **Tất cả** |
| **UC21** | **AJAX auto-refresh (chat, thông báo)** | **Tất cả** |

### 5.5. Đặc tả tóm tắt các Use Case sáng tạo

#### UC16 - Cảnh báo học tập sớm (Early Warning System)

**Actor chính:** CVHT, Giáo vụ
**Mô tả:** Tự động phát hiện sinh viên có nguy cơ học yếu dựa trên các chỉ số: điểm chuyên cần, điểm giữa kỳ, số buổi vắng, kết quả các học kỳ trước.

**Ngưỡng cảnh báo (rule-based):**
| Chỉ số | Ngưỡng | Mức cảnh báo |
|--------|-------|--------------|
| Điểm chuyên cần < 5 | Vàng | Cảnh báo |
| Điểm chuyên cần < 3 | Đỏ | Cảnh báo nghiêm trọng |
| Điểm giữa kỳ < 4 | Vàng | Cảnh báo |
| GPA học kỳ trước < 5 | Vàng | Theo dõi |
| Vắng > 20% số buổi | Đỏ | Cảnh báo nghiêm trọng |

**Luồng chính:**
1. Hệ thống tự động chạy job mỗi ngày (cron job)
2. Phân tích dữ liệu điểm, điểm danh
3. Sinh viên vi phạm ngưỡng → Đánh dấu cảnh báo
4. Gửi thông báo cho CVHT phụ trách
5. Gửi email/thông báo cho sinh viên kèm lời khuyên

#### UC17 - Hệ thống Chat (gộp GV-SV, SV-SV & nhóm)

**Actor chính:** Giảng viên (CVHT, GV bộ môn), Sinh viên, Giáo vụ
**Mô tả:** Hệ thống chat thống nhất, dùng chung cho mọi loại cuộc trò chuyện trong hệ thống: giữa GV với SV, giữa SV với SV, và chat nhóm (theo lớp, theo nhóm học tập, theo môn học). Tất cả dùng chung 1 giao diện, 1 cơ chế AJAX polling, 1 schema database.

**3 loại cuộc trò chuyện:**

**a) Chat Giảng viên - Sinh viên (1-1):**
- Sinh viên ↔ CVHT hoặc GV bộ môn
- Mục đích: Hỏi bài, xin tài liệu, trao đổi vấn đề học tập
- SV chọn GV từ danh sách (CVHT + GV dạy lớp/môn của SV)
- Phân loại cuộc hội thoại theo môn học/lớp

**b) Chat Sinh viên - Sinh viên (1-1):**
- Hai SV cùng lớp/cùng ngành nhắn tin riêng
- Hiển thị profile người chat (avatar, lớp, ngành)
- Tìm kiếm bạn theo Mã SV, họ tên, lớp

**c) Chat nhóm:**
- Nhóm theo lớp (mỗi lớp có 1 nhóm chat tự động khi tạo lớp)
- Nhóm tự tạo (SV tạo nhóm học tập)
- Nhóm theo môn học (SV cùng đăng ký môn)
- Thêm/xóa thành viên, đổi tên nhóm
- Vai trò: Trưởng nhóm, thành viên

**Chức năng chung cho mọi loại chat:**
- **Giao diện:** Giống Messenger/Zalo — danh sách cuộc trò chuyện bên trái, khung chat bên phải
- **Gửi tin nhắn:** Text, emoji, file đính kèm (ảnh, PDF, Word — tối đa 5MB)
- **Hiển thị thông tin:** Avatar, họ tên, trạng thái online/offline
- **Trạng thái tin nhắn:** Đã gửi ✓, Đã nhận ✓✓, Đã đọc ✓✓ (xanh)
- **Lưu lịch sử chat**, có thể tìm kiếm theo từ khóa
- **Cập nhật real-time đơn giản:** AJAX polling mỗi 3 giây (không cần WebSocket)
- **Thông báo:** Badge đỏ trên menu khi có tin nhắn mới

**Luồng chính (chat 1-1):**
1. User đăng nhập → Vào mục "Tin nhắn"
2. Hệ thống hiển thị danh sách cuộc trò chuyện (cũ + mới)
3. User chọn cuộc trò chuyện → Mở khung chat
4. Nhập nội dung + (tùy chọn) file đính kèm → Nhấn "Gửi"
5. Tin nhắn lưu DB, hiển thị ngay trong khung chat
6. JS tự động gọi AJAX mỗi 3 giây để lấy tin nhắn mới
7. Khi đối phương phản hồi → User thấy tin nhắn mới xuất hiện + badge đỏ

**Luồng tạo nhóm chat:**
1. SV vào mục "Nhóm chat" → Nhấn "Tạo nhóm mới"
2. Đặt tên nhóm, chọn thành viên (từ danh sách bạn cùng lớp)
3. Hệ thống tạo phòng chat, thêm thành viên
4. Cả nhóm nhận thông báo mời vào nhóm
5. Bắt đầu chat nhóm

**Dữ liệu cần lưu (Database):**
- Bảng `Conversation` (Cuộc trò chuyện):
  - `MaCV` INT PK AUTO_INCREMENT
  - `LoaiChat` ENUM('GV_SV', 'SV_SV', 'NHOM') — phân biệt loại
  - `TenNhom` NVARCHAR(100) NULL — chỉ dùng khi LoaiChat = 'NHOM'
  - `MaMonHoc` VARCHAR(10) NULL FK — phân loại theo môn (cho chat GV-SV)
  - `NgayTao` DATETIME
- Bảng `ConversationMember` (Thành viên cuộc trò chuyện):
  - `MaTV` INT PK
  - `MaCV` INT FK → Conversation
  - `MaNguoiDung` INT FK → User (MaNguoiDung)
  - `VaiTro` ENUM('TRUONG_NHOM', 'THANH_VIEN') — chỉ dùng cho nhóm
- Bảng `Message` (Tin nhắn):
  - `MaTinNhan` INT PK AUTO_INCREMENT
  - `MaCV` INT FK → Conversation
  - `MaNguoiGui` INT FK → User
  - `NoiDung` TEXT
  - `FileKem` VARCHAR(255) NULL — đường dẫn file
  - `ThoiGian` DATETIME
  - `TrangThai` ENUM('DA_GUI', 'DA_NHAN', 'DA_DOC')

**Công nghệ triển khai:**
- **Backend (Flask):**
  - Route `/api/chat/conversations` — lấy danh sách cuộc trò chuyện của user
  - Route `/api/chat/messages?conv_id=<id>&since=<timestamp>` — lấy tin nhắn mới (polling)
  - Route `/api/chat/send` (POST) — gửi tin nhắn mới
  - Route `/api/chat/upload` (POST) — upload file đính kèm
- **Frontend (JavaScript):**
  - File `static/js/chat.js` — dùng chung cho mọi loại chat
  - `setInterval(fetchMessages, 3000)` — polling mỗi 3 giây
  - Hiển thị badge đỏ khi có tin nhắn chưa đọc
- **Lưu file:** `static/uploads/chat/`

#### UC18 - Diễn đàn khoa CNTT

**Actor chính:** Sinh viên, Giảng viên
**Mô tả:** Nơi sinh viên các khóa/ngành trong khoa chia sẻ tài liệu, hỏi bài, thảo luận.

**Chức năng:**
- Đăng bài theo tag (theo ngành, môn học)
- Upload tài liệu (PDF, DOCX, hình ảnh)
- Upvote/downvote cho câu trả lời
- Đánh dấu câu trả lời hay nhất
- Bình luận nhiều cấp

#### UC21 - Gamification (Bảng xếp hạng & Huy hiệu)

**Actor chính:** Tất cả
**Mô tả:** Hệ thống huy hiệu và bảng xếp hạng khuyến khích sinh viên học tập.

**Một số huy hiệu (badge):**
- 🏆 "Sinh viên xuất sắc" - GPA ≥ 9.0
- ⭐ "Cải thiện vượt bậc" - Tăng ≥ 1.0 điểm GPA so với kỳ trước
- 📚 "Chăm chỉ" - Điểm chuyên cần ≥ 9.5 cả năm
- 🤝 "Đóng góp viên" - Đăng ≥ 10 bài hữu ích trên diễn đàn
- 💯 "Điểm tuyệt đối" - Đạt 10/10 một môn học

---

## 6. ĐẶC TẢ CHỨC NĂNG CHI TIẾT

### 6.1. UC02 - Quản lý Sinh viên

**Actor chính:** Admin, Giáo vụ
**Mô tả:** Cho phép thêm, sửa, xóa và xem thông tin sinh viên.

**Luồng chính (Thêm sinh viên):**
1. Người dùng chọn "Thêm sinh viên mới"
2. Hệ thống hiển thị form nhập liệu với các trường:
   - Mã SV (tự động sinh hoặc nhập tay)
   - Họ tên, Ngày sinh, Giới tính
   - CCCD, Email, SĐT
   - Địa chỉ, Quê quán
   - Lớp, Ngành, Khóa
   - Trạng thái (mặc định: Đang học)
3. Người dùng nhập thông tin và nhấn "Lưu"
4. Hệ thống kiểm tra:
   - Mã SV không được trùng
   - Email đúng định dạng
   - CCCD đúng định dạng (12 số)
   - SĐT đúng định dạng (10 số)
5. Lưu thành công → Hiển thị thông báo
6. Hệ thống ghi log thao tác

**Luồng thay thế:**
- 4a. Mã SV đã tồn tại → Hiển thị thông báo lỗi, yêu cầu nhập lại
- 4b. Email/CCCD không hợp lệ → Highlight trường lỗi

**Điều kiện tiên quyết:** Đã đăng nhập với vai trò Admin hoặc Giáo vụ.

### 6.2. UC06 - Nhập/Sửa điểm

**Actor chính:** Giáo vụ, Giảng viên
**Mô tả:** Cho phép nhập và cập nhật điểm cho sinh viên.

**Công thức tính điểm:**
```
Điểm tổng kết = (Chuyên cần × 0.1) + (Giữa kỳ × 0.2) + (Cuối kỳ × 0.7)
```

**Quy đổi điểm chữ:**
| Điểm tổng kết | Điểm chữ |
|---------------|----------|
| 9.0 - 10.0 | A |
| 8.5 - 8.9 | B+ |
| 8.0 - 8.4 | B |
| 7.0 - 7.9 | C+ |
| 6.5 - 6.9 | C |
| 5.5 - 6.4 | D+ |
| 5.0 - 5.4 | D |
| < 5.0 | F (Trượt) |

**Luồng chính:**
1. Chọn lớp + môn học + học kỳ
2. Hệ thống hiển thị danh sách sinh viên
3. Nhập điểm 3 cột (CC, GK, CK)
4. Hệ thống tự động tính tổng kết và quy đổi điểm chữ
5. Lưu và xác nhận

### 6.3. UC09 - Xuất danh sách sinh viên

**Actor chính:** Admin, Giáo vụ
**Mô tả:** Xuất danh sách sinh viên theo các tiêu chí lọc.

**Các tiêu chí lọc:**
- Lớp (chọn 1 hoặc nhiều)
- Ngành
- Khóa học
- Trạng thái (Đang học / Bảo lưu / Tốt nghiệp / Thôi học)
- Giới tính
- Quê quán

**Các trường xuất:** STT, Mã SV, Họ tên, Ngày sinh, Giới tính, Lớp, Ngành, Email, SĐT, Trạng thái.

**Định dạng xuất:** Excel (.xlsx), PDF (.pdf), CSV (.csv), Word (.docx).

### 6.4. UC11 - Thống kê tổng hợp

**Actor chính:** Admin, Giáo vụ
**Mô tả:** Tạo các báo cáo thống kê phục vụ quản lý.

**Các báo cáo chính:**

1. **Báo cáo tổng quan khoa:**
   - Tổng số sinh viên
   - Phân bố theo ngành
   - Phân bố theo khóa
   - Phân bố theo giới tính
   - Tỷ lệ các trạng thái

2. **Báo cáo kết quả học tập:**
   - GPA trung bình toàn khoa
   - GPA theo ngành, theo khóa
   - Tỷ lệ xếp loại học lực
   - Top 10 sinh viên xuất sắc
   - Danh sách sinh viên có điểm dưới trung bình

3. **Báo cáo biến động:**
   - Sinh viên nhập học theo năm
   - Sinh viên bảo lưu/thôi học theo học kỳ
   - Tỷ lệ tốt nghiệp đúng hạn

4. **Biểu đồ trực quan:**
   - Biểu đồ cột (Bar chart)
   - Biểu đồ tròn (Pie chart)
   - Biểu đồ đường (Line chart) theo thời gian

### 6.5. UC15 - Import dữ liệu từ Excel

**Actor chính:** Admin, Giáo vụ
**Mô tả:** Import hàng loạt sinh viên từ file Excel.

**Quy trình:**
1. Tải file mẫu Excel
2. Chuẩn bị dữ liệu theo template
3. Upload file lên hệ thống
4. Hệ thống validate:
   - Cấu trúc cột đúng mẫu
   - Mã SV không trùng với DB
   - Mã lớp tồn tại
5. Hiển thị preview dữ liệu
6. Xác nhận Import
7. Báo cáo kết quả (thành công/thất bại)

---

## 7. SƠ ĐỒ USE CASE

### 7.1. Sơ đồ tổng quan

```
                    ┌─────────────────────────────────────────┐
                    │     HỆ THỐNG QUẢN LÝ SINH VIÊN         │
                    └─────────────────────────────────────────┘
                                       │
        ┌──────────────┬───────────────┼───────────────┬──────────────┐
        │              │               │               │              │
        ▼              ▼               ▼               ▼              ▼
  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
  │  QL Sinh │   │  QL Lớp  │   │  QL Điểm │   │  QL User │   │ Thống kê │
  │   viên   │   │  Ngành   │   │  Môn học │   │ Phân quyền│   │ Báo cáo  │
  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
   C1, C2, C3     C4, C5, C6     C7, C8, C9     C10, UC14     T1-T10, X1-X7
```

### 7.2. Actor - Use Case Matrix

| Use Case | Admin | Giáo vụ | CVHT | Giảng viên | Sinh viên |
|----------|:-----:|:-------:|:----:|:----------:|:---------:|
| UC01 - Đăng nhập | ✓ | ✓ | ✓ | ✓ | ✓ |
| UC02 - QL Sinh viên | ✓ | ✓ | | | |
| UC03 - QL Lớp học | ✓ | ✓ | | | |
| UC04 - QL Ngành/Khoa | ✓ | ✓ | | | |
| UC05 - QL Môn học | ✓ | ✓ | | | |
| UC06 - Nhập/Sửa điểm | ✓ | ✓ | | ✓ | |
| UC07 - Xem điểm cá nhân | ✓ | ✓ | ✓ | ✓ | ✓ |
| UC08 - Tìm kiếm SV | ✓ | ✓ | ✓ | ✓ | ✓ |
| UC09 - Xuất DS SV | ✓ | ✓ | ✓ | | |
| UC10 - Xuất bảng điểm | ✓ | ✓ | ✓ | ✓ | ✓ |
| UC11 - Thống kê | ✓ | ✓ | ✓ | | |
| UC12 - Dashboard | ✓ | ✓ | ✓ | | |
| UC13 - QL User | ✓ | | | | |
| UC14 - Phân quyền | ✓ | | | | |
| UC15 - Import Excel | ✓ | ✓ | | | |
| **UC16 - Cảnh báo học tập sớm** | ✓ | ✓ | ✓ | | |
| **UC17 - Hệ thống Chat (gộp GV-SV & SV-SV)** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC18 - Diễn đàn khoa** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC19 - Phân tích xu hướng** | ✓ | ✓ | ✓ | | |
| **UC20 - Bảng xếp hạng & Huy hiệu** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC21 - AJAX auto-refresh** | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 8. THIẾT KẾ CƠ SỞ DỮ LIỆU

### 8.1. ERD (Mô tả bằng sơ đồ)

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│  KHOA    │ 1     N │  NGANH   │ 1     N │   LOP    │
│──────────│─────────│──────────│─────────│──────────│
│ MaKhoa   │         │ MaNganh  │         │ MaLop    │
│ TenKhoa  │         │ TenNganh │         │ TenLop   │
│ SDT      │         │ MaKhoa   │         │ MaNganh  │
│ Email    │         │ MoTa     │         │ MaCoVan  │
└──────────┘         └──────────┘         │ KhoaHoc  │
                                           │ SiSo     │
                                           └──────────┘
                                                 │
                       ┌──────────┐              │ 1
                       │ MONHOC   │              │
                       │──────────│              │
                       │ MaMon    │              │
                       │ TenMon   │              │
                       │ SoTinChi │              │
                       │ MaNganh  │              │
                       │ LoaiMon  │              │
                       └──────────┘              │
                              │                  │
                              │                  │
┌──────────┐         ┌──────────┐         ┌────▼─────┐
│  DIEM    │ N     1 │ SINHVIEN │ N     1 │  GV_CV   │
│──────────│─────────│──────────│─────────│──────────│
│ MaDiem   │         │ MaSV     │         │ MaGV     │
│ MaSV     │         │ HoTen    │         │ HoTen    │
│ MaMon    │         │ NgaySinh │         │ Email    │
│ DiemCC   │         │ GioiTinh │         │ SDT      │
│ DiemGK   │         │ CCCD     │         │ MaKhoa   │
│ DiemCK   │         │ MaLop    │         │ ChuyenMon│
│ DiemTK   │         │ MaNganh  │         │ HocVi    │
│ DiemChu  │         │ KhoaHoc  │         └──────────┘
│ HocKy    │         │ TrangThai│
│ NamHoc   │         └──────────┘
└──────────┘
```

### 8.2. Script SQL tạo bảng (Mẫu)

```sql
-- Bảng Khoa
CREATE TABLE Khoa (
    MaKhoa VARCHAR(10) PRIMARY KEY,
    TenKhoa NVARCHAR(100) NOT NULL,
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100)
);

-- Bảng Ngành
CREATE TABLE Nganh (
    MaNganh VARCHAR(10) PRIMARY KEY,
    TenNganh NVARCHAR(100) NOT NULL,
    MaKhoa VARCHAR(10) NOT NULL,
    MoTa NVARCHAR(255),
    FOREIGN KEY (MaKhoa) REFERENCES Khoa(MaKhoa)
);

-- Bảng Lớp
CREATE TABLE Lop (
    MaLop VARCHAR(10) PRIMARY KEY,
    TenLop NVARCHAR(100) NOT NULL,
    MaNganh VARCHAR(10) NOT NULL,
    MaCoVan VARCHAR(10),
    KhoaHoc VARCHAR(10),
    SiSo INT DEFAULT 0,
    TrangThai BIT DEFAULT 1,
    FOREIGN KEY (MaNganh) REFERENCES Nganh(MaNganh)
);

-- Bảng Sinh viên
CREATE TABLE SinhVien (
    MaSV VARCHAR(10) PRIMARY KEY,
    HoTen NVARCHAR(100) NOT NULL,
    NgaySinh DATE,
    GioiTinh NVARCHAR(10),
    CCCD VARCHAR(12) UNIQUE,
    Email VARCHAR(100),
    SoDienThoai VARCHAR(15),
    DiaChi NVARCHAR(255),
    QueQuan NVARCHAR(100),
    MaLop VARCHAR(10),
    MaNganh VARCHAR(10),
    KhoaHoc VARCHAR(10),
    TrangThai NVARCHAR(50) DEFAULT N'Đang học',
    NgayNhapHoc DATE,
    FOREIGN KEY (MaLop) REFERENCES Lop(MaLop),
    FOREIGN KEY (MaNganh) REFERENCES Nganh(MaNganh)
);

-- Bảng Điểm
CREATE TABLE Diem (
    MaDiem INT IDENTITY(1,1) PRIMARY KEY,
    MaSV VARCHAR(10) NOT NULL,
    MaMon VARCHAR(10) NOT NULL,
    DiemChuyenCan FLOAT,
    DiemGiuaKy FLOAT,
    DiemCuoiKy FLOAT,
    DiemTongKet AS (DiemChuyenCan*0.1 + DiemGiuaKy*0.2 + DiemCuoiKy*0.7),
    DiemChu NVARCHAR(5),
    HocKy INT,
    NamHoc VARCHAR(10),
    FOREIGN KEY (MaSV) REFERENCES SinhVien(MaSV),
    FOREIGN KEY (MaMon) REFERENCES MonHoc(MaMon)
);
```

---

## 9. YÊU CẦU PHI CHỨC NĂNG

### 9.1. Yêu cầu về hiệu năng
- Thời gian phản hồi trang ≤ 3 giây với 1000 records
- Hỗ trợ đồng thời ≥ 50 người dùng
- Tối ưu query database với index trên các trường thường xuyên tìm kiếm

### 9.2. Yêu cầu bảo mật
- Mật khẩu mã hóa bằng **bcrypt** hoặc **SHA-256**
- Sử dụng **HTTPS** cho mọi request
- Phân quyền chi tiết theo vai trò (RBAC)
- Session timeout sau 30 phút không hoạt động
- Log lại các thao tác quan trọng (Audit Log)
- Chống SQL Injection, XSS, CSRF

### 9.3. Yêu cầu giao diện
- Giao diện thân thiện, dễ sử dụng (UX/UI chuẩn)
- Responsive trên các thiết bị (Desktop, Tablet, Mobile)
- Hỗ trợ tiếng Việt có dấu
- Thông báo rõ ràng cho mọi thao tác

### 9.4. Yêu cầu khả dụng
- Uptime ≥ 99%
- Có cơ chế backup dữ liệu định kỳ (mỗi ngày)
- Có khả năng phục hồi sau sự cố

### 9.5. Yêu cầu công nghệ (CĐ Lạng Sơn - Nhóm 5 SV)

> 💡 **Lưu ý:** Công nghệ sử dụng **chỉ dựa trên những môn đã được học** tại trường: C++, C#, MySQL, Phân tích thiết kế (StarUML), HTML/CSS/JS, Python, PHP.

| Thành phần | Công nghệ | Lý do chọn |
|------------|-----------|-----------|
| **Backend** | **Python (Flask)** | Ngôn ngữ chính, cú pháp rõ ràng, dễ debug |
| **Web Framework** | Flask + Jinja2 Template | Nhẹ, phù hợp đồ án CĐ, không yêu cầu framework phức tạp |
| **Database** | **MySQL** | Đã học trong môn Hệ quản trị CSDL |
| **Kết nối DB** | `mysql-connector-python` hoặc `PyMySQL` | Thư viện chuẩn, dễ cài qua pip |
| **Frontend** | HTML5, CSS3, JavaScript (thuần) | Đã học, không phụ thuộc framework nặng |
| **CSS Framework** | Bootstrap 5 (qua CDN) | Template đẹp, tiết kiệm thời gian code UI |
| **Biểu đồ** | Chart.js (qua CDN) | Thư viện JS phổ biến, vẽ biểu đồ đẹp |
| **Phân tích dữ liệu** | Python: pandas, matplotlib | Làm bài toán "Phân tích xu hướng điểm" → sinh biểu đồ |
| **Mô hình hóa** | StarUML | Đã học trong môn Phân tích thiết kế hệ thống |
| **Quản lý phiên bản** | Git + GitHub | Quản lý source code nhóm |
| **Môi trường chạy** | XAMPP (MySQL) + Python 3.10+ + VS Code | Cài đặt đơn giản, miễn phí |

### 9.6. Cấu trúc dự án Python Flask

```
QLSV/
├── app.py                       # File chính, khởi tạo Flask app
├── config.py                    # Cấu hình (DB connection, secret key)
├── requirements.txt             # Danh sách thư viện cần cài
├── README.md                    # Hướng dẫn cài đặt
│
├── database/
│   ├── qlsv.sql                 # Script tạo database
│   └── seed_data.sql            # Dữ liệu mẫu
│
├── models/                      # Tầng xử lý dữ liệu (Database Access Layer)
│   ├── __init__.py
│   ├── database.py              # Kết nối MySQL (Singleton)
│   ├── sinhvien_model.py        # Query cho bảng SinhVien
│   ├── lop_model.py
│   ├── monhoc_model.py
│   ├── diem_model.py
│   ├── user_model.py
│   ├── chat_model.py            # Model cho tính năng chat
│   └── forum_model.py           # Model cho diễn đàn
│
├── routes/                      # Tầng xử lý request (Controller)
│   ├── __init__.py
│   ├── auth_routes.py           # /login, /logout, /register
│   ├── sinhvien_routes.py       # /sinhvien, /sinhvien/them, /sinhvien/sua/...
│   ├── lop_routes.py
│   ├── diem_routes.py
│   ├── thongke_routes.py        # /thongke, /bieudo
│   ├── chat_routes.py           # /chat, /chat/<id>
│   ├── forum_routes.py          # /forum, /forum/post/<id>
│   └── api_routes.py            # API JSON cho AJAX (chat, search,...)
│
├── templates/                   # Jinja2 templates (HTML)
│   ├── base.html                # Layout chung
│   ├── login.html
│   ├── dashboard.html
│   ├── sinhvien/
│   │   ├── danhsach.html
│   │   ├── them.html
│   │   └── sua.html
│   ├── diem/
│   ├── chat/
│   └── forum/
│
├── static/                      # File tĩnh
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── chat.js              # JS cho chat polling
│   │   └── forum.js
│   ├── img/
│   └── uploads/                 # Avatar, file đính kèm
│
├── utils/                       # Hàm tiện ích
│   ├── __init__.py
│   ├── auth.py                  # Decorator @login_required, @role_required
│   ├── helpers.py               # Hàm phụ: format date, tính GPA, quy đổi điểm chữ
│   ├── export_excel.py          # Xuất Excel bằng openpyxl
│   └── export_pdf.py            # Xuất PDF bằng reportlab
│
├── analytics/                   # Phân tích dữ liệu (dùng pandas)
│   ├── phan_tich_diem.py        # Phân tích xu hướng, cảnh báo sớm
│   └── generate_chart.py        # Sinh biểu đồ matplotlib
│
└── tests/                       # Kiểm thử
    ├── test_models.py
    ├── test_routes.py
    └── test_analytics.py
```

### 9.7. Thư viện Python cần cài đặt (`requirements.txt`)

```txt
Flask==3.0.0
Flask-Login==0.6.3
PyMySQL==1.1.0
Werkzeug==3.0.1
openpyxl==3.1.2          # Xuất Excel
reportlab==4.0.7         # Xuất PDF
pandas==2.1.4            # Phân tích dữ liệu
matplotlib==3.8.2        # Vẽ biểu đồ tĩnh
python-dotenv==1.0.0
```

### 9.8. Code mẫu - Kết nối MySQL từ Python

```python
# models/database.py
import pymysql
from contextlib import contextmanager

class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connection = pymysql.connect(
                host='localhost',
                user='root',
                password='',
                database='qlsv',
                charset='utf8mb4',
                cursorclass=pymysql.cursors.DictCursor
            )
        return cls._instance

    @contextmanager
    def cursor(self):
        try:
            with self.connection.cursor() as cur:
                yield cur
            self.connection.commit()
        except Exception as e:
            self.connection.rollback()
            raise e

def get_db():
    return Database()
```

### 9.9. Code mẫu - Một Route Flask

```python
# routes/sinhvien_routes.py
from flask import Blueprint, render_template, request, redirect, url_for
from models.sinhvien_model import SinhVienModel
from utils.auth import login_required, role_required

sinhvien_bp = Blueprint('sinhvien', __name__, url_prefix='/sinhvien')

@sinhvien_bp.route('/')
@login_required
def danh_sach():
    """Trang danh sách sinh viên"""
    keyword = request.args.get('keyword', '')
    page = int(request.args.get('page', 1))
    per_page = 20

    model = SinhVienModel()
    sinh_vien_list, total = model.search(keyword, page, per_page)

    return render_template('sinhvien/danhsach.html',
                          sinh_vien_list=sinh_vien_list,
                          total=total,
                          page=page,
                          total_pages=(total + per_page - 1) // per_page)

@sinhvien_bp.route('/them', methods=['GET', 'POST'])
@role_required(['admin', 'giaovu'])
def them():
    if request.method == 'POST':
        data = {
            'MaSV': request.form['MaSV'],
            'HoTen': request.form['HoTen'],
            # ... các trường khác
        }
        SinhVienModel().create(data)
        return redirect(url_for('sinhvien.danh_sach'))
    return render_template('sinhvien/them.html')
```

---

## 10. SƠ BỘ BÁO CÁO VỀ CÁC YÊU CẦU

### 10.1. Tổng hợp yêu cầu chức năng

| Nhóm | Số lượng UC | Mức độ ưu tiên |
|------|-------------|----------------|
| Quản lý Sinh viên | 3 (C1, C2, C3) | Cao |
| Quản lý Lớp & Ngành | 2 (C4, C5) | Cao |
| Quản lý Môn học | 1 (C6) | Trung bình |
| Quản lý Điểm | 2 (C7, C8) | Cao |
| Import/Export | 2 (C9, X1-X7) | Trung bình |
| Quản lý User | 3 (UC13, UC14, UC01) | Cao |
| Thống kê Báo cáo | 10 (T1-T10) | Trung bình |
| **Tổng** | **~30 chức năng** | |

### 10.2. Đánh giá tính khả thi

| Tiêu chí | Đánh giá | Ghi chú |
|----------|----------|---------|
| **Khả thi về kỹ thuật** | ✅ Cao | Sử dụng công nghệ phổ biến |
| **Khả thi về thời gian** | ✅ Trung bình | Cần 2-3 tháng cho 5 thành viên |
| **Khả thi về nhân lực** | ✅ Đủ | 5 thành viên đáp ứng yêu cầu |
| **Khả thi về tài chính** | ✅ Thấp | Chủ yếu dùng công cụ miễn phí |

### 10.3. Phân tích rủi ro

| Rủi ro | Mức độ | Biện pháp giảm thiểu |
|--------|--------|----------------------|
| Thay đổi yêu cầu giữa chừng | Trung bình | Xác nhận SRS kỹ trước khi code |
| Thiếu dữ liệu test | Trung bình | Xin dữ liệu mẫu từ khoa sớm |
| Thành viên nghỉ/bận | Thấp | Phân công rõ ràng, có backup |
| Chậm tiến độ | Trung bình | Áp dụng Agile, họp hàng tuần |
| Lỗi bảo mật | Thấm | Code review, test bảo mật |

### 10.4. Ước lượng thời gian

| Giai đoạn | Thời gian | Sản phẩm |
|-----------|-----------|----------|
| Phân tích & Đặc tả | 1 tuần | Tài liệu SRS |
| Thiết kế CSDL & UI | 1 tuần | ERD, Wireframe |
| Phát triển Backend | 2 tuần | API + Database |
| Phát triển Frontend | 2 tuần | Giao diện |
| Tích hợp & Test | 1 tuần | Hệ thống hoàn chỉnh |
| Triển khai & Báo cáo | 1 tuần | Sản phẩm + Tài liệu |
| **Tổng** | **~8 tuần** | |

### 10.5. Kết luận sơ bộ

Dự án **Website Quản lý Sinh viên cho Khoa CNTT** là khả thi và cần thiết. Hệ thống sẽ giải quyết được các vấn đề hiện tại trong công tác quản lý, tiết kiệm thời gian và nâng cao hiệu quả làm việc. Với đội ngũ 5 thành viên có sự phân công rõ ràng và áp dụng quy trình phát triển phù hợp, dự án hoàn toàn có thể hoàn thành đúng tiến độ và chất lượng yêu cầu.

**Các điểm nổi bật của hệ thống:**
- ✅ Số hóa toàn diện dữ liệu sinh viên khoa CNTT
- ✅ Hỗ trợ đầy đủ thao tác Cập nhật - Xuất dữ liệu - Tổng hợp
- ✅ Dashboard trực quan với các biểu đồ thống kê
- ✅ Phân quyền chi tiết cho 4 nhóm người dùng
- ✅ Xuất báo cáo đa định dạng (Excel, PDF, Word, CSV)
- ✅ Import dữ liệu hàng loạt từ Excel
- ✅ Bảo mật cao với mã hóa mật khẩu và log thao tác

---

## 11. PHÂN CÔNG NHÓM (5 THÀNH VIÊN - TRƯỜNG CĐ LẠNG SƠN)

### 11.1. Thông tin nhóm

| Thông tin | Chi tiết |
|-----------|----------|
| **Trường** | Cao đẳng Lạng Sơn |
| **Khoa** | Công nghệ thông tin |
| **Số thành viên** | 5 sinh viên |
| **Môn đã học áp dụng** | C++, C#, MySQL, Phân tích thiết kế (StarUML), HTML/CSS/JS, Python, PHP |
| **Công nghệ chọn** | **Python (Flask) + MySQL** |
| **Thời gian** | 8 tuần |

### 11.2. Cơ cấu nhóm (4 vai trò + Trưởng nhóm kiêm)

> 💡 **Đặc thù nhóm:** Trưởng nhóm tự đảm nhiệm việc **kiểm thử chung** (cả nhóm cùng test) và **quản lý dự án**. Do đó 4 thành viên còn lại đảm nhận 4 vai trò kỹ thuật, mỗi người một mảng rõ ràng theo môn đã học.

| Vai trò | Số người | Mô tả |
|---------|----------|-------|
| **Trưởng nhóm + Kiểm thử chung** | 1 (BẠN) | Quản lý dự án, viết báo cáo, tổng hợp test |
| **Phân tích & Thiết kế hệ thống** | 1 | Vẽ Use Case, Class Diagram, Sequence Diagram trên **StarUML** |
| **Thiết kế CSDL** | 1 | Vẽ ERD, tạo database, viết script SQL, tạo View/Trigger |
| **Thiết kế giao diện (UI/UX)** | 1 | Cắt HTML/CSS từ Bootstrap, JavaScript, validate form |
| **Lập trình Backend (Python)** | 1 | Viết code Flask routes, models, kết nối MySQL, xử lý logic |

### 11.3. Phân công chi tiết theo từng vai trò

#### 👤 **BẠN (TV0) - TRƯỞNG NHÓM + KIỂM THỬ CHUNG**

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên vai trò** | Team Leader + QA/Tester (tổng hợp) |
| **Môn đã học liên quan** | MySQL (yếu nhất → học thêm khi cần) |
| **Công việc chính** | • Quản lý tiến độ, họp nhóm (2 lần/tuần)<br>• **Tổng hợp tài liệu SRS** (dựa trên phân tích của TV1)<br>• Viết **báo cáo cuối kỳ** + slide thuyết trình<br>• **Kiểm thử chung** (cả nhóm cùng test từng chức năng)<br>• Phối hợp với TV2 (CSDL) để học hỏi MySQL<br>• Hỗ trợ TV4 (Backend) code một số chức năng nhỏ (trang login, chỉnh sửa CSS)<br>• Cùng cả nhóm commit lên GitHub |
| **Đóng góp ước tính** | 20% |
| **Công nghệ** | Git/GitHub, Markdown, MySQL Workbench (học cơ bản) |
| **Sản phẩm bàn giao** | SRS tổng hợp, Báo cáo cuối kỳ, Slide thuyết trình, Test report tổng hợp |

#### 👤 **TV1 - PHÂN TÍCH & THIẾT KẾ HỆ THỐNG**

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên vai trò** | System Analyst - Phân tích & Thiết kế |
| **Môn đã học liên quan** | **Phân tích thiết kế hệ thống (StarUML)** |
| **Công việc chính** | • Vẽ **Use Case Diagram** (cho 21 UC) trên StarUML<br>• Vẽ **Class Diagram** cho các thực thể chính<br>• Vẽ **Activity Diagram** cho chức năng quan trọng (nhập điểm, đăng nhập)<br>• Vẽ **Sequence Diagram** cho Hệ thống Chat (UC17), nhập điểm<br>• Phối hợp với TV2 (CSDL) để ERD khớp với Use Case<br>• Viết **đặc tả chi tiết** các Use Case quan trọng (UC01, UC02, UC06, UC16, UC17) |
| **Đóng góp ước tính** | 20% |
| **Công nghệ** | **StarUML** (đã học), Word/Markdown để viết đặc tả |
| **Sản phẩm bàn giao** | File `.mdj` (StarUML): Use Case, Class, Activity, Sequence Diagram |

#### 👤 **TV2 - THIẾT KẾ CƠ SỞ DỮ LIỆU**

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên vai trò** | Database Designer |
| **Môn đã học liên quan** | **Hệ quản trị CSDL (MySQL)** |
| **Công việc chính** | • Vẽ **ERD** (trên StarUML hoặc MySQL Workbench)<br>• Tạo **database `qlsv`** trên MySQL<br>• Viết script **CREATE TABLE** cho 10+ bảng<br>• Tạo **View** cho thống kê: `vw_diem_trung_binh`, `vw_thong_ke_lop`, ...<br>• Tạo **Stored Procedure** cho tính GPA, xếp loại<br>• Tạo **Trigger** cho cảnh báo học tập sớm (UC16)<br>• Tạo dữ liệu mẫu (seed data) để test<br>• Hỗ trợ TV4 tối ưu query |
| **Đóng góp ước tính** | 20% |
| **Công nghệ** | **MySQL Workbench**, command line SQL |
| **Sản phẩm bàn giao** | File `qlsv.sql` (script tạo DB), file `seed_data.sql` |

#### 👤 **TV3 - THIẾT KẾ GIAO DIỆN (UI/UX)**

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên vai trò** | Frontend Designer |
| **Môn đã học liên quan** | **HTML, CSS, JavaScript** |
| **Công việc chính** | • Vẽ **Wireframe** cho các trang (trên giấy hoặc Figma miễn phí)<br>• Cắt **HTML/CSS** từ template Bootstrap 5 (AdminLTE, SB Admin 2)<br>• Xây dựng các trang: Login, Dashboard, CRUD Sinh viên/Lớp/Môn/Điểm, Thống kê<br>• Viết **JavaScript** validate form (email, CCCD, SĐT)<br>• Dùng **Chart.js** cho biểu đồ trên Dashboard<br>• Phối hợp với TV4 để gắn data vào giao diện<br>• **Responsive** trên desktop & tablet |
| **Đóng góp ước tính** | 20% |
| **Công nghệ** | HTML5, CSS3, JavaScript, **Bootstrap 5** (qua CDN), **Chart.js** |
| **Sản phẩm bàn giao** | Toàn bộ file trong `templates/` và `static/` |

#### 👤 **TV4 - LẬP TRÌNH BACKEND (Python Flask)**

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên vai trò** | Backend Developer (Python) |
| **Môn đã học liên quan** | **Python** (tham khảo cú pháp C++/C# đã học) |
| **Công việc chính** | • Viết code **Flask app** (`app.py`), cấu hình routes<br>• Viết các **file model** kết nối MySQL (dùng `pymysql` hoặc `mysql-connector`)<br>• Xử lý **đăng nhập / phân quyền** (Flask-Login)<br>• Viết các **route CRUD**: sinh viên, lớp, ngành, môn học, điểm<br>• Xử lý **logic nghiệp vụ**: công thức điểm, quy đổi điểm chữ, tính GPA<br>• **Xuất Excel** (openpyxl), **xuất PDF** (reportlab)<br>• Viết **API JSON** cho chat (AJAX polling) và diễn đàn<br>• Viết **script Python pandas** cho phân tích xu hướng điểm (UC19)<br>• Làm việc chặt chẽ với TV3 để gắn data |
| **Đóng góp ước tính** | 25% (cao nhất - phần việc nhiều) |
| **Công nghệ** | **Python 3.10+**, **Flask**, **PyMySQL**, **pandas**, **openpyxl**, **reportlab** |
| **Sản phẩm bàn giao** | Toàn bộ file Python: `app.py`, `models/`, `routes/`, `utils/`, `analytics/` |

### 11.4. Bảng phân công theo Module

| Module / Chức năng | TV0 (BẠN - Lead+Test) | TV1 (Phân tích) | TV2 (CSDL) | TV3 (UI) | TV4 (Backend) |
|--------------------|:---:|:---:|:---:|:---:|:---:|
| Phân tích yêu cầu & SRS | ✅ (Tổng hợp) | ✅ (Use Case) | ⚪ | ⚪ | ⚪ |
| **Use Case Diagram (StarUML)** | ⚪ | ✅ (Lead) | ⚪ | ⚪ | ⚪ |
| **Class/Activity/Sequence Diagram** | ⚪ | ✅ (Lead) | ⚪ | ⚪ | ⚪ |
| **Thiết kế ERD & Database** | ⚪ | ✅ (Phối hợp) | ✅ (Lead) | ⚪ | ⚪ |
| Script CREATE TABLE, View, Trigger | ⚪ | ⚪ | ✅ (Lead) | ⚪ | ⚪ |
| Dữ liệu mẫu (seed) | ⚪ | ⚪ | ✅ | ⚪ | ⚪ |
| Wireframe giao diện | ⚪ | ⚪ | ⚪ | ✅ (Lead) | ⚪ |
| **Cắt HTML/CSS từ Bootstrap** | ⚪ | ⚪ | ⚪ | ✅ (Lead) | ⚪ |
| JavaScript validate + AJAX | ⚪ | ⚪ | ⚪ | ✅ | ✅ |
| **Backend Flask - Auth + Phân quyền** | ⚪ | ⚪ | ⚪ | ⚪ | ✅ (Lead) |
| **Backend Flask - CRUD Sinh viên/Lớp/Ngành** | ⚪ | ⚪ | ⚪ | ⚪ | ✅ (Lead) |
| Backend Flask - CRUD Môn học/Điểm | ⚪ | ⚪ | ⚪ | ⚪ | ✅ (Lead) |
| Thống kê + Biểu đồ Chart.js | ⚪ | ⚪ | ⚪ | ✅ (Chart UI) | ✅ (Logic) |
| Import/Export Excel/PDF | ⚪ | ⚪ | ⚪ | ⚪ | ✅ (Lead) |
| **🚀 Cảnh báo học tập sớm (UC16)** | ⚪ | ⚪ | ✅ (Trigger) | ⚪ | ✅ (Hiển thị) |
| **🚀 Hệ thống Chat (UC17)** — gộp GV-SV & SV-SV | ⚪ | ✅ (Sequence) | ✅ (Schema) | ✅ (UI) | ✅ (API) |
| **🚀 Diễn đàn khoa (UC18)** | ⚪ | ✅ (Sequence) | ✅ (Schema) | ✅ (UI) | ✅ (API) |
| **🚀 Phân tích xu hướng điểm (UC19)** | ⚪ | ⚪ | ⚪ | ✅ (Hiển thị ảnh) | ✅ (pandas) |
| **🚀 Bảng xếp hạng & Huy hiệu (UC20)** | ⚪ | ⚪ | ⚪ | ✅ (UI) | ✅ (Logic) |
| **🚀 AJAX auto-refresh (UC21)** | ⚪ | ⚪ | ⚪ | ✅ (JS) | ✅ (API endpoint) |
| **Kiểm thử (cả nhóm cùng làm)** | ✅ (Tổng hợp) | ✅ | ✅ | ✅ | ✅ |
| Viết báo cáo + Slide | ✅ (Lead) | ⚪ | ⚪ | ⚪ | ⚪ |
| Tài liệu hướng dẫn sử dụng | ✅ | ⚪ | ⚪ | ✅ | ⚪ |

> 💡 **Ghi chú quan trọng:**
> - Các tính năng sáng tạo (🚀) phát triển ở mức **MVP** — đủ chạy, demo được
> - **Mọi thành viên đều tham gia kiểm thử** khi tích hợp xong
> - Bạn (Lead) chịu trách nhiệm **tổng hợp test report** cuối cùng

### 11.5. Quy trình làm việc nhóm

**Công cụ quản lý:**
- 📋 **Git + GitHub** - Quản lý source code (1 repo chung, mỗi người 1 branch)
- 📋 **Trello** (miễn phí) - Quản lý task theo Kanban
- 📋 **Zalo/Nhóm chat** - Giao tiếp hàng ngày
- 📋 **Google Drive** - Chia sẻ tài liệu SRS, báo cáo

**Quy tắc:**
- Họp nhóm **2 lần/tuần** (ví dụ: Tối thứ 3 & thứ 6)
- Mỗi thành viên **commit code ít nhất 3 lần/tuần**
- **Code review** trước khi merge vào nhánh `main`
- Sử dụng **Git Flow** đơn giản: `main` → `develop` → `feature/<ten-tinh-nang>`

### 11.6. Lộ trình học thêm cho BẠN (vì tự nhận yếu MySQL)

| Tuần | Kiến thức cần học thêm | Tài liệu tham gia |
|------|------------------------|--------------------|
| Tuần 1 | Cú pháp SQL cơ bản: SELECT, INSERT, UPDATE, DELETE | W3Schools SQL, MySQL Tutorial |
| Tuần 2 | JOIN, GROUP BY, ORDER BY, LIMIT | MySQL Tutorial |
| Tuần 3 | View, Trigger, Stored Procedure (cơ bản) | MySQL Documentation |
| Tuần 4 | Cú pháp Python cơ bản (nếu cần hỗ trợ TV4) | W3Schools Python |
| Tuần 5-8 | Áp dụng thực tế khi làm dự án | - |

> 💡 **Khuyến nghị:** Bạn chỉ cần học SQL đủ để **đọc hiểu** và **viết được query đơn giản** là OK. TV2 (CSDL) sẽ phụ trách chính viết script SQL, bạn chỉ cần đọc hiểu khi review.

---

## 12. KẾ HOẠCH THỰC HIỆN

### 12.1. Lộ trình tổng thể (8 tuần)

```
Tuần 1-2:  ▓▓░░░░░░░░  Phân tích & Thiết kế
Tuần 3-4:  ░░▓▓░░░░░░  Phát triển Backend
Tuần 5-6:  ░░░░▓▓░░░░  Phát triển Frontend
Tuần 7:    ░░░░░░▓░░░  Tích hợp & Kiểm thử
Tuần 8:    ░░░░░░░░▓░  Triển khai & Báo cáo
```

### 12.2. Chi tiết theo tuần (Python Flask + 5 SV CĐ Lạng Sơn)

| Tuần | Hoạt động | Thành viên phụ trách |
|------|-----------|----------------------|
| **1** | Phân tích yêu cầu, viết SRS, vẽ Use Case Diagram trên StarUML | BẠN + TV1 (Lead) |
| **2** | Vẽ Class/Activity/Sequence Diagram, ERD, Wireframe, setup môi trường (Python + Flask + MySQL) | TV1 (Lead) + TV2 + TV3 + BẠN |
| **3** | Tạo database MySQL, viết script SQL, tạo View/Trigger. Cắt HTML/CSS từ Bootstrap | TV2 (Lead) + TV3 |
| **4** | Backend Flask - Module Auth + CRUD Sinh viên/Lớp/Ngành/Môn | TV4 (Lead) + BẠN (hỗ trợ) |
| **5** | Backend Flask - CRUD Điểm + Thống kê + Xuất Excel/PDF | TV4 (Lead) + TV2 (hỗ trợ query) |
| **6** | Tích hợp Frontend-Backend, làm Dashboard với Chart.js, làm các tính năng sáng tạo (chat SV-SV, diễn đàn, bảng xếp hạng) | TV3 + TV4 + TV2 (Trigger) |
| **7** | **Tích hợp + Kiểm thử (cả nhóm cùng test)** + sửa lỗi | BẠN (Lead) + Cả nhóm |
| **8** | Triển khai demo + viết báo cáo + làm slide + thuyết trình | BẠN (Lead) + Cả nhóm |

### 12.3. Milestone quan trọng

| Cột mốc | Ngày dự kiến | Sản phẩm |
|---------|--------------|----------|
| ✅ M1 | Cuối tuần 2 | Hoàn thành SRS + ERD + Wireframe |
| ✅ M2 | Cuối tuần 4 | Backend hoàn chỉnh + API Test |
| ✅ M3 | Cuối tuần 6 | Frontend hoàn chỉnh |
| ✅ M4 | Cuối tuần 7 | Hệ thống tích hợp, đã test |
| ✅ M5 | Cuối tuần 8 | Demo + Báo cáo + Bảo vệ |

---

## PHỤ LỤC

### Phụ lục A: Glossary (Bảng thuật ngữ)

| Thuật ngữ | Giải thích |
|-----------|------------|
| CRUD | Create, Read, Update, Delete - 4 thao tác cơ bản |
| SRS | Software Requirements Specification - Tài liệu đặc tả yêu cầu |
| RBAC | Role-Based Access Control - Phân quyền dựa trên vai trò |
| ERD | Entity Relationship Diagram - Sơ đồ thực thể liên kết |
| GPA | Grade Point Average - Điểm trung bình tích lũy |
| UX/UI | User Experience / User Interface |
| API | Application Programming Interface |
| Audit Log | Nhật ký ghi lại các thao tác của người dùng |

### Phụ lục B: Tài liệu tham khảo

1. Tài liệu Laravel Documentation - https://laravel.com/docs
2. Bootstrap 5 Documentation - https://getbootstrap.com/
3. Chart.js Documentation - https://www.chartjs.org/
4. MySQL Documentation - https://dev.mysql.com/doc/
5. Slide bài giảng môn Phát triển Ứng dụng Web - GV phụ trách

---

## XÁC NHẬN

| # | Vai trò | Họ tên | Ký tên | Ngày |
|---|---------|--------|--------|------|
| 1 | **Trưởng nhóm + Kiểm thử** (BẠN) | | | |
| 2 | Phân tích & Thiết kế hệ thống (StarUML) | | | |
| 3 | Thiết kế Cơ sở dữ liệu (MySQL) | | | |
| 4 | Thiết kế Giao diện (UI/UX) | | | |
| 5 | Lập trình Backend (Python Flask) | | | |
| | **GV hướng dẫn** | | | |

---

> **📝 Ghi chú:** Đây là bản đặc tả phiên bản 1.0. Mọi thay đổi yêu cầu cần được thông báo và cập nhật phiên bản mới. Tài liệu này là cơ sở để phát triển, nghiệm thu và đánh giá dự án.

**© 2026 - Nhóm thực hiện đồ án Website Quản lý Sinh viên - Khoa CNTT**
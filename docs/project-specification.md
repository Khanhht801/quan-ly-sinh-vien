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

#### 🚀 Nhóm 1: Phân tích thông minh

1. **Cảnh báo học tập sớm (Early Warning System)**
   - Tự động phát hiện sinh viên có nguy cơ học yếu (dựa trên điểm chuyên cần, điểm giữa kỳ, số buổi vắng)
   - Gửi thông báo đến CVHT và sinh viên
   - Gợi ý kế hoạch cải thiện kết quả học tập

2. **Phân tích xu hướng (Trend Analytics)**
   - Dự đoán kết quả cuối kỳ dựa trên điểm giữa kỳ (theo công thức thống kê đơn giản)
   - Phân nhóm sinh viên theo phong cách học tập (Clustering)

#### 💻 Nhóm 2: Công nghệ hiện đại

3. **PWA (Progressive Web App)**
   - Có thể cài đặt như app trên điện thoại
   - Hoạt động offline một phần (xem thông tin đã cache)
   - Push notification cho thông báo quan trọng

4. **Real-time updates**
   - Cập nhật điểm, thông báo theo thời gian thực (WebSocket)
   - Không cần refresh trang

5. **Dark Mode & Responsive**
   - Hỗ trợ chế độ sáng/tối
   - Tương thích đầy đủ trên mobile, tablet, desktop

6. **QR Code cho sinh viên**
   - Mỗi sinh viên có mã QR định danh
   - Điểm danh, tra cứu nhanh bằng QR

#### 👥 Nhóm 3: Tính năng xã hội hóa & học tập

7. **Chat Giảng viên - Sinh viên**
   - Sinh viên nhắn tin trực tiếp với giảng viên (CVHT hoặc GV bộ môn)
   - Hỗ trợ nhắn tin văn bản, gửi file đính kèm
   - Thông báo real-time khi có tin nhắn mới
   - Lưu lịch sử chat, có thể tìm kiếm lại
   - Phân loại cuộc trò chuyện theo môn học/lớp

8. **Chat Sinh viên - Sinh viên**
   - Sinh viên cùng lớp/cùng ngành nhắn tin với nhau
   - Tạo nhóm chat theo lớp, theo nhóm học tập
   - Chia sẻ tài liệu, hình ảnh, link trong nhóm
   - Hỗ trợ mention (@tên), emoji
   - Online/offline indicator

9. **Diễn đàn sinh viên khoa CNTT**
   - Chia sẻ tài liệu, hỏi bài, thảo luận
   - Upvote/downvote cho câu trả lời hay
   - Phân loại theo ngành/môn học

10. **Đánh giá giảng viên (ẩn danh)**
    - Sinh viên đánh giá chất lượng giảng dạy sau mỗi học kỳ
    - Tổng hợp feedback cho khoa

11. **Gamification (Trò chơi hóa)**
    - Bảng xếp hạng sinh viên xuất sắc
    - Hệ thống huy hiệu (badges): "Sinh viên tiêu biểu", "Cải thiện vượt bậc",...
    - Điểm thưởng cho các hoạt động tốt

12. **Portfolio sinh viên**
    - Sinh viên tự tạo portfolio cá nhân (dự án cá nhân, chứng chỉ, kỹ năng)
    - CV tự động từ dữ liệu trong hệ thống
    - Chia sẻ link portfolio công khai

13. **Tìm bạn học nhóm (Study Buddy Matching)**
    - Gợi ý bạn học cùng lớp/cùng môn
    - Dựa trên lịch học và sở thích

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
```

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
| **UC17** | **Chat Giảng viên - Sinh viên** | **Giảng viên, Sinh viên** |
| **UC18** | **Chat Sinh viên - Sinh viên (cá nhân & nhóm)** | **Sinh viên** |
| **UC19** | **Phân tích xu hướng điểm (Trend Analytics)** | **Giáo vụ** |
| **UC20** | **Đăng bài / Hỏi bài trên diễn đàn khoa** | **Sinh viên, Giảng viên** |
| **UC21** | **Đánh giá giảng viên (ẩn danh)** | **Sinh viên** |
| **UC22** | **Xem bảng xếp hạng / Huy hiệu (Gamification)** | **Tất cả** |
| **UC23** | **Tạo & Chia sẻ Portfolio cá nhân** | **Sinh viên** |
| **UC24** | **Tìm bạn học nhóm (Study Buddy)** | **Sinh viên** |
| **UC25** | **Nhận thông báo Push (PWA)** | **Tất cả** |
| **UC26** | **Tra cứu bằng QR Code** | **Giáo vụ, CVHT** |

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

#### UC17 - Chat Giảng viên - Sinh viên

**Actor chính:** Giảng viên (CVHT hoặc GV bộ môn), Sinh viên
**Mô tả:** Cho phép sinh viên nhắn tin trực tiếp với giảng viên để hỏi bài, trao đổi vấn đề học tập.

**Chức năng chính:**
- Gửi/nhận tin nhắn văn bản real-time
- Gửi file đính kèm (PDF, Word, hình ảnh)
- Hiển thị trạng thái online/offline
- Thông báo khi có tin nhắn mới (icon + âm thanh)
- Lưu lịch sử trò chuyện
- Phân loại cuộc hội thoại theo môn học/lớp
- Có thể block người dùng gây spam

**Luồng chính:**
1. Sinh viên chọn giảng viên muốn liên hệ (từ danh sách CVHT, danh sách GV bộ môn)
2. Mở khung chat
3. Nhập nội dung → Gửi
4. Tin nhắn được lưu DB, đẩy real-time đến GV qua WebSocket
5. GV nhận thông báo, phản hồi
6. Cả hai bên đều thấy lịch sử cuộc trò chuyện

**Dữ liệu cần lưu:**
- Tin nhắn (người gửi, người nhận, nội dung, thời gian, file đính kèm)
- Cuộc trò chuyện (cặp người dùng)
- Trạng thái đã đọc/chưa đọc

#### UC18 - Chat Sinh viên - Sinh viên

**Actor chính:** Sinh viên
**Mô tả:** Cho phép sinh viên nhắn tin với nhau theo nhiều hình thức: chat cá nhân 1-1, chat nhóm theo lớp/nhóm học tập.

**Chức năng chính:**

**a) Chat cá nhân (1-1):**
- Hai sinh viên nhắn tin riêng với nhau
- Hiển thị profile người chat (avatar, lớp, ngành)
- Tìm kiếm bạn theo Mã SV, họ tên, lớp

**b) Chat nhóm:**
- Nhóm theo lớp (mỗi lớp có 1 nhóm chat tự động)
- Nhóm theo nhóm học tập (SV tự tạo nhóm)
- Nhóm chat môn học (SV cùng đăng ký môn)
- Thêm/xóa thành viên, đổi tên nhóm
- Vai trò: Trưởng nhóm, thành viên

**Tính năng chung:**
- Gửi tin nhắn văn bản, emoji, file đính kèm
- Mention thành viên (@tên)
- Reply tin nhắn cụ thể
- Reaction (thả cảm xúc vào tin nhắn)
- Trạng thái đã đọc
- Tin nhắn ghim (quan trọng)
- Tìm kiếm trong lịch sử chat

**Luồng tạo nhóm chat (ví dụ):**
1. Sinh viên vào mục "Nhóm chat"
2. Nhấn "Tạo nhóm mới"
3. Đặt tên nhóm, chọn thành viên (từ danh sách bạn cùng lớp)
4. Hệ thống tạo phòng chat, thêm thành viên
5. Cả nhóm nhận thông báo mời vào nhóm
6. Bắt đầu chat

**Dữ liệu cần lưu:**
- Phòng chat (1-1 hoặc nhóm)
- Thành viên phòng chat
- Tin nhắn (phòng, người gửi, nội dung, thời gian, file)
- Trạng thái đã đọc theo người dùng

#### UC19 - Diễn đàn khoa CNTT

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
   - SĐT đúng định dạng (10-11 số)
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
| **UC17 - Chat Giảng viên - Sinh viên** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC18 - Chat Sinh viên - Sinh viên** | ✓ | | | | ✓ |
| **UC19 - Phân tích xu hướng** | ✓ | ✓ | | | |
| **UC20 - Diễn đàn khoa** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC21 - Đánh giá GV** | ✓ | ✓ | | | ✓ |
| **UC22 - Gamification** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC23 - Portfolio** | ✓ | ✓ | | | ✓ |
| **UC24 - Study Buddy** | | | | | ✓ |
| **UC25 - Push Notification** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **UC26 - QR Code** | ✓ | ✓ | ✓ | | |

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

### 9.5. Yêu cầu công nghệ (đề xuất)
| Thành phần | Công nghệ |
|------------|-----------|
| **Frontend** | HTML, CSS, JavaScript, Bootstrap 5 / Tailwind CSS |
| **Backend** | PHP (Laravel) / Node.js (Express) / Python (Django) / C# (ASP.NET) |
| **Database** | MySQL / PostgreSQL / SQL Server |
| **Báo cáo/Chart** | Chart.js, ReportLab, PHPSpreadsheet |
| **Deploy** | XAMPP / WAMP / IIS / Docker |

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

## 11. PHÂN CÔNG NHÓM (5 THÀNH VIÊN)

### 11.1. Cơ cấu nhóm

| Vai trò | Số người | Mô tả |
|---------|----------|-------|
| **Trưởng nhóm (Team Leader)** | 1 | Quản lý, điều phối, tổng hợp |
| **Thành viên (Developer)** | 3 | Phát triển hệ thống |
| **Thành viên (UI/UX + Tester)** | 1 | Thiết kế giao diện và kiểm thử |

### 11.2. Phân công chi tiết

#### 👤 **Thành viên 1 - TRƯỞNG NHÓM / Phân tích & Backend Lead**

| Nội dung | Chi tiết |
|----------|----------|
| **Tên vai trò** | Team Leader + Business Analyst + Backend Lead |
| **Công việc chính** | • Phân tích yêu cầu và viết tài liệu SRS<br>• Thiết kế CSDL (ERD, Schema)<br>• Phát triển Backend Core (Authentication, Authorization)<br>• Xây dựng API quản lý sinh viên, lớp, ngành<br>• Quản lý tiến độ và họp nhóm<br>• Viết báo cáo cuối kỳ |
| **Đóng góp ước tính** | 30% |
| **Công nghệ** | PHP/Laravel hoặc Node.js, MySQL, Git |
| **Sản phẩm bàn giao** | Tài liệu SRS, ERD, Backend Authentication, Module Sinh viên/Lớp |

#### 👤 **Thành viên 2 - BACKEND DEVELOPER (Module Điểm & Môn học)**

| Nội dung | Chi tiết |
|----------|----------|
| **Tên vai trò** | Backend Developer - Điểm & Môn học |
| **Công việc chính** | • Phát triển API quản lý môn học<br>• Phát triển API nhập/sửa điểm<br>• Xử lý logic tính GPA, xếp loại<br>• Xây dựng API xuất báo cáo điểm<br>• Tối ưu query database<br>• Viết Unit Test cho backend |
| **Đóng góp ước tính** | 22% |
| **Công nghệ** | PHP/Laravel, MySQL, RESTful API |
| **Sản phẩm bàn giao** | Module Điểm + Môn học hoàn chỉnh, API Documentation |

#### 👤 **Thành viên 3 - BACKEND DEVELOPER (Module Người dùng & Phân quyền)**

| Nội dung | Chi tiết |
|----------|----------|
| **Tên vai trò** | Backend Developer - User & Permission |
| **Công việc chính** | • Phát triển hệ thống Authentication (Login, Logout, Register)<br>• Xây dựng RBAC (Phân quyền theo vai trò)<br>• Quản lý phiên làm việc (Session, Token)<br>• Module Audit Log (ghi log thao tác)<br>• Xử lý bảo mật (mã hóa mật khẩu, CSRF, XSS)<br>• Import dữ liệu từ Excel |
| **Đóng góp ước tính** | 18% |
| **Công nghệ** | PHP/Laravel, JWT/Session, Excel Parser |
| **Sản phẩm bàn giao** | Module Authentication, Phân quyền, Import Excel |

#### 👤 **Thành viên 4 - FRONTEND DEVELOPER**

| Nội dung | Chi tiết |
|----------|----------|
| **Tên vai trò** | Frontend Developer |
| **Công việc chính** | • Thiết kế giao diện (HTML, CSS, JavaScript)<br>• Xây dựng các trang quản lý (CRUD UI)<br>• Xây dựng trang Dashboard với biểu đồ<br>• Tích hợp Frontend với Backend API<br>• Responsive design (Desktop + Mobile)<br>• Hiệu ứng UX/UI |
| **Đóng góp ước tính** | 22% |
| **Công nghệ** | HTML5, CSS3, JavaScript, Bootstrap 5, Chart.js, AJAX/Fetch |
| **Sản phẩm bàn giao** | Toàn bộ giao diện người dùng, Dashboard |

#### 👤 **Thành viên 5 - UI/UX DESIGNER + TESTER**

| Nội dung | Chi tiết |
|----------|----------|
| **Tên vai trò** | UI/UX Designer + QA/Tester |
| **Công việc chính** | • Thiết kế Wireframe & Mockup giao diện<br>• Xây dựng Design System (màu sắc, font, component)<br>• Kiểm thử chức năng (Functional Testing)<br>• Kiểm thử giao diện (UI Testing)<br>• Kiểm thử bảo mật cơ bản<br>• Viết tài liệu hướng dẫn sử dụng<br>• Hỗ trợ Frontend khi cần |
| **Đóng góp ước tính** | 13% |
| **Công nghệ** | Figma, Photoshop, TestRail/Excel, Bootstrap |
| **Sản phẩm bàn giao** | Wireframe, Test Case, Tài liệu hướng dẫn |

### 11.3. Bảng phân công theo Module

| Module / Chức năng | TV1 (Lead) | TV2 | TV3 | TV4 | TV5 |
|--------------------|:----------:|:---:|:---:|:---:|:---:|
| Phân tích yêu cầu & SRS | ✅ (Lead) | ⚪ | ⚪ | ⚪ | ⚪ |
| Thiết kế CSDL | ✅ (Lead) | ⚪ | ⚪ | ⚪ | ⚪ |
| Authentication | ✅ | ⚪ | ✅ | ⚪ | ⚪ |
| Phân quyền (RBAC) | ⚪ | ⚪ | ✅ | ⚪ | ⚪ |
| Quản lý Sinh viên | ✅ | ⚪ | ⚪ | ✅ | ⚪ |
| Quản lý Lớp/Ngành | ✅ | ⚪ | ⚪ | ✅ | ⚪ |
| Quản lý Môn học | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| Quản lý Điểm | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| Import/Export Excel | ⚪ | ⚪ | ✅ | ✅ | ⚪ |
| Xuất PDF/Word | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| Dashboard & Biểu đồ | ⚪ | ⚪ | ⚪ | ✅ | ✅ |
| Giao diện CRUD | ⚪ | ⚪ | ⚪ | ✅ | ✅ |
| Audit Log | ⚪ | ⚪ | ✅ | ⚪ | ⚪ |
| **🚀 Cảnh báo học tập sớm (UC16)** | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| **🚀 Chat Giảng viên - Sinh viên (UC17)** | ⚪ | ✅ | ✅ | ✅ | ⚪ |
| **🚀 Chat Sinh viên - Sinh viên (UC18)** | ⚪ | ✅ | ✅ | ✅ | ⚪ |
| **🚀 Phân tích xu hướng (UC19)** | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| **🚀 Diễn đàn khoa (UC20)** | ⚪ | ⚪ | ✅ | ✅ | ⚪ |
| **🚀 Đánh giá GV (UC21)** | ⚪ | ✅ | ⚪ | ✅ | ⚪ |
| **🚀 Gamification (UC22)** | ⚪ | ⚪ | ⚪ | ✅ | ✅ |
| **🚀 Portfolio sinh viên (UC23)** | ⚪ | ⚪ | ✅ | ✅ | ⚪ |
| **🚀 PWA + Real-time (UC25)** | ⚪ | ✅ | ✅ | ✅ | ⚪ |
| Kiểm thử | ⚪ | ⚪ | ⚪ | ⚪ | ✅ (Lead) |
| Viết báo cáo | ✅ | ⚪ | ⚪ | ⚪ | ✅ |
| Tài liệu hướng dẫn | ✅ | ⚪ | ⚪ | ⚪ | ✅ |

> 💡 **Lưu ý:** Các tính năng sáng tạo (có đánh dấu 🚀) sẽ được phát triển ở mức **MVP (Minimum Viable Product)** — tức là làm đủ chạy, demo được, không cần quá phức tạp. Mục đích chính là **thể hiện tư duy sáng tạo và áp dụng công nghệ mới**, không phải sản phẩm thương mại.

### 11.4. Quy trình làm việc nhóm

**Công cụ quản lý:**
- 📋 **Git + GitHub/GitLab** - Quản lý source code
- 📋 **Trello/Jira** - Quản lý task
- 📋 **Slack/Discord/Zalo** - Giao tiếp nhóm
- 📋 **Google Drive** - Chia sẻ tài liệu

**Quy tắc:**
- Họp nhóm 2 lần/tuần (Thứ 3 & Thứ 6)
- Daily standup 15 phút qua chat
- Mỗi thành viên commit code ít nhất 3 lần/tuần
- Code review bắt buộc trước khi merge
- Sử dụng Git Flow (main, develop, feature branches)

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

### 12.2. Chi tiết theo tuần

| Tuần | Hoạt động | Thành viên phụ trách |
|------|-----------|----------------------|
| **1** | Phân tích yêu cầu, viết SRS, thiết kế ERD | TV1 (Lead) + Cả nhóm |
| **2** | Thiết kế UI/Wireframe, Setup môi trường dev | TV5 (Lead) + TV4 |
| **3** | Backend Core + Auth + Module Sinh viên/Lớp | TV1, TV3 |
| **4** | Backend Module Điểm + Môn học + Import/Export | TV2, TV3 |
| **5** | Frontend các trang CRUD + Login | TV4 |
| **6** | Frontend Dashboard + Biểu đồ | TV4, TV5 |
| **7** | Tích hợp + Kiểm thử + Sửa lỗi | TV5 (Lead) + Cả nhóm |
| **8** | Triển khai demo + Viết báo cáo + Thuyết trình | TV1 (Lead) + Cả nhóm |

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

| Vai trò | Họ tên | Ký tên | Ngày |
|---------|--------|--------|------|
| Trưởng nhóm | | | |
| GV hướng dẫn | | | |

---

> **📝 Ghi chú:** Đây là bản đặc tả phiên bản 1.0. Mọi thay đổi yêu cầu cần được thông báo và cập nhật phiên bản mới. Tài liệu này là cơ sở để phát triển, nghiệm thu và đánh giá dự án.

**© 2026 - Nhóm thực hiện đồ án Website Quản lý Sinh viên - Khoa CNTT**
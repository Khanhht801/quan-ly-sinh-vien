# Style Guide — Hệ thống quản lý sinh viên

Tài liệu này là nguồn tham chiếu cho giao diện. Không xóa file; phải cập nhật khi thay đổi hệ thống màu, typography, spacing hoặc component dùng chung.

## 1. Định hướng

- Phong cách: dashboard học vụ hiện đại, rõ ràng, ưu tiên khả năng đọc dữ liệu.
- Giao diện chính dùng nền sáng; sidebar tối tạo phân cấp điều hướng.
- Bootstrap 5 là nền tảng component hiện tại. CSS dự án chỉ bổ sung nhận diện và các component nghiệp vụ.
- Mọi thay đổi phải hoạt động tốt trên desktop, tablet và mobile.

## 2. Màu sắc hiện tại

| Vai trò | Giá trị | Mục đích |
| --- | --- | --- |
| Primary | `#2563eb` | Điều hướng active, hành động chính |
| Bootstrap primary | `#0d6efd` | Nút và trạng thái mặc định của Bootstrap |
| Sidebar | `#111827` | Nền sidebar |
| Sidebar border | `#374151` | Đường phân cách trên nền tối |
| Page background | `#f5f7fb` | Nền ứng dụng |
| Text | `#212529` | Nội dung chính |
| Muted text | `#6b7280` | Nội dung phụ |
| Success | `#16a34a` | Trạng thái tích cực |
| Warning | `#ea580c` | Cảnh báo học tập |
| Danger | `#dc2626` | Lỗi hoặc thao tác nguy hiểm |

- Không thêm màu mới nếu màu hiện có đáp ứng được mục đích.
- Màu trạng thái phải luôn đi kèm chữ hoặc icon; không truyền đạt ý nghĩa chỉ bằng màu.

## 3. Typography

- Font mặc định: `Arial, Helvetica, sans-serif`.
- Heading cần có phân cấp rõ ràng; không chọn kích thước tùy ý cho từng khu vực.
- Nội dung bảng và form phải đủ lớn để đọc được trên màn hình nhỏ.
- Văn bản giao diện dùng tiếng Việt đúng UTF-8 và thống nhất thuật ngữ nghiệp vụ.

## 4. Layout và spacing

- Sidebar desktop rộng `250px`, topbar cao `70px` theo thiết kế hiện tại.
- Dùng spacing của Bootstrap trước khi tạo utility mới.
- Card, form và bảng phải duy trì khoảng cách nhất quán; tránh thêm margin để vá từng trường hợp riêng lẻ.
- Breakpoint hiện tại: tablet ở `992px`, mobile ở `576px`.

## 5. Component

- Button: dùng variant Bootstrap theo đúng mức độ hành động; mỗi khu vực chỉ có một hành động primary nổi bật.
- Card: nền sáng, bo góc và shadow nhẹ; không lạm dụng nhiều kiểu card khác nhau.
- Table: header rõ, có trạng thái empty và cuộn ngang trên màn hình nhỏ khi cần.
- Form: mọi trường nhập phải có label, lỗi hiển thị gần trường liên quan.
- Status: dùng cùng màu, nhãn và cách viết cho một trạng thái ở mọi màn hình.
- Modal: tiêu đề mô tả đúng thao tác; hành động hủy đứng trước hành động xác nhận.

## 6. Motion và accessibility

- Animation ngắn, phục vụ phản hồi trạng thái; tránh chuyển động trang trí gây mất tập trung.
- Giữ focus state nhìn thấy được cho link, button và form control.
- Icon-only button phải có `aria-label`.
- Bảo đảm độ tương phản văn bản và hỗ trợ thao tác bàn phím cho luồng chính.

## 7. Quản lý phiên bản tài nguyên

- CSS chính: `public-home/css/style.css?v=1.0.0`.
- JavaScript chính: `public-home/js/main.js?v=1.0.0`.
- Tăng patch version cho sửa lỗi nhỏ, minor version cho thay đổi component/tính năng và major version cho thay đổi giao diện không tương thích.


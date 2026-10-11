---
version: "alpha"
name: "Flat Design Corporativo — Student Management"
description: "Hệ thống thiết kế phẳng, chuyên nghiệp và có cấu trúc cho dashboard quản lý sinh viên Khoa Công nghệ Thông tin."
theme: "light"
---

# Style Guide — Hệ thống quản lý sinh viên

Đây là nguồn tham chiếu duy nhất cho giao diện dự án. Không xóa file này. Khi thay đổi token, typography, layout hoặc component dùng chung, phải cập nhật tài liệu trước hoặc trong cùng thay đổi code.

## 1. Định hướng thiết kế

Giao diện theo phong cách **corporate flat design**: sạch, hiện đại, tin cậy và dễ quét dữ liệu. Cá tính của sản phẩm đến từ nhịp spacing, typography và cách tổ chức thông tin học vụ, không đến từ gradient hoặc hiệu ứng trang trí.

- Ưu tiên khả năng đọc bảng điểm, hồ sơ và số liệu thống kê.
- Dùng hình khối phẳng, màu đặc, góc bo nhỏ và phân cấp rõ ràng.
- Mật độ giao diện vừa phải: thoáng nhưng không lãng phí không gian dashboard.
- Căn trái nội dung, tiêu đề, form và dữ liệu; chỉ căn giữa empty state hoặc nội dung xác nhận ngắn.
- Mỗi màn hình chỉ có một hành động chính nổi bật.
- Trạng thái phải được thể hiện bằng nhãn hoặc icon kèm màu, không dùng màu đơn độc.

## 2. Design tokens

### 2.1. Màu sắc

| Token | Giá trị | Cách dùng |
| --- | --- | --- |
| `--color-primary` | `#007BFF` | Hành động chính, link, focus, mục điều hướng active |
| `--color-charcoal` | `#343A40` | Sidebar, heading và bề mặt tối |
| `--color-white` | `#FFFFFF` | Card, modal và bề mặt nội dung |
| `--color-neutral` | `#F8F9FA` | Nền trang, hàng bảng xen kẽ, vùng phụ |
| `--color-text-muted` | `#6C757D` | Mô tả, metadata và placeholder |
| `--color-border` | `#DEE2E6` | Border, divider và input mặc định |
| `--color-success` | `#28A745` | Thành công, đang hoạt động, đạt |
| `--color-warning` | `#FFC107` | Cần chú ý, cảnh báo học tập mức vừa |
| `--color-danger` | `#DC3545` | Lỗi, nguy cơ cao, thao tác xóa |
| `--color-info` | `#17A2B8` | Thông tin và trạng thái phụ |

Quy tắc màu:

- Không dùng gradient trang trí.
- Không dùng đen tuyệt đối `#000000`; dùng `--color-charcoal`.
- Không thêm màu bão hòa cao nếu token semantic hiện có đã đáp ứng.
- Chữ trên nền màu phải đạt độ tương phản WCAG AA.
- Warning cần chữ tối; không dùng chữ trắng trên `#FFC107`.

### 2.2. Typography

- Font giao diện: **Lato**, fallback `Arial, Helvetica, sans-serif`.
- Font kỹ thuật: **JetBrains Mono**, chỉ dùng cho mã sinh viên, mã lớp, mã môn hoặc dữ liệu kỹ thuật cần căn ký tự.
- Không dùng monospace cho mọi label nhỏ.
- Nội dung dài tối đa `72ch` để giữ khả năng đọc.

| Vai trò | Kích thước | Weight | Line-height |
| --- | --- | --- | --- |
| Page title / H1 | `2.25rem` | `700` | `1.2` |
| Section title / H2 | `1.5rem` | `700` | `1.3` |
| Card title / H3 | `1.125rem` | `600` | `1.4` |
| Body | `1rem` | `400` | `1.6` |
| Label / Caption | `0.875rem` | `500` | `1.4` |
| Small metadata | `0.75rem` | `400` | `1.4` |

- Dùng sentence case; không viết HOA toàn bộ label.
- Không nhấn riêng một từ trong tiêu đề bằng màu hoặc italic chỉ để trang trí.
- Tên hành động phải nhất quán giữa button, modal và thông báo kết quả.

### 2.3. Spacing và kích thước

Đơn vị cơ sở là `8px`.

| Token | Giá trị |
| --- | --- |
| `--space-1` | `0.25rem` / `4px` |
| `--space-2` | `0.5rem` / `8px` |
| `--space-3` | `0.75rem` / `12px` |
| `--space-4` | `1rem` / `16px` |
| `--space-5` | `1.5rem` / `24px` |
| `--space-6` | `2rem` / `32px` |
| `--space-7` | `3rem` / `48px` |

- Khoảng cách nội bộ component ưu tiên `8px`, `12px`, `16px` hoặc `24px`.
- Không thêm margin lẻ để vá từng màn hình; điều chỉnh token hoặc layout chung.
- Vùng click/touch tối thiểu `44 × 44px` trên mobile.

### 2.4. Radius, border và shadow

| Token | Giá trị |
| --- | --- |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--border-default` | `1px solid #DEE2E6` |
| `--shadow-card` | `0 2px 8px rgba(0, 0, 0, 0.08)` |

- Button và input dùng `4px`; card và modal dùng tối đa `8px`.
- Không dùng một bán kính lớn giống nhau cho mọi thành phần.
- Không dùng shadow nặng hơn `--shadow-card`.
- Border và divider phải phân nhóm thông tin, không dùng như trang trí.

## 3. Layout ứng dụng

- App shell gồm sidebar, topbar và vùng nội dung chính.
- Vùng nội dung rộng tối đa `1280px`, căn giữa, padding ngang `24px` trên desktop.
- Dùng CSS Grid cho dashboard và vùng dữ liệu nhiều cột; dùng Flexbox cho hàng công cụ và nhóm hành động.
- Bảng dữ liệu được ưu tiên chiều rộng; không ép thành card nếu làm mất khả năng so sánh hàng/cột.
- Dưới `768px`, layout nhiều cột chuyển thành một cột và không được gây cuộn ngang toàn trang.
- Bảng rộng có container cuộn ngang riêng, giữ cột hành động dễ tiếp cận nếu cần.
- Dùng `min-height: 100dvh`; không dùng chiều cao viewport cố định làm cắt nội dung.

### Z-index contract

| Layer | Z-index |
| --- | ---: |
| Base content | `0` |
| Sticky navigation | `100` |
| Overlay / Drawer | `200` |
| Modal | `300` |
| Toast | `500` |

Không tự đặt z-index ngoài contract nếu chưa kiểm tra toàn bộ stacking context.

## 4. Components

### Button

- Primary: nền `--color-primary`, chữ trắng, radius `4px`, font-weight `600`.
- Secondary/Ghost: nền trong suốt, border `1px`, chữ primary.
- Danger chỉ dùng cho hành động phá hủy hoặc không thể hoàn tác.
- Hover thay đổi màu vừa đủ và có shadow nhẹ; active dịch xuống `1px` để phản hồi thao tác.
- Button chỉ có icon phải có tooltip và `aria-label`.

### Form và input

- Label luôn nằm phía trên input; không dùng floating label.
- Focus ring: `2px` màu primary, offset `2px`.
- Lỗi hiển thị ngay dưới trường, nêu rõ dữ liệu sai và cách sửa.
- Trường bắt buộc phải được thể hiện bằng chữ/ký hiệu có giải thích, không chỉ đổi màu border.
- Form dài chia theo nhóm thông tin nghiệp vụ, không chia tùy tiện thành nhiều card giống nhau.

### Card và stat block

- Card dùng nền trắng, border mảnh, radius `4–8px` và shadow nhẹ.
- Không biến mọi nội dung thành card; dùng section/divider cho thông tin có quan hệ liên tục.
- Stat block phải có nhãn, giá trị, phạm vi thời gian và đơn vị nếu cần.
- Không dùng ba card bằng nhau như bố cục mặc định nếu dữ liệu không có cùng mức ưu tiên.

### Table

- Header rõ ràng, có thể sort khi nghiệp vụ yêu cầu.
- Dữ liệu số căn phải; nội dung văn bản căn trái; checkbox và icon có thể căn giữa.
- Hành động trên mỗi hàng phải nhất quán về thứ tự: xem, sửa, xóa.
- Có loading skeleton, empty state và error state tương ứng với kích thước bảng.
- Badge trạng thái dùng cùng từ ngữ và màu ở mọi màn hình.

### Navigation

- Sidebar dùng nền charcoal; mục active có chỉ báo primary rõ ràng.
- Mục active dùng font-weight `500`, không dựa vào màu chữ duy nhất.
- Nhóm menu theo nghiệp vụ: tổng quan, học vụ, báo cáo, giao tiếp, quản trị.
- Mobile dùng drawer có overlay và đóng được bằng phím `Escape`.

### Modal, toast và xác nhận

- Modal dùng cho tác vụ tập trung, không dùng thay một trang có form quá dài.
- Tiêu đề modal nêu đúng hành động, ví dụ “Thêm sinh viên”.
- Hành động phụ đứng trước, hành động xác nhận đứng cuối.
- Toast thông báo ngắn gọn điều đã xảy ra; lỗi phải chỉ cách khắc phục.
- Xóa dữ liệu cần xác nhận bằng tên hoặc mã đối tượng cụ thể.

### Loading và empty state

- Dùng skeleton khớp hình dạng nội dung; không dùng spinner tròn cho toàn bộ trang.
- Empty state gồm icon, mô tả nguyên nhân và một hành động tiếp theo nếu phù hợp.
- Không dùng emoji làm icon giao diện; tiếp tục dùng một hệ icon duy nhất. Dự án hiện dùng Bootstrap Icons.

## 5. Motion

- Chỉ animate `transform` và `opacity` khi có thể.
- Phản hồi hover/press: `150–200ms`.
- Chuyển trang hoặc mở panel: tối đa `300ms`.
- Có thể dùng một hiệu ứng vào trang `opacity + translateY(16px)` trong `480ms`, nhưng không lặp lại trên mọi card/section.
- Không tự chạy animation nếu không giúp người dùng nhận biết thay đổi.
- Tôn trọng `prefers-reduced-motion: reduce` và tắt chuyển động không thiết yếu.

## 6. Nội dung giao diện

- Viết tiếng Việt ngắn gọn, chủ động và dễ hiểu với sinh viên, giảng viên, giáo vụ.
- CTA mô tả đúng kết quả: “Lưu sinh viên”, “Xuất bảng điểm”, “Gửi tin nhắn”; không dùng “Submit”.
- Không dùng câu quảng cáo sáo rỗng như “Nâng tầm”, “Liền mạch”, “Thế hệ mới”.
- Không dùng lorem ipsum hoặc dữ liệu cá nhân thật trong demo.
- Empty state hướng dẫn bước tiếp theo; lỗi không xin lỗi chung chung và không dùng thông báo mơ hồ.

## 7. Accessibility và responsive

- Đảm bảo thao tác được bằng bàn phím và focus luôn nhìn thấy.
- Input phải có label; icon-only control phải có accessible name.
- Heading theo đúng thứ bậc, không chọn heading dựa trên kích thước hiển thị.
- Không truyền đạt cảnh báo học tập, đậu/rớt hoặc online/offline chỉ bằng màu.
- Kiểm tra tối thiểu ở `360px`, `768px`, `1024px` và desktop rộng.
- Không có liên kết ảnh ngoài bị hỏng; ưu tiên tài nguyên local hoặc SVG kiểm soát được.

## 8. Những điều không được làm

- Không dùng gradient trang trí, glassmorphism hoặc glow.
- Không dùng shadow nặng hơn `0 2px 8px rgba(0, 0, 0, 0.08)`.
- Không dùng màu đen tuyệt đối hoặc accent quá bão hòa.
- Không dùng emoji thay cho icon hệ thống.
- Không tạo hàng loạt card bằng nhau nếu dữ liệu có mức độ ưu tiên khác nhau.
- Không dùng animation fade-and-slide cho mọi section và hover scale cho mọi card.
- Không thêm thư viện icon, animation hoặc font thứ hai khi chưa có nhu cầu thực tế.
- Không dùng copy mẫu, lorem ipsum hoặc nội dung AI sáo rỗng.


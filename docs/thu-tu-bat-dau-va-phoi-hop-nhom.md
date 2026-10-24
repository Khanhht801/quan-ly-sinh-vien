# Thứ tự bắt đầu và cách phối hợp nhóm

Tài liệu này chuyển [bản phân công](work-assignment-and-technology.md) thành các bước thực hiện cụ thể, dựa trên [đặc tả](dacTa.md). Số thành viên 1–5 tương ứng với bản phân công; nhóm điền tên người nhận khi giao task.

Đây là kế hoạch hướng dẫn, không phải xác nhận các chức năng đã được xây dựng. Flask và SQLite được nhắc theo bản công nghệ hiện tại; cả nhóm cần xác nhận lựa chọn trước khi triển khai backend.

## 1. Mục tiêu đầu tiên

Hoàn thành một luồng nhỏ chạy từ đầu đến cuối:

**Giáo viên đăng nhập → xem danh sách sinh viên K10TIN → thêm sinh viên → thấy dữ liệu mới trong danh sách.**

Luồng này giúp nhóm tập nối giao diện, xử lý Python và database trước khi làm điểm. Giao diện đã vẽ xong hoặc hàm Python chạy riêng mới là hoàn thành một phần; cần nối chúng và kiểm tra thao tác thực tế.

| Phần | Làm gì trong luồng này? | Phụ trách |
|---|---|---|
| Giao diện (frontend) | Hiển thị trang đăng nhập, bảng sinh viên, form và thông báo | Thành viên 4 |
| Xác thực | Kiểm tra tài khoản và ghi nhận người đang đăng nhập | Thành viên 1 |
| Xử lý sinh viên (backend) | Lấy danh sách, kiểm tra dữ liệu và lưu sinh viên | Thành viên 2 |
| Database | Lưu tài khoản, lớp và sinh viên | Thành viên 1 thiết kế, thành viên 2 sử dụng |
| Kiểm thử toàn luồng | Thử thao tác hợp lệ, sai dữ liệu và sai quyền | Thành viên 5 chủ trì |

Thành viên 3 song song chuẩn bị phần môn học và điểm, đồng thời review xác thực theo bản phân công.

## 2. Buổi đầu tiên: thống nhất trước khi code

Thành viên 1 chủ trì, cả nhóm cùng quyết định và ghi lại kết quả trong tài liệu liên quan.

- Xác nhận phạm vi một lớp K10TIN, một học kỳ và hai vai trò giáo viên/sinh viên.
- Liệt kê màn hình cần có, phác thảo vị trí menu, bảng, form và thông báo.
- Chốt trường dữ liệu sinh viên, trường bắt buộc, quy tắc kiểm tra và liên kết với lớp, tài khoản.
- Xác định cách cấp tài khoản và liên kết tài khoản với giáo viên/sinh viên.
- Thống nhất tên trường dùng chung giữa HTML, Python và database.
- Xác nhận stack, cách chạy dự án, cách chia nhánh và người review.
- Giao người chuẩn bị công thức điểm, cách làm tròn, xử lý thiếu điểm, ngưỡng xếp loại và đồng hạng. Các quy tắc này phải được chốt trước khi triển khai tính điểm.

Tên mã sinh viên dùng thống nhất là `student_code` trong form, Python và database. Các tên và giao ước cụ thể ở mục 11 là chuẩn triển khai của kế hoạch này.

**Kết quả buổi họp:** có người nhận từng task, phác thảo giao diện, dữ liệu ban đầu và các quyết định còn chờ chốt. Không cần hoàn thiện mọi chi tiết giao diện mới bắt đầu làm.

## 3. Việc đầu tiên của từng thành viên

### Thành viên 1 — Dựng nền tảng chung

1. Dựng bộ khung Flask theo lựa chọn đã được nhóm xác nhận.
2. Viết hướng dẫn cài đặt và chạy, danh sách thư viện và cấu hình mẫu không chứa secret.
3. Thiết kế database; nhờ thành viên 2 và 3 review các bảng, khóa và liên kết.
4. Viết script tạo database và dữ liệu giả để từng bạn dựng trên máy riêng.
5. Làm đăng nhập, đăng xuất, session và cơ chế kiểm tra vai trò.
6. Gửi phần nền tảng chạy được để review và ghép vào `develop` sớm.

**Bàn giao:** mọi người chạy được cùng dự án, dựng được database riêng và đăng nhập được bằng tài khoản demo. Không chia sẻ file database đang dùng để thay cho script khởi tạo.

Người 1 cung cấp cơ chế kiểm tra quyền; người 2 và 3 phải áp dụng nó trong từng chức năng của mình.

### Thành viên 2 — Danh sách và thêm sinh viên

1. Thống nhất bảng lớp/sinh viên/giáo viên với thành viên 1.
2. Làm hàm lấy danh sách sinh viên lớp K10TIN.
3. Làm xử lý thêm sinh viên, kiểm tra trường bắt buộc, định dạng và trùng mã.
4. Kiểm tra đăng nhập, quyền giáo viên và lớp hợp lệ trước khi lưu.
5. Thống nhất với thành viên 4 cách form gửi dữ liệu và hiển thị kết quả.
6. Kiểm thử dữ liệu hợp lệ, không hợp lệ và truy cập sai quyền.

**Bàn giao:** backend đọc/lưu được sinh viên và cung cấp thông báo lỗi phù hợp cho giao diện.

### Thành viên 3 — Chuẩn bị môn học và quy tắc điểm

1. Review database cùng thành viên 1, đặc biệt quan hệ sinh viên–môn–học kỳ–điểm.
2. Chuẩn bị cấu trúc môn học và phân công giảng dạy.
3. Đề xuất các quy tắc tính điểm để cả nhóm xác nhận, kèm ví dụ đầu vào và kết quả mong đợi.
4. Review phần xác thực/phân quyền của thành viên 1.
5. Khi bộ khung chung sẵn sàng, triển khai quản lý môn học và phân công trước khi nhập điểm.

**Bàn giao:** thiết kế phần học tập đã thống nhất, quy tắc tính có ví dụ kiểm tra và các task tiếp theo rõ ràng. Không tự chọn tỷ lệ điểm hoặc ngưỡng xếp loại khi chưa có quyết định chung.

### Thành viên 4 — Giao diện cho luồng đầu tiên

1. Làm khung chung, menu, bảng, nút, form và thông báo theo `style.md`.
2. Làm trang đăng nhập, danh sách sinh viên và form thêm sinh viên.
3. Khi backend chưa sẵn sàng, dùng dữ liệu giả để dựng giao diện.
4. Nối form đăng nhập với người 1, danh sách/form sinh viên với người 2.
5. Kiểm tra trạng thái danh sách rỗng, lỗi nhập liệu, thành công và trạng thái đang gửi khi phù hợp.
6. Kiểm tra mobile, desktop và bàn phím; bàn giao khung dùng chung cho thành viên 5.

**Bàn giao:** giáo viên thao tác được trên màn hình và nhìn thấy kết quả từ backend.

### Thành viên 5 — Giao diện sinh viên và chuẩn bị kiểm thử

1. Thống nhất với người 4 cách dùng chung layout, bảng và thông báo.
2. Dựng trang thông tin cá nhân sinh viên bằng dữ liệu giả trong lúc chờ backend.
3. Viết checklist kiểm tra luồng đăng nhập → danh sách → thêm sinh viên.
4. Khi các phần đã nối, chạy kiểm thử, ghi lỗi và người phụ trách sửa.
5. Kiểm tra lại lỗi sau khi sửa; chuẩn bị kịch bản demo luồng đầu tiên.

**Bàn giao:** trang sinh viên ban đầu, checklist và kết quả kiểm thử tích hợp. Mỗi thành viên vẫn phải tự kiểm tra phần mình trước khi bàn giao.

## 4. Task nào chờ task nào?

```mermaid
flowchart TD
    A["Cả nhóm chốt dữ liệu và cách kết nối"] --> B["TV1: bộ khung, database, xác thực"]
    A --> C["TV4: khung giao diện và các form"]
    A --> D["TV3: thiết kế môn học, quy tắc điểm"]
    A --> E["TV5: checklist kiểm thử"]
    B --> F["TV2: xử lý danh sách và thêm sinh viên"]
    C --> G["TV5: giao diện sinh viên dùng khung chung"]
    B --> H["TV1 + TV2 + TV4: nối luồng đầu tiên"]
    C --> H
    F --> H
    E --> I["TV5 chủ trì kiểm thử, từng người sửa phần mình"]
    H --> I
    I --> J["Cả nhóm review và demo mốc đầu tiên"]
```

Mũi tên thể hiện đầu vào cần để hoàn thiện phần sau. Trong lúc chờ, frontend có thể dựng bằng dữ liệu giả, backend có thể chuẩn bị logic và test theo cấu trúc đã thống nhất.

## 5. Cách nối giao diện với backend

Người frontend và backend dùng giao ước sau cho chức năng thêm sinh viên; các route còn lại ở mục 11.

| Nội dung | Thỏa thuận cần có |
|---|---|
| Mở form | `GET /students/create`, template `students/create.html` |
| Gửi form | `POST /students/create` |
| Dữ liệu gửi | Các trường trong bảng sinh viên ở mục 11.2, kèm `csrf_token` |
| Quyền | Backend chỉ cho giáo viên thực hiện; ẩn nút trên giao diện chưa đủ |
| Nhập sai | Trả thông báo rõ ràng, giữ dữ liệu phù hợp để sửa |
| Thành công | Quay về danh sách, hiện thông báo và thấy sinh viên mới |
| Bảo vệ form | Có kiểm tra CSRF cho thao tác thay đổi dữ liệu dùng session/cookie |

Theo kiến trúc trong bản phân công, Flask có thể nhận form rồi render HTML trực tiếp. Nhóm chưa cần xây REST API riêng cho luồng này.

## 6. Danh sách task cho mốc đầu tiên

Các mã dưới đây dùng để trao đổi và có thể đưa lên GitHub Issues. Đây là danh sách đề xuất, chưa phải các issue đã được tạo.

| Mã | Task | Người chính | Review | Phụ thuộc | Điều kiện hoàn thành |
|---|---|---|---|---|---|
| START-01 | Thống nhất phạm vi, dữ liệu và màn hình | TV1 | Cả nhóm | Không | Có quyết định và người nhận task |
| START-02 | Dựng bộ khung và hướng dẫn chạy | TV1 | TV3 | START-01 | Các thành viên chạy được cùng dự án |
| START-03 | Script database và dữ liệu giả | TV1 | TV2, TV3 | START-01, START-02 | Tạo được database mới từ script |
| START-04 | Đăng nhập, đăng xuất và kiểm tra vai trò | TV1 | TV3 | START-03 | Đúng/sai tài khoản và sai quyền được xử lý |
| START-05 | Khung giao diện và trang đăng nhập | TV4 | TV2, TV5 | START-01 | Giao diện dùng được; nối đăng nhập khi START-04 sẵn sàng |
| START-06 | Backend danh sách và thêm sinh viên | TV2 | TV1, TV4 | START-03, START-04 | Đọc/lưu được, chặn sai dữ liệu và sai quyền |
| START-07 | Bảng danh sách và form thêm sinh viên | TV4 | TV2, TV5 | START-05 | Có đủ trạng thái; nối backend khi START-06 sẵn sàng |
| START-08 | Thiết kế môn học, phân công và quy tắc điểm | TV3 | TV1, TV4 | START-01 | Có thiết kế, ví dụ và quy tắc được nhóm xác nhận |
| START-09 | Trang cá nhân sinh viên ban đầu | TV5 | TV3, TV4 | Khung chung của START-05 | Dùng lại layout, dữ liệu giả được ghi rõ |
| START-10 | Kiểm thử và demo luồng đầu tiên | TV5 | Cả nhóm | START-04, START-06, START-07 đã nối | Checklist đạt, lỗi cản trở luồng đã được sửa |

Một task nên có: mục tiêu, người phụ trách, đầu vào cần nhận, sản phẩm bàn giao, điều kiện hoàn thành và cách kiểm tra. Nếu task quá lớn, tách theo hành vi như xem danh sách và thêm sinh viên.

## 7. Kiểm tra trước khi công nhận mốc đầu tiên hoàn thành

- [ ] Cả năm thành viên dựng và chạy được dự án theo hướng dẫn.
- [ ] Giáo viên đăng nhập đúng thì vào được; nhập sai có thông báo.
- [ ] Đăng xuất xong không tiếp tục truy cập trang cần đăng nhập.
- [ ] Chưa đăng nhập không xem được danh sách dành cho giáo viên.
- [ ] Sinh viên không mở được danh sách toàn lớp hoặc thêm sinh viên, kể cả gửi yêu cầu trực tiếp.
- [ ] Danh sách rỗng có thông báo phù hợp.
- [ ] Thêm hợp lệ thành công, tải lại trang vẫn có dữ liệu.
- [ ] Thiếu trường bắt buộc, sai định dạng, trùng mã hoặc lớp không hợp lệ đều bị từ chối ở backend.
- [ ] Form thay đổi dữ liệu có bảo vệ CSRF; thao tác quan trọng được ghi nhật ký theo đặc tả.
- [ ] Giao diện sử dụng được ở mobile/desktop, bằng bàn phím và không có lỗi console liên quan.
- [ ] Test liên quan đã chạy; phần chưa kiểm tra được được ghi rõ.
- [ ] Thay đổi đã được người khác review, ghép vào `develop` và kiểm tra lại sau khi ghép.

Khi ghi lỗi, nêu tài khoản/vai trò thử, các bước tái hiện, kết quả mong đợi, kết quả thực tế và người nhận sửa. Chỉ dùng dữ liệu giả trong minh họa.

## 8. Sau mốc đầu tiên, làm tiếp theo thứ tự nào?

| Mốc | Phần hoàn thiện | Phối hợp chính | Kết quả để demo |
|---|---|---|---|
| 2 | Sửa/xóa/tìm kiếm sinh viên, quản lý lớp và giáo viên | TV2 + TV4 | Quản lý được dữ liệu nền; xóa có xác nhận và bảo đảm liên kết dữ liệu |
| 3 | Môn học và phân công giảng dạy | TV3 + TV4 | Giáo viên xem được môn mình phụ trách |
| 4 | Nhập/sửa điểm theo môn được phân công | TV3 + TV4 | Lưu và tính điểm đúng; chặn sửa môn ngoài phân công |
| 5 | Thông tin cá nhân và kết quả của sinh viên | TV2 + TV3 + TV5 | Sinh viên chỉ xem được dữ liệu của mình |
| 6 | Trung bình, xếp loại, thứ hạng và báo cáo | TV3 + TV4 + TV5 | Kết quả đúng với ví dụ đã chốt; giao diện phù hợp từng vai trò |
| 7 | Hoàn thiện tài khoản, kiểm thử, sao lưu/phục hồi, tài liệu và demo | TV1 điều phối, cả nhóm thực hiện | Các luồng chính chạy đồng bộ và sẵn sàng trình bày |

Kiểm tra quyền, kiểm tra dữ liệu và ghi nhật ký phải làm cùng chức năng tương ứng. Phần đổi mật khẩu thuộc TV1 xử lý và TV4 làm giao diện dùng chung, cần hoàn thành trước nghiệm thu.

Với các đầu việc bản phân công chưa ghi rõ, đề xuất cả nhóm xác nhận: TV4 làm giao diện báo cáo giáo viên, TV1 chủ trì cơ chế nhật ký và sao lưu/phục hồi; TV2–3 tích hợp nhật ký vào thao tác của mình, TV5 kiểm tra. Đây là đề xuất phối hợp để đáp ứng đặc tả.

## 9. Cách giao và ghép việc hằng ngày

1. Chọn task có đầu vào sẵn sàng, cập nhật `develop` và tạo nhánh riêng theo [hướng dẫn GitHub](huong-dan-github-lam-viec-nhom.md).
2. Thống nhất với người liên quan trước khi đổi cấu trúc dữ liệu, tên trường, route hoặc component chung.
3. Làm task, tự kiểm tra và commit rõ nội dung.
4. Push nhánh, mở PR vào `develop`, mô tả đã làm gì và đã kiểm tra gì.
5. Người được giao review kiểm tra; tác giả sửa nếu cần rồi mới merge.
6. Mọi người lấy bản đã ghép về; kiểm tra lại luồng liên quan.

Mỗi bạn cập nhật ngắn: đã xong gì, đang làm gì, đang chờ ai và sẽ bàn giao gì tiếp theo. Giao phần việc cụ thể cho từng người; dùng chung một dự án Flask và các script dựng database, tránh mỗi bạn tạo một ứng dụng riêng.

## 10. Chuẩn bị demo

- Demo đầy đủ: chạy Flask và SQLite theo hướng dẫn trên máy nhóm, hoặc môi trường hỗ trợ backend được nhóm thống nhất.
- Demo trên GitHub Pages: chỉ là giao diện tĩnh với dữ liệu giả; ghi rõ các thao tác mô phỏng. Không dùng bản này để kết luận backend đã hoạt động.
- TV5 chuẩn bị kịch bản và tài liệu; TV1 chủ trì tích hợp, cả nhóm kiểm tra phần mình trước buổi trình bày.

Mốc bắt đầu nên được ưu tiên là: **cả nhóm chạy được cùng dự án và hoàn thành đăng nhập → xem danh sách → thêm sinh viên**. Dùng các mốc trên để theo dõi tiến độ đến hạn 01/12/2026; nhóm tự gán ngày và người nhận theo thời gian thực tế.

## 11. Tên gọi và giao ước dùng chung

Phần này chốt tên kỹ thuật và cách bàn giao theo yêu cầu thống nhất. Đây là quy ước cho mã sẽ viết, chưa tạo bảng hoặc thay đổi mã nguồn thực tế. Tên thật của năm thành viên chưa có nên tiếp tục dùng TV1–TV5; không tự gán tên người.

### 11.1. Tên module và vai trò

| Nghiệp vụ | Tên dùng trong code/URL | Backend | Giao diện |
|---|---|---|---|
| Xác thực | `auth` | TV1 | TV4 |
| Tài khoản cá nhân | `account` | TV1 | TV4, TV5 dùng lại |
| Lớp | `classes` | TV2 | TV4 |
| Sinh viên | `students` | TV2 | TV4 quản lý, TV5 xem cá nhân |
| Giáo viên | `teachers` | TV2 | TV4 |
| Môn học | `subjects` | TV3 | TV4 |
| Phân công giảng dạy | `teaching_assignments` trong Python/SQL, `teaching-assignments` trong URL | TV3 | TV4 |
| Điểm | `grades` | TV3 | TV4 nhập, TV5 xem |
| Kết quả và báo cáo | `reports` | TV3 | TV4 cho giáo viên, TV5 cho sinh viên |

Vai trò lưu trong code/database là `teacher` và `student`; giao diện hiển thị “Giáo viên” và “Sinh viên”. Không thêm vai trò quản trị ngoài đặc tả. Không dùng xen kẽ `pupils` với `students`, `courses` với `subjects` hoặc `scores` với `grades` để gọi cùng module.

### 11.2. Trường dữ liệu và form

Python, SQL và thuộc tính HTML `name` dùng `snake_case`. JavaScript dùng biến `camelCase`, ví dụ biến `studentCode` đọc từ trường `student_code`. Khóa nội bộ dùng số nguyên; mã nghiệp vụ dùng chuỗi, không lấy mã nghiệp vụ làm số để tránh mất số 0 đầu.

| Bảng | Khóa chính | Trường thống nhất |
|---|---|---|
| `classes` | `class_id` | `class_code`, `class_name`, `major_name` |
| `students` | `student_id` | `student_code`, `full_name`, `date_of_birth`, `gender`, `phone_number`, `email`, `class_id` |
| `teachers` | `teacher_id` | `teacher_code`, `full_name`, `email` |
| `semesters` | `semester_id` | `semester_code`, `semester_name`, `academic_year`, `start_date`, `end_date` |
| `subjects` | `subject_id` | `subject_code`, `subject_name`, `credits` |
| `teaching_assignments` | `assignment_id` | `teacher_id`, `subject_id`, `class_id`, `semester_id` |
| `grades` | `grade_id` | `student_id`, `assignment_id`, `continuous_score`, `exam_score`, `final_score`, `updated_by_user_id`, `updated_at` |
| `users` | `user_id` | `username`, `password_hash`, `role`, `is_active`, `student_id`, `teacher_id` |
| `audit_logs` | `audit_log_id` | `actor_user_id`, `action`, `entity_type`, `entity_id`, `created_at` |

- Mã lớp, sinh viên, giáo viên, học kỳ, môn học và `username` phải duy nhất trong bảng tương ứng.
- Mỗi tài khoản liên kết đúng một hồ sơ phù hợp vai trò: `student_id` hoặc `teacher_id`; một hồ sơ không có nhiều tài khoản. TV1 kiểm soát ràng buộc này khi tạo schema và cấp tài khoản.
- Một phân công xác định một lớp–môn–học kỳ và giáo viên phụ trách. Trong phạm vi đề tài, bộ `class_id`, `subject_id`, `semester_id` là duy nhất. Điểm duy nhất theo cặp `student_id`, `assignment_id`; backend kiểm tra sinh viên thuộc lớp của phân công.
- Mã lớp nghiệp vụ là `K10TIN`; không mặc định `class_id = 1` vì khóa nội bộ có thể khác giữa các máy.
- Form sinh viên bắt buộc: `student_code`, `full_name`, `date_of_birth`, `gender`, `class_id`. `phone_number`, `email` có thể để trống; nếu nhập phải hợp lệ. `gender` nhận `male`, `female`, `other`, hiển thị lần lượt Nam, Nữ, Khác.
- Ngày gửi dạng `YYYY-MM-DD`, ngày sinh không ở tương lai. Số điện thoại là chuỗi. Chuỗi nhập được bỏ khoảng trắng đầu/cuối; mã nghiệp vụ chuẩn hóa chữ hoa, email chuẩn hóa chữ thường.
- Form đăng nhập gửi `username`, `password`, `csrf_token`; không tự cắt khoảng trắng trong mật khẩu. Form đổi mật khẩu gửi `current_password`, `new_password`, `confirm_password`, `csrf_token`.
- `password_hash`, vai trò, người cập nhật và thời gian cập nhật do backend quản lý. Form không được tự quyết định quyền hoặc danh tính người thao tác.
- Trường điểm nhận số hoặc giá trị chưa nhập; thiếu điểm không tự chuyển thành 0. `final_score` và kết quả học kỳ do backend tính; thang điểm, tỷ lệ và ngưỡng xếp loại cần xác nhận theo mục 11.6.
- Kết quả tổng hợp truyền sang template dùng tên `semester_average`, `classification`, `class_rank`, `student_count`. Chưa tạo bảng kết quả riêng khi có thể tính từ điểm.

### 11.3. Route và màn hình

Các đường dẫn dưới đây là route Flask render HTML, không mang tiền tố `/api`. Mọi POST thay đổi dữ liệu phải kiểm tra CSRF và quyền ở backend.

| Method và URL | Chức năng | Quyền | Backend / giao diện |
|---|---|---|---|
| `GET, POST /login` | Mở form / xử lý đăng nhập | Chưa đăng nhập | TV1 / TV4 |
| `POST /logout` | Đăng xuất | Đã đăng nhập | TV1 / TV4 |
| `GET /account` | Xem tài khoản của mình | Đã đăng nhập | TV1 / TV4 |
| `GET, POST /account/change-password` | Mở form / đổi mật khẩu | Đã đăng nhập | TV1 / TV4 |
| `GET /students` | Danh sách, tìm bằng `q` | Giáo viên | TV2 / TV4 |
| `GET, POST /students/create` | Mở form / thêm sinh viên | Giáo viên | TV2 / TV4 |
| `GET /students/<int:student_id>` | Xem chi tiết sinh viên | Giáo viên | TV2 / TV4 |
| `GET, POST /students/<int:student_id>/edit` | Mở form / sửa sinh viên | Giáo viên | TV2 / TV4 |
| `POST /students/<int:student_id>/delete` | Xóa sau xác nhận | Giáo viên | TV2 / TV4 |
| `GET /classes`, `GET /teachers`, `GET /subjects` | Danh sách và tìm kiếm bằng `q` | Giáo viên | TV2 cho lớp/GV, TV3 cho môn / TV4 |
| `GET /teaching-assignments` | Danh sách phân công | Giáo viên | TV3 / TV4 |
| `GET, POST /grades/<int:assignment_id>/edit` | Xem bảng / lưu điểm | Giáo viên được phân công | TV3 / TV4 |
| `GET /reports` | Thống kê học kỳ | Giáo viên | TV3 / TV4 |
| `GET /me/profile` | Hồ sơ sinh viên đang đăng nhập | Sinh viên | TV2 / TV5 |
| `GET /me/grades` | Điểm và kết quả của sinh viên đang đăng nhập | Sinh viên | TV3 / TV5 |

Các module `classes`, `teachers`, `subjects`, `teaching-assignments` dùng cùng mẫu CRUD: `GET, POST /<module>/create`, `GET /<module>/<int:id>`, `GET, POST /<module>/<int:id>/edit`, `POST /<module>/<int:id>/delete`. Trong code thay `id` bằng `class_id`, `teacher_id`, `subject_id`, `assignment_id` tương ứng. Môn đã có phân công hoặc dữ liệu liên quan không được xóa gây mất liên kết; backend trả lỗi nghiệp vụ rõ ràng.

Danh sách phân công có bộ lọc `mine=1` để giáo viên xem môn mình phụ trách; backend lấy giáo viên từ tài khoản đang đăng nhập. Báo cáo và trang điểm dùng `semester_id` để chọn học kỳ, backend xác minh học kỳ hợp lệ. Sinh viên xem thứ hạng của mình, không được trả kèm hồ sơ hoặc bảng điểm của người khác.

Sau đăng nhập: giáo viên chuyển đến `/students`, sinh viên chuyển đến `/me/grades`. Trang `/me/*` lấy `student_id` từ tài khoản, không nhận mã sinh viên do trình duyệt gửi để chọn người cần xem.

### 11.4. Tên file và cách bàn giao template

Tên template tương đối với thư mục template chung:

| Template | Người chính | Dữ liệu backend truyền |
|---|---|---|
| `base.html` | TV4 | `current_user`, thông báo chung |
| `auth/login.html` | TV4 | `form_values`, `errors` |
| `account/detail.html`, `account/change-password.html` | TV4 | `current_user`, `form_values`, `errors` khi có form |
| `students/list.html` | TV4 | `students`, `q` |
| `students/create.html`, `students/edit.html` | TV4 | `form_values`, `errors`, `classes` |
| `students/detail.html` | TV4 | `student` |
| `grades/edit.html` | TV4 | `assignment`, `grade_rows`, `errors` |
| `reports/overview.html` | TV4 | `semester`, dữ liệu thống kê của TV3 |
| `me/profile.html` | TV5 | `student` |
| `me/grades.html` | TV5 | `grade_rows`, `semester_average`, `classification`, `class_rank` |

Module lớp, giáo viên, môn và phân công dùng cùng mẫu `<module>/list.html`, `create.html`, `edit.html`, `detail.html`; thư mục template phân công là `teaching-assignments`. TV4 sở hữu layout/component chung; TV5 dùng lại và trao đổi trước khi sửa chúng.

`form_values` là bộ giá trị để điền lại form; `errors` ánh xạ tên trường sang thông báo tiếng Việt, lỗi chung dùng khóa `form`. Không truyền mật khẩu hoặc hash vào giá trị điền lại. Các dòng `grade_rows` dùng khóa `student_id`, `student_code`, `full_name`, `subject_name`, `continuous_score`, `exam_score`, `final_score` khi phù hợp màn hình; dữ liệu chưa có hiển thị “Chưa có điểm”.

File web dùng `kebab-case`, ví dụ `student-form.js`, `student-form.css`; module Python dùng `snake_case`, ví dụ `teaching_assignments.py`. Chỉ tạo file khi cần thực tế. Vị trí thư mục backend/template được xác định lúc dựng Flask theo convention chung; không di chuyển homepage hoặc tạo hàng loạt thư mục trước bước đó.

### 11.5. Phản hồi và nhánh làm việc

- Chưa đăng nhập: chuyển đến `/login`. Đã đăng nhập nhưng sai quyền: trả trang lỗi HTTP 403. Đối tượng không tồn tại: HTTP 404.
- Form sai dữ liệu: render lại form với HTTP 400, `errors` và `form_values`. Lỗi CSRF trả HTTP 400. Đăng nhập sai dùng thông báo chung “Tên đăng nhập hoặc mật khẩu không đúng”.
- POST thành công: chuyển hướng HTTP 303 đến trang kết quả để tải lại trang không gửi form lần nữa; hiển thị thông báo thành công.
- Thông báo dùng các loại `success`, `error`, `info`; giao diện dịch nội dung sang tiếng Việt và escape dữ liệu khi render.
- Task dùng mã `START-01`…`START-10` như mục 6; nhánh theo mẫu `feature/start-06-student-backend`. Một task có một người chịu trách nhiệm chính, người review theo bảng; không đặt nhánh chỉ theo tên thành viên.
- Nhật ký dùng `action` là `create`, `update`, `delete`, `change_password`; `entity_type` theo tên bảng. Không ghi mật khẩu, hash hoặc secret vào nhật ký.

### 11.6. Phần cần quyết định nghiệp vụ trước khi viết tính điểm

Tên kỹ thuật và đường dẫn ở trên đã được thống nhất trong kế hoạch. Các thông số sau chưa có trong đặc tả, nên TV3 chuẩn bị đề xuất và TV1 cùng nhóm xác nhận trước khi triển khai:

| Cần quyết định | Kết quả phải ghi lại |
|---|---|
| Thang điểm và công thức môn | Khoảng điểm hợp lệ, trọng số thường xuyên/thi, số đầu điểm |
| Làm tròn | Số chữ số, thời điểm làm tròn và ví dụ |
| Điểm trung bình học kỳ | Công thức theo tín chỉ/hệ số, cách xử lý môn thiếu điểm |
| Xếp loại và thứ hạng | Ngưỡng từng loại, cách xử lý đồng hạng và kết quả chưa đủ điểm |

Không tự gán các giá trị như 30%/70% hay ngưỡng Giỏi khi đặc tả chưa quy định. Những phần này không cản trở việc bắt đầu đăng nhập, danh sách và thêm sinh viên theo giao ước đã chốt.

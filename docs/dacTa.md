# Đặc tả Website quản lý kết quả học tập

- **Nhóm:** Nhóm 2
- **Đề tài:** Website quản lý kết quả học tập
- **Phạm vi:** Lớp K10TIN (quản lý trong phạm vi 01 học kỳ)
- **Hạn hoàn thành:** 01/12/2026

## 1. Mô tả bài toán

Website quản lý kết quả học tập của lớp trong một học kỳ. Hệ thống hỗ trợ quản lý sinh viên, môn học, điểm số, kết quả học tập.

## 2. Đối tượng sử dụng và phân quyền

- **Giáo viên:** Đăng nhập để quản lý thông tin lớp K10TIN, sinh viên, môn học và phân công giảng dạy; thực hiện nhập/sửa điểm số (điểm thường xuyên, điểm thi) đối với môn học được phân công giảng dạy; xem báo cáo, thống kê kết quả học tập.
- **Sinh viên:** Đăng nhập để xem thông tin cá nhân; theo dõi điểm số chi tiết từng môn; xem kết quả xếp loại học tập cuối kỳ của chính mình (chế độ Chỉ xem - Read-only).

## 3. Chức năng chính

### 3.1. Chức năng đăng nhập, đăng xuất và phân quyền

- Cho phép giáo viên và sinh viên đăng nhập vào hệ thống bằng tài khoản được cấp.
- Cho phép người dùng đăng xuất khỏi hệ thống sau khi sử dụng.
- Phân quyền truy cập theo từng vai trò, đảm bảo người dùng chỉ được sử dụng các chức năng phù hợp với quyền hạn của mình.
- Giáo viên được quản lý điểm của các môn học được phân công; sinh viên chỉ được xem thông tin và kết quả học tập của bản thân.
- Kiểm tra tính hợp lệ của tài khoản và mật khẩu, thông báo khi đăng nhập không thành công.

### 3.2. Chức năng quản lý sinh viên

- Thêm, sửa, xóa, tìm kiếm và xem thông tin sinh viên.
- Giáo viên được thêm, sửa hoặc xóa sinh viên; sinh viên chỉ được xem thông tin của bản thân.
- Quản lý các thông tin: mã sinh viên, họ tên, ngày sinh, giới tính, số điện thoại, email và lớp học.
- Kiểm tra dữ liệu nhập vào, tránh trùng mã sinh viên hoặc thiếu các thông tin bắt buộc.
- Cho phép sinh viên xem thông tin cá nhân của mình.

### 3.3. Chức năng quản lý lớp

- Tạo và quản lý danh mục lớp K10TIN.
- Giáo viên được cập nhật thông tin lớp và quản lý danh sách sinh viên thuộc lớp.
- Lưu trữ thông tin mã lớp, tên lớp và các thông tin liên quan.
- Quản lý danh sách sinh viên thuộc lớp.
- Hỗ trợ tìm kiếm và xem danh sách sinh viên của lớp.
- Đảm bảo dữ liệu sinh viên được liên kết đúng với lớp học.

### 3.4. Chức năng quản lý môn học và giáo viên

- Thêm, sửa, xóa và tìm kiếm thông tin môn học trong học kỳ.
- Quản lý thông tin môn học gồm mã môn, tên môn và các thông tin liên quan.
- Quản lý thông tin giáo viên gồm mã giáo viên, họ tên và email.
- Phân công giáo viên phụ trách từng môn học.
- Giáo viên được quản lý thông tin giáo viên, môn học và phân công giảng dạy.
- Cho phép giáo viên xem danh sách các môn học được phân công giảng dạy.
- Đảm bảo việc nhập và chỉnh sửa điểm chỉ được thực hiện đối với môn học thuộc phạm vi giảng dạy của giáo viên.

### 3.5. Chức năng quản lý điểm

- Cho phép giáo viên xem danh sách sinh viên của lớp K10TIN theo môn học được phân công.
- Nhập và cập nhật điểm thường xuyên, điểm thi của từng sinh viên.
- Tự động tính điểm tổng kết môn học theo công thức được thiết lập trong hệ thống.
- Kiểm tra tính hợp lệ của điểm số, đảm bảo điểm nằm trong thang điểm quy định.
- Lưu trữ và hiển thị chi tiết điểm số theo từng sinh viên và từng môn học.
- Cho phép sinh viên xem điểm của bản thân nhưng không được tự ý chỉnh sửa dữ liệu.

### 3.6. Chức năng thống kê và xếp loại kết quả học tập

- Thống kê số lượng sinh viên của lớp K10TIN.
- Thống kê điểm số theo từng môn học và từng sinh viên.
- Tính điểm trung bình học kỳ theo công thức được thiết lập, có xét đến hệ số hoặc số tín chỉ của môn học.
- Xếp loại thứ hạng sinh viên trong lớp dựa trên điểm tổng kết cuối kỳ.
- Thống kê số lượng và tỷ lệ sinh viên theo từng mức xếp loại (Xuất sắc, giỏi, khá, trung bình, yếu).
- Cho phép giáo viên xem các báo cáo, thống kê thuộc phạm vi được phân quyền.
- Cho phép sinh viên xem điểm trung bình, kết quả xếp loại và thông tin học tập của chính mình.

### 3.7. Chức năng tài khoản cá nhân

- Liên kết tài khoản với thông tin giáo viên hoặc sinh viên tương ứng.
- Cho phép người dùng xem thông tin tài khoản và thay đổi mật khẩu của chính mình.
- Phân quyền sử dụng hệ thống theo hai loại tài khoản: giáo viên và sinh viên.
- Người dùng không được tự thay đổi vai trò của tài khoản.
- Đảm bảo người dùng không thể truy cập dữ liệu hoặc thực hiện thao tác vượt quá quyền hạn.

## 4. Yêu cầu phi chức năng

### 4.1. Yêu cầu về giao diện

- Giao diện đơn giản, trực quan, dễ sử dụng và phù hợp với giáo dục.
- Các chức năng được bố trí rõ ràng, thuận tiện cho việc tìm kiếm và thao tác.
- Hỗ trợ hiển thị trên máy tính, điện thoại và các thiết bị có kích thước màn hình khác nhau.

### 4.2. Yêu cầu về hiệu năng

- Hệ thống xử lý các thao tác thông thường như đăng nhập, tìm kiếm, nhập điểm và xem kết quả trong thời gian hợp lý.
- Dữ liệu được tính toán chính xác, hạn chế sai sót khi cập nhật và thống kê.

### 4.3. Yêu cầu về bảo mật

- Mật khẩu người dùng phải được lưu trữ an toàn bằng phương pháp băm mật khẩu phù hợp, không lưu dưới dạng văn bản thuần.
- Kiểm soát quyền truy cập theo vai trò và xác minh quyền đối với từng thao tác dữ liệu.
- Các thao tác cập nhật dữ liệu quan trọng phải được ghi nhật ký gồm tài khoản thực hiện, hành động, đối tượng bị tác động và thời gian thực hiện.
- Ngăn chặn việc sinh viên xem hoặc chỉnh sửa điểm số của người khác.
- Ngăn chặn việc giáo viên chỉnh sửa điểm của các môn học không được phân công.
- Bảo vệ dữ liệu cá nhân, điểm số khỏi truy cập trái phép.
- Có cơ chế kiểm tra dữ liệu đầu vào và xử lý các thao tác không hợp lệ.

### 4.4. Yêu cầu về tính chính xác và toàn vẹn dữ liệu

- Mỗi sinh viên, giáo viên, môn học và tài khoản có mã định danh phù hợp, không bị trùng lặp.
- Dữ liệu điểm số và kết quả học tập phải được liên kết chính xác với sinh viên và môn học.
- Các thao tác thêm, sửa, xóa dữ liệu phải đảm bảo tính nhất quán của cơ sở dữ liệu.
- Công thức tính điểm và quy tắc xếp loại phải được xác định rõ ràng trước khi áp dụng.
- Hạn chế mất mát dữ liệu và hỗ trợ sao lưu, phục hồi dữ liệu khi cần thiết.

### 4.5. Yêu cầu về khả năng mở rộng và bảo trì

- Thiết kế hệ thống theo cấu trúc rõ ràng, thuận tiện cho việc sửa lỗi và bổ sung chức năng.
- Có khả năng mở rộng để quản lý thêm lớp học, học kỳ, môn học hoặc người dùng trong tương lai.
- Cho phép điều chỉnh công thức tính điểm và tiêu chí xếp loại khi có yêu cầu.
- Mã nguồn và cơ sở dữ liệu được tổ chức hợp lý, thuận tiện cho việc phát triển và bảo trì.

## 5. Dữ liệu quản lý

### 5.1. Dữ liệu sinh viên

Bao gồm các thông tin:

- Mã sinh viên.
- Họ và tên.
- Ngày sinh.
- Giới tính.
- Số điện thoại.
- Email.
- Mã lớp.
- Thông tin tài khoản liên kết.

### 5.2. Dữ liệu lớp

Bao gồm: Mã lớp, tên lớp, tên ngành và các thông tin liên quan.

Trong phạm vi đề tài, hệ thống tập trung quản lý lớp K10TIN. Thông tin ngành được sử dụng để tổ chức, liên kết dữ liệu khi cần thiết.

### 5.3. Dữ liệu giáo viên

Bao gồm:

- Mã giáo viên.
- Họ và tên.
- Email.
- Thông tin tài khoản liên kết.
- Danh sách môn học được phân công giảng dạy.

### 5.4. Dữ liệu môn học

Bao gồm:

- Mã môn học.
- Tên môn học.
- Số tín chỉ.
- Học kỳ tổ chức môn học.
- Giáo viên phụ trách.

### 5.5. Dữ liệu học kỳ

Bao gồm:

- Mã học kỳ.
- Tên học kỳ.
- Năm học.
- Thời gian bắt đầu và kết thúc.

Dữ liệu học kỳ giúp xác định phạm vi quản lý kết quả học tập của sinh viên trong kỳ được lựa chọn.

### 5.6. Dữ liệu điểm số

Bao gồm:

- Mã sinh viên.
- Mã môn học.
- Điểm thường xuyên.
- Điểm thi.
- Điểm tổng kết môn học.
- Thông tin giáo viên nhập hoặc cập nhật điểm.
- Thời gian cập nhật dữ liệu nếu cần theo dõi lịch sử chỉnh sửa.

Điểm số được lưu trữ theo từng sinh viên, từng môn học và học kỳ tương ứng.

### 5.7. Dữ liệu kết quả học tập

Bao gồm:

- Mã sinh viên.
- Học kỳ.
- Điểm trung bình học kỳ.
- Kết quả xếp loại.
- Các thông tin tổng hợp phục vụ thống kê.

Kết quả học tập được tính toán từ dữ liệu điểm của các môn học theo quy tắc đã thiết lập trong hệ thống.

### 5.8. Dữ liệu tài khoản và phân quyền

Bao gồm:

- Mã tài khoản.
- Tên đăng nhập.
- Mật khẩu đã được băm.
- Vai trò người dùng.
- Trạng thái tài khoản.
- Mã sinh viên hoặc mã giáo viên tương ứng nếu có.

Dữ liệu này phục vụ việc xác thực người dùng và kiểm soát quyền truy cập vào hệ thống.

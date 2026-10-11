# Hệ thống quản lý sinh viên Khoa Công nghệ Thông tin

Website hỗ trợ quản lý sinh viên, lớp/ngành, môn học, điểm số, thống kê, cảnh báo học tập và giao tiếp trực tuyến trong Khoa Công nghệ Thông tin.

## Trạng thái hiện tại

Dự án đang ở giai đoạn prototype frontend tĩnh, triển khai được bằng GitHub Pages. Backend và hệ quản trị cơ sở dữ liệu chưa được chốt.

## Chạy dự án

Mở `index.html` trực tiếp hoặc chạy một static server tại thư mục gốc:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Cấu trúc hiện tại

```text
.
├── index.html                         # Entry point/GitHub Pages
├── style.md                           # Style guide
├── public-home/
│   ├── css/style.css                  # Style của ứng dụng
│   └── js/main.js                     # Logic prototype
├── docs/
│   └── project-specification.md       # SRS phiên bản hiện hành
├── AGENTS.md                          # Quy tắc làm việc cho agent
└── README.md
```

Thư mục chỉ được tạo khi có nội dung thực tế. Các nhóm dự kiến khi dự án phát triển gồm:

- `pages/`: trang/module sinh viên, lớp-ngành, môn học-điểm, báo cáo, giao tiếp và tài khoản.
- `assets/`: tài nguyên dùng chung như SVG, video và PDF.
- `database/`: migration và seed sau khi chốt hệ quản trị cơ sở dữ liệu.
- `server/`: backend sau khi nhóm chọn framework.
- `tests/`: kiểm thử theo module nghiệp vụ.

## Phân hệ chính

1. Quản lý sinh viên.
2. Quản lý lớp học và ngành học.
3. Quản lý môn học và điểm số.
4. Quản lý người dùng và phân quyền.
5. Thống kê và xuất báo cáo.

Các tính năng mở rộng gồm cảnh báo học tập sớm, chat giảng viên–sinh viên, chat sinh viên–sinh viên, diễn đàn, gamification, portfolio, Study Buddy, PWA và QR Code.

Xem yêu cầu đầy đủ tại [docs/project-specification.md](docs/project-specification.md).


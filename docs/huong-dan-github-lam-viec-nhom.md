# Làm việc nhóm trên GitHub — Hướng dẫn ngắn

## 1. Những từ cần biết

| Từ | Hiểu đơn giản |
|---|---|
| Git | Công cụ lưu lịch sử thay đổi trên máy |
| GitHub | Nơi lưu và cùng làm dự án trên mạng |
| Repository (repo) | Dự án cùng lịch sử thay đổi |
| Local / remote | Bản ở máy / bản ở nơi khác, ở đây là GitHub |
| origin | Tên gọi tắt cho địa chỉ repo GitHub khi clone |
| Branch | Nhánh để làm một công việc riêng |
| Commit | Lưu một mốc thay đổi ở máy |
| Push / pull | Gửi commit lên / lấy thay đổi về máy |
| Pull request (PR) | Đề nghị ghép nhánh mình vào nhánh chung |
| Review / merge | Kiểm tra thay đổi / ghép thay đổi |

**Lưu file ≠ commit ≠ push.** Xóa file ở máy mà chưa commit và push thì GitHub vẫn còn file đó.

## 2. Làm việc nhóm từ đầu đến cuối

Mỗi người cần có tài khoản GitHub và cài [Git](https://git-scm.com/downloads). Các lệnh chạy trong terminal của VS Code.

### Bước 1 — Nhóm trưởng tạo repo

Trên GitHub: **New repository** → đặt tên → tích tạo **README.md** → **Create repository**.

Dự án mình đã có [repo chung](https://github.com/Khanhht801/quan-ly-sinh-vien), nên bỏ qua bước này.

### Bước 2 — Nhóm trưởng mời thành viên

Vào repo → **Settings → Collaborators → Add people** → nhập tài khoản từng bạn. Thành viên mở thông báo hoặc email và **chấp nhận lời mời**.

### Bước 3 — Nhóm trưởng tạo develop

Trên trang **Code**, mở ô chọn nhánh `main` → nhập `develop` → chọn tạo nhánh từ `main`.

Chỉ tạo **một develop chung cho cả nhóm**. `main` giữ bản ổn định; `develop` dùng để ghép công việc.

### Bước 4 — Thành viên clone về máy

Mở terminal tại thư mục muốn lưu dự án:

```bash
git clone https://github.com/Khanhht801/quan-ly-sinh-vien.git  # Lấy dự án về máy.
cd quan-ly-sinh-vien                                       # Vào thư mục dự án.
git config user.name "Ten cua ban"                         # Đặt tên tác giả commit.
git config user.email "email-cua-ban@example.com"           # Đặt email tác giả commit.
```

Thay tên/email bằng thông tin của mình. Đã clone rồi thì mở thư mục cũ, không clone lại. Cấu hình tên/email không phải đăng nhập; khi cần xác thực, làm theo hướng dẫn trên máy. Xem [hướng dẫn xác thực GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

### Bước 5 — Cập nhật develop rồi tạo nhánh riêng

Ví dụ An làm bài giới thiệu; các bạn thay `an` bằng tên không dấu của mình. Trước khi đổi nhánh, hoàn tất và commit việc đang dở trên đúng nhánh.

```bash
git status                              # Xem nhánh hiện tại và file đang sửa.
git fetch origin                        # Lấy thông tin mới từ GitHub, chưa đổi file ở máy.
git switch develop                      # Chuyển sang develop ở máy.
git pull --ff-only origin develop        # Cập nhật develop bằng bản mới nhất trên GitHub.
git switch -c feature/gioi-thieu-an       # Tạo nhánh riêng từ develop rồi chuyển sang đó.
```

Nhóm trưởng làm task cũng tạo nhánh riêng. Tiếp tục nhánh đã có thì dùng `git switch feature/gioi-thieu-an`, không thêm `-c`. Nếu thiếu `develop` hoặc pull bị từ chối, nhờ nhóm kiểm tra.

### Bước 6 — Làm việc và kiểm tra

Tạo file `docs/gioi-thieu-an.md`, viết tên gọi và phần việc dự kiến, lưu rồi đọc lại. `docs/` là thư mục tài liệu; `feature/gioi-thieu-an` ở bước trên là tên nhánh.

### Bước 7 — Commit phần đã làm

```bash
git status                              # Xem các file thay đổi.
git add -- docs/gioi-thieu-an.md          # Chọn file cần commit.
git diff --staged                        # Kiểm tra nội dung đã chọn.
git commit -m "docs(team): thêm giới thiệu và phần việc dự kiến của An"
```

Commit lưu mốc thay đổi ở máy. Message phải rõ việc đã làm, tránh `update`, `fix`, `xong`. Sửa thêm sau khi add thì add lại.

### Bước 8 — Push nhánh riêng

```bash
git push -u origin feature/gioi-thieu-an  # Gửi nhánh và commit lên GitHub.
```

Lần đầu dùng `-u`; lần sau trên nhánh này chỉ cần `git push`.

### Bước 9 — Thành viên mở PR

Trên GitHub → **Pull requests → New pull request**:

- **base: develop** — nhánh nhận.
- **compare: feature/gioi-thieu-an** — nhánh gửi.

Ghi đã làm gì, mục đích và đã kiểm tra gì, rồi chọn **Create pull request**. Push nhánh riêng chưa làm `develop` thay đổi.

### Bước 10 — Bạn khác review, người phụ trách merge

Một bạn khác xem **Files changed**, kiểm tra nội dung và góp ý. Cần sửa thì tác giả sửa trên nhánh cũ → add → commit → push; PR tự cập nhật.

Khi đạt, người được phân công chọn **Merge pull request** và xác nhận để ghép vào `develop`. Tham khảo cách cộng tác qua nhánh và review tại [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow).

### Bước 11 — Mọi người cập nhật bản chung

Khi không còn thay đổi chưa commit:

```bash
git switch develop                      # Quay về nhánh chung.
git pull --ff-only origin develop        # Lấy phần đã merge về máy.
```

Task mới bắt đầu lại từ **bước 5**, không cần clone lại.

### Bước 12 — Nhóm trưởng đưa bản ổn định lên main

Kiểm thử các phần đã ghép, rồi mở PR với **base: main**, **compare: develop**. Sau khi review đạt thì merge.

## 3. Nếu develop đổi trong lúc mình đang làm

Ở nhánh riêng, commit hết thay đổi trước rồi chạy:

```bash
git fetch origin                        # Lấy thông tin mới từ GitHub.
git merge origin/develop                 # Ghép develop mới vào nhánh đang làm.
```

Kiểm tra lại rồi `git push`. Nếu có **conflict**:

1. Chạy `git status`, mở file bị conflict.
2. Trao đổi với bạn cùng sửa, giữ nội dung đúng và xóa dấu `<<<<<<<`, `=======`, `>>>>>>>`.
3. Kiểm tra, add file đã sửa, commit rồi push.

Chưa biết xử lý thì `git merge --abort` để hủy lần merge đang conflict và nhờ hỗ trợ.

## 4. Nhớ ba điều

- Không làm trực tiếp trên `main` hoặc `develop`; mỗi task dùng nhánh riêng.
- Không commit mật khẩu, `.env`, database cục bộ hoặc dữ liệu cá nhân thật.
- Không dùng `git push --force` hay `git reset --hard` khi chưa hiểu.

**Quy trình:** tạo repo → mời thành viên → tạo develop → clone → tạo nhánh riêng → làm việc → commit → push → PR → review → merge vào develop → kiểm thử → PR vào main.

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

## 2. Nhóm mình làm như thế nào?

- `main`: bản ổn định để demo.
- `develop`: nơi ghép công việc đã review.
- Mỗi task tạo nhánh riêng từ `develop`; không làm trực tiếp trên hai nhánh chung.
- Nhánh riêng → PR về `develop` → một bạn khác review → merge.
- Trưởng nhóm kiểm thử rồi mở PR từ `develop` vào `main`.
- Commit nhỏ, message rõ ràng. Không đưa mật khẩu, `.env`, database cục bộ hoặc dữ liệu cá nhân thật lên repo.

## 3. Chuẩn bị một lần

Cài [Git](https://git-scm.com/downloads), tạo tài khoản GitHub, mở terminal trong VS Code.

Trưởng nhóm mời thành viên tại **Settings → Collaborators**; thành viên nhận lời mời. Tạo nhánh `develop` từ `main` trên GitHub nếu chưa có.

Mỗi người thay tên và email bằng thông tin của mình:

```bash
git --version
git config --global user.name "Ten cua ban"
git config --global user.email "email-cua-ban@example.com"
git clone https://github.com/Khanhht801/quan-ly-sinh-vien.git
cd quan-ly-sinh-vien
```

Đã có repo ở máy thì mở thư mục đó, bỏ qua clone. Tên/email là thông tin tác giả commit, không phải đăng nhập. Khi Git yêu cầu xác thực, làm theo hướng dẫn đăng nhập trên máy; GitHub không dùng mật khẩu tài khoản cho Git qua HTTPS. Xem [hướng dẫn xác thực](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

## 4. Thực hành ngay trên dự án này

Ví dụ An thêm file giới thiệu. Các bạn thay `an` bằng tên không dấu của mình trong tên nhánh và tên file.

### Bước 1: Cập nhật và tạo nhánh riêng

Chạy trong thư mục dự án. Nếu có việc dở, hoàn tất và commit trên đúng nhánh trước khi chuyển.

```bash
git status                              # Xem nhánh hiện tại và file đang sửa.
git fetch origin                        # Lấy thông tin mới từ GitHub, chưa đổi file ở máy.
git switch develop                      # Chuyển sang nhánh develop ở máy.
git pull --ff-only origin develop        # Cập nhật develop ở máy bằng bản mới nhất trên GitHub.
git switch -c feature/gioi-thieu-an      # Tạo nhánh riêng từ develop rồi chuyển sang đó.
```

Tiếp tục nhánh cũ thì dùng `git switch feature/gioi-thieu-an`, không thêm `-c`.

Nếu chưa có `develop` hoặc pull bị từ chối, nhờ trưởng nhóm kiểm tra, không dùng force.

### Bước 2: Sửa và commit

Trong VS Code, tạo `docs/gioi-thieu-an.md`, viết tên gọi và phần việc dự kiến, lưu rồi kiểm tra lại nội dung.

```bash
git status
git add -- docs/gioi-thieu-an.md
git diff --staged
git commit -m "docs(team): thêm giới thiệu và phần việc dự kiến của An"
```

`add` chọn file, `diff --staged` xem phần sắp commit. Sửa thêm sau khi add thì phải add lại.

Message phải rõ việc đã làm, tránh `update`, `fix`, `xong`.

### Bước 3: Push và mở PR

```bash
git push -u origin feature/gioi-thieu-an
```

Lần đầu dùng `-u`; lần sau trên nhánh này chỉ cần `git push`.

Trên GitHub, vào **Pull requests → New pull request**:

1. Chọn **base: develop**, **compare: feature/gioi-thieu-an**.
2. Ghi đã sửa gì, mục đích và đã kiểm tra gì.
3. Nhờ một bạn xem **Files changed** và review.
4. Có góp ý thì sửa trên nhánh cũ, add, commit rồi push; PR tự cập nhật.
5. Khi đạt, người được phân công chọn **Merge pull request** và xác nhận.

Push nhánh riêng chưa làm `develop` thay đổi; phải merge PR. Đây là cách cộng tác qua nhánh và review được giới thiệu trong [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow).

### Bước 4: Sau khi merge

Đảm bảo không còn thay đổi chưa commit, rồi cập nhật:

```bash
git switch develop
git pull --ff-only origin develop
```

Task sau tạo nhánh mới từ `develop` đã cập nhật. Các bạn khác cũng pull để nhận phần của bạn.

## 5. Đang làm mà develop có thay đổi mới

Khi ở nhánh riêng và đã commit hết thay đổi:

```bash
git fetch origin
git merge origin/develop
```

Kiểm tra lại rồi `git push`. Nếu có **conflict** (Git cần người chọn cách ghép):

1. Chạy `git status`, mở file bị conflict.
2. Trao đổi với bạn cùng sửa, giữ nội dung đúng và xóa dấu `<<<<<<<`, `=======`, `>>>>>>>`.
3. Kiểm tra, add file đã sửa, commit rồi push.

Chưa biết xử lý thì `git merge --abort` để hủy lần merge đang conflict và nhờ hỗ trợ. Không dùng `git push --force` hoặc `git reset --hard` khi chưa hiểu.

## 6. Lệnh tra nhanh

| Lệnh | Dùng để |
|---|---|
| `git status` | Xem nhánh và trạng thái file |
| `git branch --show-current` | Xem tên nhánh hiện tại |
| `git diff` | Xem thay đổi chưa stage của file Git đã theo dõi |
| `git diff --staged` | Xem thay đổi sắp commit |
| `git log --oneline -5` | Xem 5 commit gần nhất |
| `git restore --staged -- ten-file` | Bỏ stage, giữ nội dung đã sửa; thay bằng đường dẫn thật |

**Nhớ:** cập nhật develop → tạo nhánh → sửa và kiểm tra → add → commit → push → PR → review → merge → pull.

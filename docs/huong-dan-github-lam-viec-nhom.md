# Làm việc nhóm trên GitHub — Hướng dẫn cho người mới

Tài liệu dùng cho buổi chia sẻ khoảng 45–60 phút. Mục tiêu: mỗi người tự lấy dự án về, làm một việc trên nhánh riêng, gửi lên GitHub và nhờ bạn kiểm tra trước khi ghép vào dự án chung.

## 1. Vì sao làm nhóm cần GitHub?

Nếu gửi code qua tin nhắn, nhóm dễ có các bản `final`, `final2`, `final-chot` và không biết bản nào đúng. Git giúp lưu lịch sử thay đổi; GitHub giúp cả nhóm chia sẻ code và kiểm tra công việc của nhau.

Thực hành ngay trên repo `quan-ly-sinh-vien` của nhóm. Dự án chưa có mã nguồn ứng dụng nên An và Bình sẽ thêm file giới thiệu thành viên trong `docs/`. Mỗi người làm trên một nhánh, rồi ghép tài liệu đã review vào dự án chung. Không cần tạo repo khác hoặc viết chức năng ứng dụng để học Git.

## 2. Những từ cần hiểu trước

| Từ | Hiểu đơn giản |
|---|---|
| Git | Công cụ quản lý phiên bản, chạy trên máy của mình |
| GitHub | Dịch vụ lưu repository trên mạng và hỗ trợ làm nhóm |
| Repository, viết tắt là repo | Dự án cùng lịch sử thay đổi của nó |
| Local | Bản dự án ở máy mình |
| Remote | Bản repository ở nơi khác, trong bài này là GitHub |
| `origin` | Tên gọi tắt mặc định cho địa chỉ repo trên GitHub khi clone |
| Clone | Lấy repo và lịch sử về máy lần đầu |
| Branch, hay nhánh | Một hướng phát triển riêng trong cùng repo |
| Stage | Chọn thay đổi để đưa vào lần commit sắp tới |
| Commit | Ghi một mốc thay đổi vào lịch sử ở máy mình |
| Push | Gửi các commit lên remote |
| Pull | Lấy thay đổi từ remote và tích hợp vào nhánh hiện tại |
| Pull request, viết tắt là PR | Đề nghị ghép thay đổi từ một nhánh vào nhánh khác |
| Review | Đọc, kiểm tra và góp ý cho thay đổi |
| Merge | Ghép thay đổi giữa các nhánh |
| Conflict | Git cần con người quyết định cách ghép các thay đổi bị xung đột |

**Điểm dễ nhầm nhất:** lưu file chưa phải commit; commit chưa phải push; push nhánh riêng chưa có nghĩa là đã ghép vào nhánh chung.

```text
Sửa file ở máy → git add → git commit → git push → xuất hiện trên GitHub
Nhánh riêng trên GitHub → mở PR → review → merge → vào nhánh chung
```

Ví dụ: bạn xóa `index.html` ở máy nhưng chưa commit và push thì GitHub vẫn còn file đó. Nếu push việc xóa lên nhánh riêng, phải chọn nhánh đó mới thấy; nhánh chung chỉ đổi sau khi merge PR.

## 3. Chuẩn bị trước buổi thực hành

### Mỗi thành viên

1. Tạo tài khoản tại [GitHub](https://github.com/) và xác minh email.
2. Cài [Git](https://git-scm.com/downloads) và VS Code.
3. Mở terminal trong VS Code: **Terminal → New Terminal**.
4. Kiểm tra và khai báo danh tính cho commit:

```bash
git --version
git config --global user.name "Ten cua ban"
git config --global user.email "email-cua-ban@example.com"
git config --global --get user.name
git config --global --get user.email
```

Thay tên và email bằng thông tin của mình. Nên dùng email đã xác minh trên GitHub; nếu muốn ẩn email cá nhân, lấy email `noreply` trong cài đặt email của GitHub. `--global` áp dụng cho các repo của tài khoản trên máy; bỏ `--global` và chạy trong repo nếu muốn cấu hình riêng dự án.

Đây là thông tin tác giả commit, **không phải thao tác đăng nhập GitHub**. Khi Git yêu cầu xác thực, có thể đăng nhập qua trình duyệt nếu máy có Git Credential Manager. Không nhập mật khẩu tài khoản GitHub làm mật khẩu Git qua HTTPS; GitHub hỗ trợ các cách như token hoặc SSH. Không gửi token cho bạn khác. Xem [hướng dẫn xác thực của GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

### Trưởng nhóm

1. Dùng repo chung: [quan-ly-sinh-vien](https://github.com/Khanhht801/quan-ly-sinh-vien).
2. Vào **Settings → Collaborators → Add people**, mời từng thành viên; thành viên phải chấp nhận lời mời.
3. Tạo nhánh `develop` từ `main` trên GitHub nếu chưa có: chọn nhánh `main`, mở ô chọn nhánh, nhập `develop` và chọn tạo nhánh.
4. Phân người phụ trách và người review cho mỗi công việc.

Repo công khai không có nghĩa là ai cũng được push. Thành viên cần quyền ghi; hướng dẫn mời người nằm trong [GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

## 4. Nhóm mình thống nhất làm như thế nào?

Theo tài liệu [phân công công việc](work-assignment-and-technology.md), nhóm dùng:

| Nhánh | Dùng để làm gì? | Ai thao tác? |
|---|---|---|
| `main` | Bản ổn định để demo | Trưởng nhóm ghép bản đã kiểm thử qua PR |
| `develop` | Ghép và kiểm thử các chức năng của nhóm | Nhận PR đã được review |
| `docs/ten-tai-lieu` | Thêm hoặc sửa tài liệu, dùng trong buổi thực hành | Người nhận task |
| `feature/ten-chuc-nang` | Làm một chức năng | Người nhận task |
| `fix/ten-loi` | Sửa một lỗi | Người nhận sửa lỗi |

```text
develop → tạo docs/gioi-thieu-an → làm việc → PR về develop
develop → tạo docs/gioi-thieu-binh          → làm việc → PR về develop
develop → kiểm thử bản tích hợp         → PR về main → demo
```

Đây là quy ước của nhóm, không phải mọi dự án GitHub đều cần nhánh `develop`. Ý tưởng làm trên nhánh riêng rồi review qua PR được mô tả trong [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow).

- Mỗi task nhỏ có một người chịu trách nhiệm và kết quả cần đạt rõ ràng.
- Mỗi task dùng một nhánh riêng; không tạo một nhánh cố định cho mỗi người rồi dồn mọi việc vào đó.
- Không làm trực tiếp hoặc push thẳng lên `main` và `develop`.
- Có ít nhất một người khác review trước khi merge.
- Nếu cùng sửa file chung, báo nhau trước và chia phạm vi để giảm conflict.
- Chỉ đưa code, tài liệu và dữ liệu giả cần thiết vào repo; không đưa `.env`, mật khẩu, token, `.venv`, database cục bộ hoặc dữ liệu sinh viên thật.

Có thể dùng tab **Issues → New issue** để ghi task: tiêu đề, yêu cầu, người phụ trách và cách kiểm tra. Ví dụ: “Danh sách sinh viên: hiển thị mã, tên, lớp; có thông báo khi danh sách rỗng”.

## 5. Thực hành một task từ đầu đến cuối

Các lệnh dưới đây chạy trong repo của nhóm, dùng An làm ví dụ. Mỗi bạn thay `an` bằng tên không dấu của mình để có nhánh và file riêng. Bình dùng nhánh `docs/gioi-thieu-binh` và file `docs/gioi-thieu-binh.md`. Không gõ các đoạn giải thích vào terminal.

### Bước 1 — Clone về máy, chỉ làm lần đầu

Mở terminal tại thư mục muốn lưu dự án:

```bash
git clone https://github.com/Khanhht801/quan-ly-sinh-vien.git
cd quan-ly-sinh-vien
git remote -v
```

Nếu đã mở repo tại `D:\quanLySinhVien` thì dùng terminal ở đó và bỏ qua bước clone. Thành viên chưa có repo mới cần clone. Clone xong thì dùng thư mục này cho các buổi sau, không cần clone lại mỗi ngày hoặc chạy `git init`.

### Bước 2 — Cập nhật nhánh chung rồi tạo nhánh riêng

Trước khi đổi nhánh, chạy `git status`. Nếu đang có việc dở, xử lý hoặc commit phần việc của mình trên nhánh đang làm trước; đừng mang các thay đổi không liên quan sang task mới.

```bash
git status
git fetch origin
git switch develop
git pull --ff-only origin develop
git switch -c docs/gioi-thieu-an
git branch --show-current
```

`fetch` cập nhật thông tin từ GitHub mà chưa ghép vào file đang làm. Nếu chưa có `develop` ở máy, `git switch develop` thường tự tạo nhánh theo dõi `origin/develop` khi remote có nhánh này. Nếu báo không tìm thấy, nhờ trưởng nhóm kiểm tra đã tạo và đẩy nhánh lên chưa.

`--ff-only` chỉ cập nhật khi không cần tạo commit ghép; nếu Git từ chối vì lịch sử đã tách nhau, dừng lại kiểm tra với nhóm, không dùng force để vượt qua.

### Bước 3 — Làm việc, kiểm tra rồi commit

Trong VS Code, tạo file `docs/gioi-thieu-an.md`, nhập nội dung sau rồi lưu:

```markdown
# Giới thiệu thành viên An

- Tên gọi: An
- Phần việc dự kiến: Viết tài liệu cho nhóm
- Mục tiêu: Biết tạo nhánh, commit, push và mở pull request
```

Điền phần việc của mình; không cần thêm thông tin cá nhân nhạy cảm. Đọc lại và mở Markdown Preview trong VS Code để kiểm tra hiển thị, rồi chạy:

```bash
git status
git diff
git add -- docs/gioi-thieu-an.md
git diff --staged
git commit -m "docs(team): thêm giới thiệu và mục tiêu học Git của An"
```

`git add` chọn nội dung cho commit. Nếu sửa file thêm sau khi add thì phải add lại để lấy bản sửa mới. `git diff` xem phần chưa stage; `git diff --staged` xem chính xác phần sắp commit.

Mỗi thay đổi hoàn chỉnh, đã kiểm tra thì tạo một commit. Không cần commit từng dòng vừa gõ; các file phụ thuộc nhau để tạo cùng một hành vi nên nằm trong cùng commit. Chọn rõ từng file, tránh `git add .` làm lẫn việc khác hoặc file bí mật.

Message cần nói rõ đã làm gì:

| Không nên | Nên dùng |
|---|---|
| `update` | `docs(github): thêm hướng dẫn tạo pull request cho thành viên mới` |
| `fix` | `fix(grades): chặn nhập điểm nhỏ hơn 0 hoặc lớn hơn 10` |
| `xong rồi` | `feat(students): hiển thị thông báo khi danh sách sinh viên rỗng` |

### Bước 4 — Push nhánh riêng lên GitHub

```bash
git push -u origin docs/gioi-thieu-an
```

Lần đầu dùng `-u` để liên kết nhánh ở máy với nhánh trên remote. Các lần sau, khi vẫn ở nhánh đó, chỉ cần:

```bash
git push
```

### Bước 5 — Mở pull request trên GitHub

1. Mở repo trên GitHub, vào **Pull requests → New pull request**.
2. Chọn **base: `develop`**, **compare: `docs/gioi-thieu-an`**. Base là nhánh nhận thay đổi.
3. Xem phần file thay đổi để chắc không lẫn việc khác.
4. Điền tiêu đề rõ ràng và mô tả, rồi chọn **Create pull request**.
5. Nhờ người được phân công review; chọn reviewer nếu giao diện và quyền của repo cho phép.

Mẫu mô tả PR:

```text
Thay đổi: Thêm docs/gioi-thieu-an.md.
Mục đích: Giới thiệu phần việc và luyện quy trình GitHub của nhóm.
Đã kiểm tra: Nội dung đủ ba mục, tiếng Việt đúng, Markdown hiển thị rõ.
Cần lưu ý: Bài thực hành tài liệu, chưa thêm mã nguồn ứng dụng.
Liên quan: Điền số Issue thật nếu nhóm đã tạo Issue cho việc này.
```

### Bước 6 — Review, sửa góp ý và merge

Người review vào tab **Files changed**, đọc code, chạy thử nếu cần và kiểm tra:

- Có đúng yêu cầu của task không?
- Có làm hỏng luồng liên quan không?
- Có file thừa, secret hoặc dữ liệu thật không?
- Đã kiểm tra các trường hợp quan trọng chưa?

Nếu cần sửa, tác giả sửa trên **chính nhánh cũ**, commit rồi push. PR đang mở sẽ tự cập nhật, không cần tạo PR mới. Người review có thể chọn **Request changes** để yêu cầu sửa hoặc **Approve** khi đạt.

Sau khi đạt, người được nhóm phân công chọn **Merge pull request** rồi xác nhận. Với buổi học đầu, nhóm thống nhất dùng merge commit để dễ theo dõi; nếu repo chỉ cho cách merge khác, thống nhất với trưởng nhóm trước.

### Bước 7 — Lấy phần đã ghép về máy

Sau khi PR đã merge và nhánh làm việc không còn thay đổi chưa commit:

```bash
git switch develop
git pull --ff-only origin develop
```

Task tiếp theo tạo nhánh mới từ `develop` đã cập nhật. Tất cả thành viên cũng phải pull để nhận phần của bạn; file ở máy họ không tự đổi khi bạn push.

## 6. Đang làm mà bạn khác đã merge trước thì sao?

Ví dụ bạn đang ở `docs/gioi-thieu-an`, trong khi Bình vừa merge vào `develop`. Commit phần việc đã hoàn chỉnh và đảm bảo `git status` không còn thay đổi chưa commit trước khi đồng bộ:

```bash
git fetch origin
git merge origin/develop
```

Lệnh này ghép `develop` mới nhất vào **nhánh hiện tại của bạn**, không ghép nhánh bạn vào `develop`. Nếu không conflict, kiểm tra lại chức năng rồi `git push` để cập nhật PR. Nếu Git mở trình soạn thảo cho message merge, lưu và đóng để hoàn tất.

Không chạy các lệnh merge máy móc khi còn việc dở hoặc không biết mình đang ở nhánh nào; dùng `git status` và `git branch --show-current` để kiểm tra.

## 7. Conflict: hai người cùng sửa một đoạn

Conflict không có nghĩa là code mất. Git đang chờ nhóm chọn nội dung cuối cùng. Ví dụ khi merge `origin/develop` vào nhánh đang làm, file có thể hiện:

```text
  <<<<<<< HEAD
  Tiêu đề do bạn sửa
  =======
  Tiêu đề do bạn khác sửa trên develop
  >>>>>>> origin/develop
```

Cách xử lý:

1. Chạy `git status` để xem file đang conflict.
2. Mở file trong VS Code, trao đổi với người sửa phần còn lại nếu chưa rõ ý định.
3. Chỉnh nội dung cuối cùng cho đúng, xóa toàn bộ các dấu `<<<<<<<`, `=======`, `>>>>>>>`.
4. Kiểm tra lại nội dung và chạy thử phần bị ảnh hưởng.
5. Stage file đã xử lý, hoàn tất merge rồi push:

```bash
git add -- duong-dan/file-bi-conflict
git commit -m "merge(students): ghép thay đổi develop và thống nhất tiêu đề danh sách"
git push
```

Thay đường dẫn ví dụ bằng file thực tế. Trong lần merge này, VS Code gọi phần của nhánh bạn là **Current**, phần đang ghép vào là **Incoming**. Đừng chọn “Accept Both” một cách máy móc vì có thể tạo code trùng hoặc sai.

Nếu chưa biết xử lý và muốn hủy **lần merge đang có conflict**, chạy:

```bash
git merge --abort
```

Sau đó nhờ nhóm xem cùng. Đây cũng là lý do cần có trạng thái sạch trước khi bắt đầu merge. Xem thêm [hướng dẫn xử lý conflict của GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

## 8. Những lệnh nên nhớ

| Lệnh | Tác dụng |
|---|---|
| `git status` | Xem nhánh hiện tại, file đã sửa và trạng thái stage |
| `git branch --show-current` | Xem mình đang ở nhánh nào |
| `git branch -a` | Liệt kê nhánh local và thông tin nhánh remote đã biết |
| `git clone URL` | Lấy repo về máy lần đầu |
| `git fetch origin` | Lấy thông tin mới từ remote, chưa ghép vào nhánh hiện tại |
| `git switch ten-nhanh` | Chuyển sang nhánh có sẵn |
| `git switch -c feature/ten-viec` | Tạo nhánh mới từ vị trí hiện tại và chuyển sang đó |
| `git pull --ff-only origin develop` | Cập nhật `develop`; dùng khi đang ở nhánh local `develop` |
| `git diff` | Xem thay đổi chưa stage |
| `git add -- duong-dan/file` | Stage file cụ thể, kể cả việc xóa file đã được Git theo dõi |
| `git diff --staged` | Xem thay đổi chuẩn bị commit |
| `git commit -m "message"` | Tạo commit ở máy |
| `git push -u origin ten-nhanh` | Đẩy nhánh và thiết lập liên kết theo dõi |
| `git push` | Đẩy commit của nhánh đã có liên kết |
| `git merge origin/develop` | Ghép bản `develop` đã fetch vào nhánh hiện tại |
| `git log --oneline -5` | Xem 5 commit gần nhất |
| `git restore --staged -- duong-dan/file` | Bỏ stage file, giữ thay đổi trong thư mục làm việc |

Chưa cần học rebase, cherry-pick hay stash trong buổi đầu. Tránh `git reset --hard`, `git clean -fd`, `git push --force` khi chưa hiểu vì có thể làm mất việc hoặc ghi đè lịch sử chung.

## 9. Lỗi thường gặp và cách hiểu

| Hiện tượng | Cần kiểm tra |
|---|---|
| `Author identity unknown` | Chưa khai báo `user.name` và `user.email`; làm lại phần cấu hình |
| `Permission denied`, lỗi 403 hoặc không tìm thấy repo riêng tư | Đúng URL chưa, đăng nhập đúng tài khoản chưa, đã nhận lời mời và có quyền chưa? |
| `not a git repository` | Terminal có đang nằm trong thư mục đã clone không? |
| `nothing to commit` | Có sửa và lưu file chưa, đã stage chưa, có đang ở đúng repo/nhánh không? |
| Đã commit nhưng GitHub chưa đổi | Chưa push hoặc đang xem nhánh khác trên GitHub |
| Đã push nhưng `main` chưa đổi | Bạn push nhánh riêng; cần PR và merge theo quy trình |
| `non-fast-forward` khi push nhánh riêng | Remote có commit bạn chưa có; fetch và kiểm tra, không force push |
| Không switch được vì có thay đổi local | Hoàn tất và commit phần việc trên nhánh đúng trước khi chuyển |
| PR có quá nhiều file lạ | Có thể tạo nhánh từ sai chỗ hoặc stage lẫn việc; nhờ review trước khi merge |

Nếu nhánh riêng bị từ chối push do remote có thêm commit, đảm bảo file làm việc đã sạch, fetch rồi ghép đúng nhánh remote vào nhánh local tương ứng. Ví dụ khi đang ở `docs/gioi-thieu-an`:

```bash
git fetch origin
git merge origin/docs/gioi-thieu-an
```

Xử lý conflict nếu có, kiểm tra lại rồi push. Nếu không biết các commit từ đâu ra, hỏi người cùng làm trước khi ghép.

## 10. Kịch bản demo cho người trình bày

Dùng ngay repo [quan-ly-sinh-vien](https://github.com/Khanhht801/quan-ly-sinh-vien), không tạo repo thực hành riêng. Trưởng nhóm tạo `develop` từ `main` nếu chưa có và mời thành viên. A là An, B là Bình; mỗi người dùng tài khoản của mình. Các file giới thiệu được giữ làm tài liệu nhóm.

| Thời lượng | Nội dung |
|---|---|
| 5 phút | Giải thích Git, GitHub, commit và push bằng ví dụ xóa file ở máy |
| 10 phút | Cài đặt, cấu hình danh tính, clone và xác thực |
| 10 phút | A tạo nhánh từ develop, thêm `docs/gioi-thieu-an.md`, commit và push |
| 10 phút | A mở PR về develop; B đọc, góp ý; A sửa, commit và push thêm |
| 5 phút | B approve, trưởng nhóm merge; cả hai pull develop và thấy file mới |
| 10 phút | Demo conflict có chủ đích, cùng chọn nội dung và hoàn tất merge |
| 5 phút | Mỗi người nhắc lại quy trình và hỏi đáp |

Để demo conflict: A tạo file `docs/demo-nhom.md` có dòng `Tên nhóm: Nhóm 2` trên nhánh riêng, commit, push và mở PR về `develop`. Sau khi review và merge PR chuẩn bị này, A và B cập nhật `develop`. A và B tạo hai nhánh mới từ **cùng một bản develop**, sửa dòng đó thành hai tên khác nhau. Merge PR của A trước; B fetch rồi merge `origin/develop` vào nhánh của B. Khi conflict xuất hiện, cả nhóm thống nhất tên, sửa file, commit và push kết quả rồi hoàn tất PR của B.

Sau buổi thực hành, trưởng nhóm mở PR từ `develop` vào `main`, kiểm tra chỉ có các tài liệu dự định đưa vào rồi merge. Như vậy mọi người thấy đủ luồng từ nhánh cá nhân đến nhánh chính ngay trên dự án này.

Trước buổi chia sẻ, nên tự chạy thử một vòng thêm tài liệu trên nhánh riêng của repo này. Riêng cài đặt và đăng nhập nên nhờ mọi người chuẩn bị trước để không mất phần lớn thời gian của buổi học.

## 11. Tờ nhắc nhanh trước khi kết thúc buổi

```text
Nhận task
→ Cập nhật develop
→ Tạo nhánh riêng
→ Sửa và kiểm tra
→ Add đúng file
→ Commit với message rõ ràng
→ Push nhánh riêng
→ Mở PR về develop
→ Bạn khác review, sửa góp ý nếu có
→ Merge
→ Mọi người pull develop
```

Trước khi nhờ ghép code, tự hỏi: “Đúng nhánh chưa? Đúng task chưa? Có file bí mật không? Đã chạy thử chưa? Người khác đọc message và PR có hiểu mình làm gì không?”

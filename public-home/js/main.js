// =============================
// DỮ LIỆU SINH VIÊN
// =============================

let students = [

    {
        maSV: "SV001",
        hoTen: "Nguyễn Văn An",
        ngaySinh: "2004-01-15",
        gioiTinh: "Nam",
        lop: "CNTT01",
        nganh: "Công nghệ thông tin",
        trangThai: "Đang học"
    },

    {
        maSV: "SV002",
        hoTen: "Trần Thị Bình",
        ngaySinh: "2004-03-20",
        gioiTinh: "Nữ",
        lop: "CNTT02",
        nganh: "Công nghệ thông tin",
        trangThai: "Đang học"
    },

    {
        maSV: "SV003",
        hoTen: "Lê Văn Nam",
        ngaySinh: "2003-11-10",
        gioiTinh: "Nam",
        lop: "CNTT03",
        nganh: "Kỹ thuật phần mềm",
        trangThai: "Cảnh báo"
    }

];


// =============================
// LOGIN
// =============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (username === "admin" && password === "123456") {

        document
            .getElementById("loginPage")
            .classList.add("d-none");

        document
            .getElementById("mainApp")
            .classList.remove("d-none");

        loadStudents();

        createChart();

    } else {

        alert("Sai tên đăng nhập hoặc mật khẩu!");

    }

});


// =============================
// LOGOUT
// =============================

document
    .getElementById("logoutBtn")
    .addEventListener("click", function() {

        document
            .getElementById("mainApp")
            .classList.add("d-none");

        document
            .getElementById("loginPage")
            .classList.remove("d-none");

    });


// =============================
// CHUYỂN TRANG
// =============================

const menuLinks =
    document.querySelectorAll(".sidebar-menu a");

const pages =
    document.querySelectorAll(".page-section");


menuLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const page =
            this.getAttribute("data-page");

        pages.forEach(function(section) {

            section.classList.add("d-none");

        });

        document
            .getElementById(page)
            .classList.remove("d-none");

        menuLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

        closeSidebar();

    });

});


// =============================
// HIỂN THỊ DANH SÁCH SINH VIÊN
// =============================

function loadStudents() {

    const tbody =
        document.getElementById("studentTableBody");

    tbody.innerHTML = "";

    students.forEach(function(student) {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>
                <strong>${student.maSV}</strong>
            </td>

            <td>
                ${student.hoTen}
            </td>

            <td>
                ${formatDate(student.ngaySinh)}
            </td>

            <td>
                ${student.gioiTinh}
            </td>

            <td>
                ${student.lop}
            </td>

            <td>
                ${student.nganh}
            </td>

            <td>

                ${
                    student.trangThai === "Cảnh báo"

                    ?

                    '<span class="badge bg-danger">Cảnh báo</span>'

                    :

                    '<span class="badge bg-success">Đang học</span>'
                }

            </td>

            <td>

                <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    onclick="editStudent('${student.maSV}')"
                    aria-label="Sửa sinh viên ${student.maSV}"
                >
                    <i class="bi bi-pencil"></i>
                </button>

                <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    onclick="deleteStudent('${student.maSV}')"
                    aria-label="Xóa sinh viên ${student.maSV}"
                >
                    <i class="bi bi-trash"></i>
                </button>

            </td>

        `;

        tbody.appendChild(row);

    });

    document
        .getElementById("totalStudents")
        .textContent = students.length;

}


// =============================
// FORMAT DATE
// =============================

function formatDate(date) {

    if (!date) {
        return "";
    }

    const d = new Date(date);

    return d.toLocaleDateString("vi-VN");

}


// =============================
// THÊM SINH VIÊN
// =============================

document
    .getElementById("addStudentBtn")
    .addEventListener("click", function() {

        document.getElementById("maSV").value = "";
        document.getElementById("hoTen").value = "";
        document.getElementById("ngaySinh").value = "";

        const modal =
            new bootstrap.Modal(
                document.getElementById("studentModal")
            );

        modal.show();

    });


// =============================
// LƯU SINH VIÊN
// =============================

document
    .getElementById("saveStudentBtn")
    .addEventListener("click", function() {

        const maSV =
            document.getElementById("maSV").value;

        const hoTen =
            document.getElementById("hoTen").value;

        const ngaySinh =
            document.getElementById("ngaySinh").value;

        const gioiTinh =
            document.getElementById("gioiTinh").value;

        const lop =
            document.getElementById("lop").value;


        if (!maSV || !hoTen) {

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;

        }


        students.push({

            maSV: maSV,

            hoTen: hoTen,

            ngaySinh: ngaySinh,

            gioiTinh: gioiTinh,

            lop: lop,

            nganh: "Công nghệ thông tin",

            trangThai: "Đang học"

        });


        loadStudents();


        const modalElement =
            document.getElementById("studentModal");

        const modal =
            bootstrap.Modal.getInstance(modalElement);

        modal.hide();

    });


// =============================
// XÓA SINH VIÊN
// =============================

function deleteStudent(maSV) {

    const confirmDelete =
        confirm(
            "Bạn có chắc muốn xóa sinh viên này?"
        );

    if (!confirmDelete) {
        return;
    }

    students =
        students.filter(function(student) {

            return student.maSV !== maSV;

        });

    loadStudents();

}


// =============================
// SỬA SINH VIÊN
// =============================

function editStudent(maSV) {

    const student =
        students.find(function(item) {

            return item.maSV === maSV;

        });


    if (!student) {
        return;
    }


    document.getElementById("maSV").value =
        student.maSV;

    document.getElementById("hoTen").value =
        student.hoTen;

    document.getElementById("ngaySinh").value =
        student.ngaySinh;

    document.getElementById("gioiTinh").value =
        student.gioiTinh;

    document.getElementById("lop").value =
        student.lop;


    const modal =
        new bootstrap.Modal(
            document.getElementById("studentModal")
        );

    modal.show();

}


// =============================
// TÌM KIẾM SINH VIÊN
// =============================

document
    .getElementById("studentSearch")
    .addEventListener("input", function() {

        const keyword =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll(
                "#studentTableBody tr"
            );


        rows.forEach(function(row) {

            const text =
                row.textContent.toLowerCase();

            if (text.includes(keyword)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });


// =============================
// DARK MODE
// =============================

document
    .getElementById("darkModeBtn")
    .addEventListener("click", function() {

        document
            .body
            .classList.toggle("dark-mode");

    });


// =============================
// MENU MOBILE
// =============================

const menuBtn = document.getElementById("menuBtn");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function setSidebar(open) {

    document.body.classList.toggle("sidebar-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    sidebarBackdrop.tabIndex = open ? 0 : -1;

}

function closeSidebar() {

    setSidebar(false);

}

menuBtn.addEventListener("click", function() {

    const open = !document.body.classList.contains("sidebar-open");
    setSidebar(open);

});

sidebarBackdrop.addEventListener("click", closeSidebar);

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeSidebar();
    }

});


// =============================
// BIỂU ĐỒ
// =============================

function createChart() {

    const canvas =
        document.getElementById("studentChart");

    if (!canvas) {
        return;
    }

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "CNTT01",
                "CNTT02",
                "CNTT03",
                "HTTT01",
                "KTPM01"
            ],

            datasets: [

                {

                    label: "Số sinh viên",

                    data: [
                        42,
                        40,
                        38,
                        35,
                        45
                    ]

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: false
                }

            }

        }

    });

}

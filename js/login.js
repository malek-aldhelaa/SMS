document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginType = document.getElementById("login_type");
  const userType = document.getElementById("user_type");
  const credentials = document.getElementById("credentials_container");

  const pages = {
    student: { new: "student.html", existing: "studentold.html" },
    teacher: { new: "teacher.html", existing: "teacherold.html" },
    admin:   { existing: "adminold.html" }
  };

  const users = {
    admin:   { username: "bakeel", password: "1998" },
    student: { username: "malek",  password: "2004" },
    teacher: { username: "farea",  password: "2001" },
  };

  // إظهار/إخفاء الحقول
  function toggleCredentials() {
    if (loginType.value === "existing" || userType.value === "admin") {
      credentials.classList.remove("d-none");
    } else {
      credentials.classList.add("d-none");
    }
  }

  loginType.addEventListener("change", toggleCredentials);
  userType.addEventListener("change", toggleCredentials);

  // معالجة تسجيل الدخول
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const lt = loginType.value;
    const ut = userType.value;

    if (!lt) return alert("اختر نوع الدخول.");
    if (!ut) return alert("اختر نوع المستخدم.");

    if (lt === "new" && ut !== "admin") {
      return window.location.href = pages[ut]?.new || "#";
    }

    if (lt === "existing") {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      if (!username || !password) return alert("أدخل اسم المستخدم وكلمة المرور.");

      const u = users[ut];
      if (!u || username !== u.username || password !== u.password) {
        return alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
      }
      return window.location.href = pages[ut]?.existing || "#";
    }
  });
});

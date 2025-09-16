// تعيين المسارات الصحيحة للصفحات
const pages = {
  student: { 
    new: "student.html",
    existing: "login.html?type=student&login=existing"
  },
  teacher: { 
    new: "teacher.html",
    existing: "login.html?type=teacher&login=existing"
  },
  admin: { 
    existing: "login.html?type=admin&login=existing" // المدير فقط موجود
  }
};

// العناصر
const loginForm = document.getElementById("loginForm");
const userTypeSelect = document.getElementById("user_type");
const loginTypeContainer = document.getElementById("login_type_container");

// إظهار / إخفاء نوع الدخول حسب نوع المستخدم
userTypeSelect.addEventListener("change", function() {
  if (this.value === "admin") {
    loginTypeContainer.style.display = "none";
  } else {
    loginTypeContainer.style.display = "block";
  }
});

// معالجة التوجيه عند الضغط على زر الدخول
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const userType = userTypeSelect.value;
  let loginType;

  if (!userType) return alert("يرجى اختيار نوع المستخدم.");

  if (userType === "admin") {
    loginType = "existing"; // المدير دائمًا موجود
  } else {
    loginType = document.getElementById("login_type")?.value;
    if (!loginType) return alert("يرجى اختيار نوع الدخول.");
  }

  const destination = pages[userType][loginType];
  if (!destination) return alert("الرابط غير موجود.");

  window.location.href = destination;
});

const taskForm = document.getElementById("taskForm");
if (taskForm) {
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = document.getElementById("task")?.value || "";
    if (!task) return alert("يرجى اختيار المهمة");

    const routes = {
      add_student: "student.html",
      old_student: "studentold.html",
      add_teacher: "teacher.html",
      old_teacher: "teacherold.html",
    };

    const page = routes[task];
    if (!page) return alert("المهمة غير معروفة.");
    window.location.href = page;
  });
}

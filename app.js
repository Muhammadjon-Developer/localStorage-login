document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formni boshqarishini to'xtatamiz

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
      // Ma'lumotlarni LocalStorage'ga saqlaymiz
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      
      alert("Kirish muvaffaqiyatli! Ma'lumotlar saqlandi.");
  } else {
      alert("Iltimos, foydalanuvchi nomi va parolni kiriting.");
  }
});
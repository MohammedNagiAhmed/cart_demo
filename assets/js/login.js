import { users } from "./db.js";

const authUser = localStorage.getItem("authUser");
if (authUser) {
  // User already logged in
  const userInfo = JSON.parse(authUser);
  alert(`Welcome back, ${userInfo.username}!`);
} else {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", handleLoginSubmit);
}

function handleLoginSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  let loginHelper = false;
  users.forEach((user) => {
    if (
      email.value.trim() == user.email &&
      password.value.trim() == user.password
    ) {
      localStorage.setItem("authUser", JSON.stringify(user)); // Store user information
      console.log("login!!");
      loginHelper = true;
    }
  });

  // if user found or not
  if (loginHelper) {
    window.location.href = "../../shopping_cart/index.html"; // Redirect to a dashboard or protected area
  } else {
    alert("Invalid username or password.");
  }
}

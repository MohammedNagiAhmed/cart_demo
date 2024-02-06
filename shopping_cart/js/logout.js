const authUser = localStorage.getItem("authUser");

const logoutBtn = document.getElementById("logoutBtn");


const fullName = document.querySelector("#full-name .nav-link");
if (authUser) {
    const userInfo = JSON.parse(authUser);
    const username = userInfo.username;

    fullName.innerHTML = username;
  }
  // Handle Logout click
logoutBtn.addEventListener("click", handleLogOutClick);
function handleLogOutClick(event) {
  event.preventDefault(); // Prevent default form submission
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "../login.html";
  }, 1500);
}


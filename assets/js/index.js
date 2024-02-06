import { products as prodFromDB } from "./db.js";
const authUser = localStorage.getItem("authUser");
const loginRegister = document.getElementById("login-register");
const userLogout = document.getElementById("user-logout");
const fullName = document.querySelector("#full-name .nav-link");
const logoutBtn = document.getElementById("logoutBtn");
if (authUser) {
  const userInfo = JSON.parse(authUser);
  const username = userInfo.username;
  loginRegister.remove();
  userLogout.style.display = "flex";
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

// draw products UI
function drawProductsUI(){
let productsUiArr = prodFromDB.map((product)=>{
  return `
  <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative">
  <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
    <div class="col hp">
      <div class="card h-100 shadow-sm">
        <a href="#">
          <img src="https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg" class="card-img-top"
            alt="product.title" />
        </a>
        <div class="label-top shadow-sm">
          <a class="text-white" href="#">asus</a>
        </div>
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">1.245$</span>
            <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">reviews</a></span>
          </div>
          <h5 class="card-title">
            <a target="_blank" href="#">ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen 5 R5-3550H
              Processor, GeForce GTX 1650 Graphics, 8GB DDR4, 256GB PCIe SSD, RGB Keyboard, Windows 10 64-bit -
              FX505DT-AH51</a>
          </h5>
          <div class="d-grid gap-2 my-4">
            <a href="#" class="btn btn-warning bold-btn">add to cart</a>
          </div>
          <div class="clearfix mb-1">
            <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>
            <span class="float-end">
              <i class="far fa-heart" style="cursor: pointer"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
});
}
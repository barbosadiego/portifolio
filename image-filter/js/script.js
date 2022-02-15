const menu = document.querySelector(".menu-btn");
const close = document.querySelector(".close");
const sidenav = document.querySelector(".sidenav");

// menu
menu.addEventListener("click", () => {
  sidenav.classList.add("active");
});

close.addEventListener("click", () => {
  sidenav.classList.remove("active");
});

// modal
let gallery = document.querySelectorAll(".images-container img");
let modal = document.querySelector(".modal-img");

gallery.forEach((image) => {
  image.addEventListener("click", () => {
    let imgSrc = image.getAttribute("src");
    modal.style.display = "grid";
    modal.querySelector("img").src = imgSrc;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// filter category
const btnCategory = document.querySelectorAll(".cat");
const btnType = document.querySelectorAll(".type");
let containerImg = document.querySelector(".images-container");

btnCategory.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category").toLowerCase();
    filterCat(category);
    sidenav.classList.remove("active");
  });
});

function filterCat(category) {
  containerImg.innerHTML = "";
  gallery.forEach((item) => {
    if (item.getAttribute("data-cat") === category) {
      containerImg.appendChild(item);
    } else if (category === "all") {
      containerImg.appendChild(item);
    }
  });
}

// filter type
btnType.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type").toLowerCase();
    filterType(type)
  });
});

function filterType(type) {
  containerImg.innerHTML = "";
  gallery.forEach((item) => {
    if (item.getAttribute("src").includes(type)) {
      containerImg.appendChild(item)
    } else if (type === 'all'){
      containerImg.appendChild(item)
    }
  });
  sidenav.classList.remove('active')
}

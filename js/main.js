// creat data products
let products = [
  {
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 1199,
    like: 350,
    img: "./img/iPhone16ProMax.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 1099,
    like: 280,
    img: "./img/iPhone16Pro.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "iPhone 15",
    brand: "Apple",
    price: 778,
    like: 261,
    img: "./img/iPhone15.png",
    colors: ["pink", "deepskyblue"],
  },
  {
    name: "iPhone 16",
    brand: "Apple",
    price: 850,
    like: 50,
    img: "./img/iPhone16.png",
    colors: ["cadetblue", "whitesmoke"],
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    like: 220,
    img: "./img/GalaxyS24Ultra.png",
    colors: ["black", "blueviolet", "whitesmoke"],
  },
  {
    name: "Galaxy S24+",
    brand: "Samsung",
    price: 948,
    like: 175,
    img: "./img/GalaxyS24+.png",
    colors: ["black", "gray", "whitesmoke"],
  },
  {
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    price: 1799,
    like: 245,
    img: "./img/GalaxyZFold6.png",
    colors: ["cornflowerblue", "gray", "whitesmoke"],
  },
  {
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    price: 1900,
    like: 60,
    img: "./img/GalaxyZFold7.png",
    colors: ["black", "darkblue", "whitesmoke"],
  },
  {
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 999,
    like: 77,
    img: "./img/Xiaomi14Ultra.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 699,
    like: 128,
    img: "./img/Xiaomi14.png",
    colors: ["black", "darkgreen", "whitesmoke"],
  },
  {
    name: "Redmi Note 13 Pro+",
    brand: "Xiaomi",
    price: 399,
    like: 56,
    img: "./img/RedmiNote13Pro+.png",
    colors: ["#c5a4e3", "whitesmoke"],
  },
  {
    name: "Poco X6 Pro",
    brand: "Xiaomi",
    price: 349,
    like: 87,
    img: "./img/PocoX6Pro.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    like: 102,
    img: "./img/OnePlus12.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "OnePlus 12R",
    brand: "OnePlus",
    price: 521,
    like: 73,
    img: "./img/OnePlus12R.png",
    colors: ["black", "#8dcbec", "whitesmoke"],
  },
  {
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 1269,
    like: 237,
    img: "./img/Pixel9Pro.png",
    colors: ["black", "#7da280", "whitesmoke"],
  },
  {
    name: "Pixel 9",
    brand: "Google",
    price: 799,
    like: 128,
    img: "./img/Pixel9.png",
    colors: ["black", "#b9ebbd", "whitesmoke"],
  },
  {
    name: "Pixel 8a",
    brand: "Google",
    price: 499,
    like: 189,
    img: "./img/Pixel8a.png",
    colors: ["black", "#8dcbec", "whitesmoke"],
  },
  {
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    price: 1059,
    like: 233,
    img: "./img/SonyXperia1VI.png",
    colors: ["black", "whitesmoke"],
  },
  {
    name: "Asus ROG Phone 8 Pr",
    brand: "Asus",
    price: 1149,
    like: 259,
    img: "./img/AsusROGPhone8Pr.png",
    colors: ["black", "whitesmoke"],
  },
];

// test the lenght of data products
// console.log(products.length);
// console.log(products[2].like);

// creat card box products
let container = document.querySelector("div.products");
container.innerHTML = "";
products.forEach((elem) => {
  let colorBox = "";
  if (elem.colors && elem.colors.length > 0) {
    elem.colors.forEach((c) => {
      colorBox += `<div style="background-color:${c}"></div>`;
    });
  }
  container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
});

// active bottoms
let btn1 = document.querySelector("div.bottoms>div:nth-of-type(1)");
let btn2 = document.querySelector("div.bottoms>div:nth-of-type(2)");
let btn3 = document.querySelector("div.bottoms>div:nth-of-type(3)");
let btn4 = document.querySelector("div.bottoms>div:nth-of-type(4)");
let btn5 = document.querySelector("div.bottoms>div:nth-of-type(5)");
let btn6 = document.querySelector("div.bottoms>div:nth-of-type(6)");

btn1.addEventListener("click", function () {
  this.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
});

btn2.addEventListener("click", function () {
  this.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
});

btn3.addEventListener("click", function () {
  this.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
});

btn4.addEventListener("click", function () {
  this.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
});

btn5.addEventListener("click", function () {
  this.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn6.classList.remove("active");
});

btn6.addEventListener("click", function () {
  this.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
});

// The lowest price products
document.querySelector("div.sort-sodi").addEventListener("click", function () {
  let sorted = products.sort((a, b) => a.price - b.price);
  container.innerHTML = "";
  sorted.forEach((elem) => {
    let colorBox = "";
    if (elem.colors && elem.colors.length > 0) {
      elem.colors.forEach((c) => {
        colorBox += `<div style="background-color:${c}"></div>`;
      });
    }
    container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
  });
});

// The highest price products
document.querySelector(".sort-nozoli").addEventListener("click", function () {
  let sorted = products.sort((a, b) => a.price - b.price).reverse();
  container.innerHTML = "";
  sorted.forEach((elem) => {
    let colorBox = "";
    if (elem.colors && elem.colors.length > 0) {
      elem.colors.forEach((c) => {
        colorBox += `<div style="background-color:${c}"></div>`;
      });
    }
    container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
  });
});

// populer products
document.querySelector("div.sort-like").addEventListener("click", function () {
  let sorted = products.sort((a, b) => a.like - b.like).reverse();
  container.innerHTML = "";
  sorted.forEach((elem) => {
    let colorBox = "";
    if (elem.colors && elem.colors.length > 0) {
      elem.colors.forEach((c) => {
        colorBox += `<div style="background-color:${c}"></div>`;
      });
    }
    container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
  });
});

// filter brand products
document.querySelector("div.sort-brand").addEventListener("click", function () {
  let userbrand = prompt("Chose your brand..!");
  let sorted = products.filter((elem) => {
    return elem.brand == userbrand;
  });
  container.innerHTML = "";
  sorted.forEach((elem) => {
    let colorBox = "";
    if (elem.colors && elem.colors.length > 0) {
      elem.colors.forEach((c) => {
        colorBox += `<div style="background-color:${c}"></div>`;
      });
    }
    container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
  });
});

// filter more than .. price products
document
  .querySelector("div.sort-moreprice")
  .addEventListener("click", function () {
    let userprice = prompt("more than ... price..!");
    let sorted = products.filter((elem) => {
      return elem.price > userprice;
    });
    container.innerHTML = "";
    sorted.forEach((elem) => {
      let colorBox = "";
      if (elem.colors && elem.colors.length > 0) {
        elem.colors.forEach((c) => {
          colorBox += `<div style="background-color:${c}"></div>`;
        });
      }
      container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
    });
  });

// filter less than .. price products
document
  .querySelector("div.sort-lessprice")
  .addEventListener("click", function () {
    let userprice = prompt("less than ... price..!");
    let sorted = products.filter((elem) => {
      return elem.price < userprice;
    });
    container.innerHTML = "";
    sorted.forEach((elem) => {
      let colorBox = "";
      if (elem.colors && elem.colors.length > 0) {
        elem.colors.forEach((c) => {
          colorBox += `<div style="background-color:${c}"></div>`;
        });
      }
      container.innerHTML += `
    <div class="card">
        <img src="${elem.img}" alt="phones">
        <div class="subtile">
            <p>${elem.name}</p>
            <p>${elem.brand}</p>
            <div class="colors">
              ${colorBox}
            </div>
            <div class="icon">
                <div class="pric">
                    <span>$</span>
                    <p>${elem.price}</p>
                </div>
                <div class="like">
                    <span><i class="ri-heart-fill"></i></span>
                    <p>${elem.like}</p>
                </div>
                <div class="buy">
                    <span>buy</span>
                </div>
            </div>
        </div>
    </div>
    `;
    });
  });

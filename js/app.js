console.log(
  "1.Вёрстка валидная +10 \n2.Вёрстка семантическая +18.5 \n В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше): \n <header>, <main>, <footer> +3 \n пять элементов <section> (по количеству секций) +3 \n  только один заголовок <h1> +3 \n четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3 \n один элемент <nav> (панель навигации) +3 \n один спискок ul > li > a (панель навигации, ссылки на соцсети) +1.5 \n пять кнопок <button> +2 \n3.Вёрстка соответствует макету +48 \n блок <header> +6 \n секция welcome +7 \n секция about +7 \n секция service +7 \n секция prices +7 \n секция contacts +7 \n блок <footer> +7 \n4.Требования к css + 12 \n для построения сетки используются флексы или гриды +2\n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n фоновый цвет тянется на всю ширину страницы +2\n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2 \n изображения добавлены в формате .jpg или .png +2 \nесть favicon +2\n5.Интерактивность, реализуемая через css +20 \n плавная прокрутка по якорям +5 \ncсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5 \n интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5 \n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5 \n Score: 108.5"
);

/* burger-menu */

const burgerMenu = document.getElementById("burger");
const navList = document.querySelector(".nav-list");
const blanket = document.getElementById("blanket");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
  blanket.classList.toggle("active");
});

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navList.classList.remove("active");
    blanket.classList.remove("active");
  })
);

/* blur */
const gardenBtn = document.getElementById("garden-btn");
const lawnBtn = document.getElementById("lawn-btn");
const plantingBtn = document.getElementById("planting-btn");

const planting = document.querySelectorAll(".planting");
const lawn = document.querySelectorAll(".lawn");
const garden = document.querySelectorAll(".garden");

/*  gardenBtn.disabled = true; 
 lawnBtn.classList.contains('active')
 */

gardenBtn.addEventListener("click", () => {
  gardenBtn.classList.toggle("active");
  planting.forEach((i) => i.classList.toggle("blur"));
  lawn.forEach((i) => i.classList.toggle("blur"));

  if (!lawnBtn.classList.contains("active")) {
    plantingBtn.disabled = false;
  } else {
    plantingBtn.disabled = true;
    garden.forEach((i) => i.classList.toggle("blur"));
    lawn.forEach((i) => i.classList.toggle("blur"));
    planting.forEach((i) => i.classList.toggle("blur"));
  }
  if (!plantingBtn.classList.contains("active")) {
    plantingBtn.disabled = false;
  } else {
    lawnBtn.disabled = true;
    garden.forEach((i) => i.classList.toggle("blur"));
    planting.forEach((i) => i.classList.toggle("blur"));
    lawn.forEach((i) => i.classList.toggle("blur"));
  }
});

lawnBtn.addEventListener("click", () => {
  lawnBtn.classList.toggle("active");
  garden.forEach((i) => i.classList.toggle("blur"));
  planting.forEach((i) => i.classList.toggle("blur"));
  if (!gardenBtn.classList.contains("active")) {
    plantingBtn.disabled = false;
  } else {
    plantingBtn.disabled = true;
    lawn.forEach((i) => i.classList.toggle("blur"));
    garden.forEach((i) => i.classList.toggle("blur"));
    planting.forEach((i) => i.classList.toggle("blur"));
  }
  if (!plantingBtn.classList.contains("active")) {
    gardenBtn.disabled = false;
  } else {
    gardenBtn.disabled = true;
    lawn.forEach((i) => i.classList.toggle("blur"));
    planting.forEach((i) => i.classList.toggle("blur"));
    garden.forEach((i) => i.classList.toggle("blur"));
  }
});

plantingBtn.addEventListener("click", () => {
  plantingBtn.classList.toggle("active");
  garden.forEach((i) => i.classList.toggle("blur"));
  lawn.forEach((i) => i.classList.toggle("blur"));
  if (!gardenBtn.classList.contains("active")) {
    lawnBtn.disabled = false;
  } else {
    lawnBtn.disabled = true;
    planting.forEach((i) => i.classList.toggle("blur"));
    garden.forEach((i) => i.classList.toggle("blur"));
    lawn.forEach((i) => i.classList.toggle("blur"));
  }
  if (!lawnBtn.classList.contains("active")) {
    gardenBtn.disabled = false;
  } else {
    gardenBtn.disabled = true;
    planting.forEach((i) => i.classList.toggle("blur"));
    garden.forEach((i) => i.classList.toggle("blur"));
    lawn.forEach((i) => i.classList.toggle("blur"));
  }
});

/* price */

const basics = document.getElementById("basics");
const standard = document.getElementById("standard");
const pro = document.getElementById("pro");
const accourdionBasics = document.getElementById("accourdion-basics");
const accourdionStandard = document.getElementById("accourdion-standard");
const accourdionPro = document.getElementById("accourdion-pro");
const pricesBtn = document.querySelector(".prices-btn");
const rowTop = document.querySelector(".row-top ");

basics.addEventListener("click", () => {
  accourdionBasics.classList.toggle("prices-accourdion-open");
  basics.classList.toggle("prices-btn-open");
  rowTop.classList.toggle("row-top-opened");
  if (accourdionStandard.classList.contains("prices-accourdion-open")) {
    accourdionStandard.classList.remove("prices-accourdion-open");
    standard.classList.remove("prices-btn-open");
  }
  if (accourdionPro.classList.contains("prices-accourdion-open")) {
    accourdionPro.classList.remove("prices-accourdion-open");
    pro.classList.remove("prices-btn-open");
  }
});

standard.addEventListener("click", () => {
  accourdionStandard.classList.toggle("prices-accourdion-open");
  standard.classList.toggle("prices-btn-open");
  rowTop.classList.toggle("row-top-opened");
  if (accourdionBasics.classList.contains("prices-accourdion-open")) {
    accourdionBasics.classList.remove("prices-accourdion-open");
    basics.classList.remove("prices-btn-open");
  }
  if (accourdionPro.classList.contains("prices-accourdion-open")) {
    accourdionPro.classList.remove("prices-accourdion-open");
    pro.classList.remove("prices-btn-open");
  }
});

pro.addEventListener("click", () => {
  accourdionPro.classList.toggle("prices-accourdion-open");
  pro.classList.toggle("prices-btn-open");
  rowTop.classList.toggle("row-top-opened");
  if (accourdionStandard.classList.contains("prices-accourdion-open")) {
    accourdionStandard.classList.remove("prices-accourdion-open");
    standard.classList.remove("prices-btn-open");
  }
  if (accourdionBasics.classList.contains("prices-accourdion-open")) {
    accourdionBasics.classList.remove("prices-accourdion-open");
    basics.classList.remove("prices-btn-open");
  }
});

/* citi */

const selectWrapper = document.querySelector(".select-wrapper");
const select = document.querySelector(".select");
const arrow = document.querySelector(".arrow");
const city = document.querySelector(".city");

selectWrapper.addEventListener("click", function () {
  select.classList.toggle("open");
  arrow.classList.toggle("opened");
  if (select.classList.contains("open")) {
    city.classList.remove("city-show");
  }
});

const customOption = document.querySelectorAll(".custom-option");
const placeholder = document.querySelector(".placeholder");
const customOptionOpen = document.querySelector(".custom-option.selected");
const cityText = document.getElementById("city");
const phone = document.getElementById("phone");
const addres = document.getElementById("address");

for (let option of customOption) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      selectWrapper.classList.add("open");
      document.querySelector('.contacts img').classList.add('open')
      placeholder.classList.add("selected");
      customOptionOpen.classList.remove("selected");
      this.classList.add("selected");
      this.closest(".select").querySelector(
        ".select-trigger span"
      ).textContent = this.textContent;
      this.closest(".select")
        .querySelector(".select-trigger")
        .classList.add("selected-city");
      document.querySelector(".arrow").classList.add("opened");

      let value = this.dataset.value;
      switch (value) {
        case "Canandaigua":
          cityText.textContent = "Canandaigua, NY";
          phone.textContent = "+1	585	393 0001";
          addres.textContent = "151 Charlotte Street";
          break;
        case "NY":
          cityText.textContent = "New York City";
          phone.textContent = "+1	212	456 0002";
          addres.textContent = "9 East 91st Street";
          break;
        case "Yonkers":
          cityText.textContent = "Yonkers, NY";
          phone.textContent = "+1	914	678 0003";
          addres.textContent = "511 Warburton Ave";
          break;
        case "Sherrill":
          cityText.textContent = "Sherrill, NY";
          phone.textContent = "+1	315	908 0004";
          addres.textContent = "14 WEST Noyes BLVD";
          break;
        default:
      }
    }
    city.classList.add("city-show");
  });
}

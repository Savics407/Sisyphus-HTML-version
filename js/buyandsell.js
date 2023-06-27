const limit = document.getElementById("limit_price");
const amount = document.getElementById("input_field");
const total = document.getElementById("total");
const dropdown = document.querySelector(".dropnow");
const dropContent = document.getElementById("dropdown");
const navSearch = document.getElementById("nav_search");
const left = document.querySelectorAll(".left");
const coinSearch = document.getElementById("coinSearch");
const coinsList = document.querySelectorAll(".DropdownForCoins__coins");

dropdown.addEventListener("click", () => {
  dropContent.classList.toggle("isClicked");
});

const updateTotal = () => {
  const limitValue = limit.value || 0;
  const amountValue = amount.value || 0;
  const totalValue = limitValue * amountValue;

  total.textContent = totalValue.toFixed(2);
};

limit.addEventListener("input", updateTotal);
amount.addEventListener("input", updateTotal);

const search = (value) => {
  dropContent.classList.remove("isClicked");

  const searchValue = value.toLowerCase();

  coinsList.forEach((coin) => {
    // const pair = coin[i];
    const pairs = coin.getElementsByTagName("h1");

    for (let i = 0; i < pairs.length; i++) {
      const pairText = pairs[i].textContent.toLowerCase();

      if (pairText.includes(searchValue)) {
        coin.style.display = "flex";
        // alert("found");
        break;
      } else {
        coin.style.display = "none";
      }
    }
  });
};

navSearch.addEventListener("input", () => {
  search(navSearch.value);
  if (navSearch.value === null || navSearch.value === "") {
    dropContent.classList.add("isClicked");
  }
});

coinSearch.addEventListener("input", () => {
  search(coinSearch.value);
});

coinsList.forEach((coin) => {
  const left = coin.querySelector(".left");
  const h1 = left.querySelector("h1");
  coin.addEventListener("click", () => {
    const value = h1.textContent;
    dropdown.textContent = value;
  });
});

const forChart = document.getElementById("forCharts");
const orderBook = document.getElementById("orderbook");
const chartBox = document.querySelector(".tradingview__chart");
const order = document.querySelector(".orderbook");
const buy = document.querySelector(".buyMobile");
const buyAndSell = document.querySelector(".buyAndSell");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");
const expand = document.getElementById("expand")

forChart.addEventListener("click", () => {
  chartBox.style.display = "block";
  order.style.display = "none";
  orderBook.classList.remove("active");
  forChart.classList.add("active");
});

orderBook.addEventListener("click", () => {
  chartBox.style.display = "none";
  order.style.display = "block";
  forChart.classList.remove("active");
  orderBook.classList.add("active");
});

buy.addEventListener("click", () => {
  buyAndSell.style.transform = "translateY(0%)";
  overlay.classList.toggle("hide");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hide");
  buyAndSell.style.transform = "translateY(100%)";
});

menu.addEventListener("click", () => {
  nav.style.transform === "translateX(200%)"
    ? ((nav.style.display = "flex"), (nav.style.transform = "translateX(0%)"))
    : ((nav.style.display = "none"),
      (nav.style.transform = "translateX(200%)"));
});


expand.addEventListener('click', () => {
  chartBox.classList.toggle('expand')
})
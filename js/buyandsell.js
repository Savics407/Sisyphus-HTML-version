const limit = document.getElementById("limit_price");
const amount = document.getElementById("input_field");
const total = document.getElementById("total");
const dropdown = document.querySelector(".dropnow");
const dropContent = document.getElementById("dropdown");
const navSearch = document.getElementById("nav_search");
const left = document.querySelectorAll('.left')
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
    dropContent.classList.add('isClicked')
  } 
});

coinSearch.addEventListener("input", () => {
  search(coinSearch.value);
});

  coinsList.forEach((coin) => {
    const left = coin.querySelector(".left");
    const h1 = left.querySelector("h1");
    coin.addEventListener("click", () => {
        const value = h1.textContent
        dropdown.textContent = value
    });
  })

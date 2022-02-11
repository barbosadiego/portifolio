const container = document.querySelector(".container");

function searchPrice() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((response) =>
      Object.values(response).forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("container-card");
        div.classList.add(`card-item-${index}`);
        div.innerHTML = `
      <h2>valor em</h2>
      <span class="symbol">${item.symbol}</span>
      <span class="buy">${item.buy.toLocaleString("pt-BR")}</span>
    `;
        container.appendChild(div);
      })
    );
}
searchPrice();

setInterval(searchPrice, 1000 * 60);

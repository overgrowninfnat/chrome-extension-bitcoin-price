const priceEl = document.getElementById("price");
const imageEl = document.getElementById("bitcoin-image");

chrome.storage.sync.get(["bitcoin"], (result) => {
  priceEl.textContent = `$ ${result.bitcoin[0].current_price}`;
  imageEl.src = result.bitcoin[0].image;
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  priceEl.textContent = `$ ${changes.bitcoin.newValue[0].current_price}`;
});

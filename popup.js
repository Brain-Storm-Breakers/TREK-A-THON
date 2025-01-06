document.getElementById('findSimilarButton').addEventListener('click', () => {
    // Request image data from the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: "getImageData" }, async (response) => {
        const imageData = response.imageData;
        const similarProducts = await findSimilarProducts(imageData);
        displaySimilarProducts(similarProducts);
      });
    });
  });
  
  document.getElementById('getCouponsButton').addEventListener('click', async () => {
    const coupons = await fetchCoupons();
    applyBestCoupon(coupons);
  });
  
  function displaySimilarProducts(products) {
    // Implement the UI logic to display the similar products
  }
  
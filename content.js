// Function to extract image data from the webpage
function extractImageData() {
    const images = document.getElementsByTagName('img');
    const imageData = [];
    for (let i = 0; i < images.length; i++) {
      imageData.push(images[i].src);
    }
    return imageData;
  }
  
  // Send the image data to the popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "getImageData") {
      const imageData = extractImageData();
      sendResponse({ imageData: imageData });
    }
  });
  
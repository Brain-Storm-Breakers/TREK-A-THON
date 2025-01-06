async function fetchCoupons() {
    const response = await fetch('https://api.couponprovider.com/get-coupons');
    const coupons = await response.json();
    return coupons;
  }
  
  function applyBestCoupon(coupons) {
    // Logic to apply the best coupon
  }
  
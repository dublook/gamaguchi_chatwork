var count = 0;
var intv = setInterval(function() {
  if (count > 10) clearInterval(intv);
  var adCont = document.querySelector('.promotionContent');
  if (!adCont) {
    count++;
    return;
  }
  var adArea = adCont.parentNode;
  adArea.removeChild(adCont);
  adArea.innerHTML = '<iframe src="https://www.flickr.com/photos/princess_monkey/4903596973/in/photolist-6gLnms-4kzwwD-iS268S-4kDxWj-4kzwen-9jRzqu-8LXiNw-8Frhy3-4kzwrr-6zqn42-9aPTGG-9aLKMP-8iLKcz-fjGcXJ-5PGYE4-6E4HVy-95RxbP-95Rxhv-95Uzbs-95Rxkz-95RxnH-95Uzcs-95Uzh9-95Rxjt-95Rxit-95Uz9u-95RxdP-agrtib-fjs2z6-LngAS-5PF6Li-AnVpR-6xAaSb-Gx3LJ-Cc5r8-Cc7Lr-Cc5r2-agoHhp-agoGYr-agoHA8-Cc5r5-AnVpT-fjGcNs-fjGcTS-4Shxoi-fjGd33-fjs34e-8tjdxp-8tjdxT-8iLKdg/player/" width="300" height="250" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>'
  clearInterval(intv);
}, 1000);

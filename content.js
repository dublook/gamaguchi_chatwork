(function() {
  var URLs = {
    picRoot: 'https://dl.dropboxusercontent.com/u/7133726/gamaguchi/',
    miumiuOfficial: 'http://www.miumiu.com/',
    miumiuGamaguchi: 'http://www.buyma.com/item/12052093/',
    nikuiYatsu: 'http://kyoto-tukuribito.jp/SHOP/669985/669987/list.html',
    whatsUpMan: 'https://www.youtube.com/watch?v=AnH493ZX5Kw'
  }

  var chatworkCtrl = (function(){
    var _chatText = document.getElementById('_chatText');
    var _sendButton = document.getElementById('_sendButton');
    var _myStatusName = document.getElementById('_myStatusName');
    var getAdContent = function() {
        return document.querySelector('.promotionContent');
    }
    return {
      sendMessage: function(msg) {
        _chatText.value = msg;
        _sendButton.click();
      },
      userNameLike: function(text) {
        return _myStatusName.innerHTML.indexOf(text) > -1;
      },
      existsAdContent: function() {
        return getAdContent() !== null;
      },
      showAdContent: function(content) {
        var adArea = document.querySelector('.promotionArea');
        while (adArea.firstChild) adArea.removeChild(adArea.firstChild);
        adArea.appendChild(content);
      }
    }
  })();

  var elementUitls = (function() {
    return {
      newImg: function(imgUrl) {
        var img = document.createElement('img');
        img.setAttribute('src', imgUrl);
        img.setAttribute('width', '300');
        img.setAttribute('height', '250');
        img.setAttribute('style', 'cursor: pointer;');
        return img;
      },
      newBlankLink: function(linkTo) {
        var link = document.createElement('a');
        link.setAttribute('href', linkTo);
        link.setAttribute('target', '_blank');
        return link;
      }
    }
  })();

  var gamaguchiProvider = (function() {

    var gamaguchiList = [];
    function getRandomInt(min, max) {
      return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    return {
      add: function(gamaguchi) {
        gamaguchiList.push(gamaguchi);
        return this;
      },
      getRandom: function() {
        if (gamaguchiList.length === 0) {
          return null;
        }
        var lastIndex = gamaguchiList.length-1;
        return gamaguchiList[getRandomInt(0, lastIndex)];
      }
    }
  })();

  gamaguchiProvider.add(function() {
    var img =  elementUitls.newImg(URLs.picRoot + 'neko.png');
    var link = elementUitls.newBlankLink(URLs.whatsUpMan);
    link.appendChild(img);
    return link;
  }).add(function() {
    var img = elementUitls.newImg(URLs.picRoot + '1D2N1824b.jpg');
    var link = elementUitls.newBlankLink(URLs.nikuiYatsu);
    link.appendChild(img);
    return link;
  }).add(function() {
    var img = elementUitls.newImg(URLs.picRoot + 'miumiu.png');
    img.onclick = function() {
      if (!chatworkCtrl.userNameLike('宇')) {
        return window.open(URLs.miumiuOfficial, null);
      }
      chatworkCtrl.sendMessage('クリスマスは妻にmiumiuのがま口でも買ってやろうかと思うんですよ、ぐへへ')
      chatworkCtrl.sendMessage(URLs.miumiuGamaguchi);
    };
    return img;
  }).add(function() {
    var span = document.createElement('span');
    span.innerHTML = '<iframe src="https://www.flickr.com/photos/princess_monkey/4903596973/in/photolist-6gLnms-4kzwwD-iS268S-4kDxWj-4kzwen-9jRzqu-8LXiNw-8Frhy3-4kzwrr-6zqn42-9aPTGG-9aLKMP-8iLKcz-fjGcXJ-5PGYE4-6E4HVy-95RxbP-95Rxhv-95Uzbs-95Rxkz-95RxnH-95Uzcs-95Uzh9-95Rxjt-95Rxit-95Uz9u-95RxdP-agrtib-fjs2z6-LngAS-5PF6Li-AnVpR-6xAaSb-Gx3LJ-Cc5r8-Cc7Lr-Cc5r2-agoHhp-agoGYr-agoHA8-Cc5r5-AnVpT-fjGcNs-fjGcTS-4Shxoi-fjGd33-fjs34e-8tjdxp-8tjdxT-8iLKdg/player/" width="300" height="250" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>'
    return span;
  });

  var count = 0;
  var intv = setInterval(function() {
    if (count > 100) { 
      clearInterval(intv);
      return;
    }
    if (!chatworkCtrl.existsAdContent()) {
      count++;
      return;
    }
    var gamaguchi = gamaguchiProvider.getRandom().call();
    chatworkCtrl.showAdContent(gamaguchi);
    clearInterval(intv);
  }, 500);
})();

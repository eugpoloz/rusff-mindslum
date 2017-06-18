(function preloadImages(urls) {
  let img = new Image();
  urls.forEach(url => img.cloneNode().src = url);
})(['http://co.forum4.ru/files/0017/ce/9f/92846.png']);
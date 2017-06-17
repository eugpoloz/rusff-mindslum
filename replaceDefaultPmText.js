(function replaceDefaultPmText() {
  const NAV = document.querySelector('#navpm');
  const NAV_SPAN = NAV.querySelector('span');

  if ( NAV.length > 0 && NAV_SPAN.innerText !== 'Сообщения' ) {
    NAV_SPAN.innerText = NAV_SPAN.innerText.replace(/Сообщения\&nbsp\;\((.*)?\)/i, '$1');
    NAV_SPAN.classList.add('newmess');

    return NAV_SPAN.style.display = 'block';
  }
})();
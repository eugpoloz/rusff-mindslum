(function insertIconToGreeting() {
  const iconContainer = `<div class="greeting-icon" style="background-image:url(${UserAvatar})"></div>`;
  const parentEl = document.querySelector("#pun-status .item1");

  return parentEl.insertAdjacentHTML("afterbegin", iconContainer);
})();
(function selectCodeContents() {
  const CODE_BOX_NODES = document.querySelectorAll('.code-box');

  CODE_BOX_NODES.forEach(el => {
    const LEGEND = el.querySelector('.legend');
    const CODE = el.querySelector('.blockcode pre');
    LEGEND.innerHTML = '<a href="#" class="js-select-code">Нажмите, чтобы выделить код:</a>';
    
    return el.querySelector('.js-select-code').addEventListener('click', (e) => {
      e.preventDefault();
      selectCode(CODE);
    }, false);
  });

  function selectCode(el) {
    var range = document.createRange();
    var sel = window.getSelection();

    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
  };
})();
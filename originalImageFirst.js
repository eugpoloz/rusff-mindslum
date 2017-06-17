(function originalImageFirst() {
  const FROM_PC = document.querySelector('#image-area-tcon-computer');
  const UPLOAD = FROM_PC.querySelector('#upload-button');

  function setOriginalImgFirst() {
    var selectInterval;

    function selectOriginal() {
      const SELECT = FROM_PC.querySelector('#image-insert-format');

      if (SELECT.hasChildNodes()) {
        const OPTIONS = SELECT.querySelectorAll('option');
        const ORIG_FIRST = SELECT.querySelector('option[value="source"]');
        OPTIONS.forEach(option => option.removeAttribute('selected'));
        clearInterval(selectInterval);

        return ORIG_FIRST.selected = 'selected';
      }
    }

    selectInterval = setInterval(selectOriginal, 200);
  }

  UPLOAD.addEventListener('click', setOriginalImgFirst, false);
})();
(function removeFldNames(flds) {
  let queryClasses = [];
  flds.forEach(fld => queryClasses.push(`.post-author li.pa-fld${fld}`));

  let fldList = document.querySelectorAll(queryClasses.join(', '));
  fldList.forEach(node => {
    let arrHTML = node.innerHTML.split(": ");
    arrHTML.splice(0, 1);

    return node.innerHTML = arrHTML.join("");
  });
})([1]);